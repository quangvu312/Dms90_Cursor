(function (DMS) {
  const _treeCache = null;

  function flattenPaths(nodes, trail = [], map = {}) {
    (nodes || []).forEach((node) => {
      const path = [...trail, node.label];
      if (node.selectable) {
        map[node.id] = { id: node.id, label: node.label, path };
      }
      if (node.children?.length) flattenPaths(node.children, path, map);
    });
    return map;
  }

  function filterTree(nodes, keyword) {
    const q = (keyword || '').trim().toLowerCase();
    if (!q) return nodes;
    const walk = (list) => list.reduce((acc, node) => {
      const children = node.children ? walk(node.children) : [];
      const match = node.label.toLowerCase().includes(q);
      if (match || children.length) {
        acc.push({ ...node, children });
      }
      return acc;
    }, []);
    return walk(nodes);
  }

  function renderNodes(nodes, depth, selectedId, expanded) {
    return (nodes || []).map((node) => {
      const hasChildren = node.children && node.children.length;
      const isExpanded = expanded.has(node.id);
      const isSelected = selectedId === node.id;
      const pad = depth * 18;
      let html = `<div class="dms-treeselect__node" data-node-id="${DMS.escape(node.id)}" style="padding-left:${pad}px">`;
      if (hasChildren) {
        html += `<button type="button" class="dms-treeselect__toggle" data-action="treeselect-toggle" data-node-id="${DMS.escape(node.id)}" aria-label="Toggle">${isExpanded ? '▼' : '▶'}</button>`;
      } else {
        html += `<span class="dms-treeselect__toggle dms-treeselect__toggle--spacer"></span>`;
      }
      if (node.selectable) {
        html += `<label class="dms-treeselect__option ${isSelected ? 'is-selected' : ''}" data-action="treeselect-select" data-node-id="${DMS.escape(node.id)}">
          <input type="checkbox" class="dms-treeselect__checkbox" data-node-id="${DMS.escape(node.id)}" ${isSelected ? 'checked' : ''} />
          <span>${DMS.escape(node.label)}</span>
        </label>`;
      } else {
        html += `<span class="dms-treeselect__label">${DMS.escape(node.label)}</span>`;
      }
      html += '</div>';
      if (hasChildren && isExpanded) {
        html += renderNodes(node.children, depth + 1, selectedId, expanded);
      }
      return html;
    }).join('');
  }

  DMS.register('TreeSelect', {
    _instances: new Map(),

    render(props = {}) {
      const {
        id = `treeselect-${Math.random().toString(36).slice(2, 8)}`,
        label = '',
        value = '',
        displayValue = '',
        placeholder = 'Chọn tổ đội',
        disabled = false,
        readonly = false,
        requiredMark = false,
        data = [],
        className = ''
      } = props;

      const pathText = displayValue || '';
      const req = requiredMark ? ' is-required' : '';
      const field = `
        <div class="dms-treeselect ${disabled ? 'is-disabled' : ''} ${readonly ? 'is-readonly' : ''} ${className}" id="${DMS.escape(id)}" data-treeselect-id="${DMS.escape(id)}">
          <div class="dms-treeselect__control" data-action="treeselect-open" data-placeholder="${DMS.escape(placeholder)}" tabindex="0" role="combobox" aria-expanded="false">
            <input type="hidden" class="dms-treeselect__value" name="${DMS.escape(id)}" value="${DMS.escape(value)}" />
            <span class="dms-treeselect__display ${pathText ? '' : 'is-placeholder'}">${DMS.escape(pathText || placeholder)}</span>
            ${!readonly && !disabled ? `
              ${pathText ? `<button type="button" class="dms-treeselect__clear" data-action="treeselect-clear" aria-label="Clear">×</button>` : ''}
              <span class="dms-treeselect__search-icon">⌕</span>
            ` : ''}
          </div>
          ${!readonly && !disabled ? `
            <div class="dms-treeselect__dropdown">
              <input type="text" class="dms-treeselect__search dms-input" placeholder="Tìm kiếm..." data-action="treeselect-search" />
              <div class="dms-treeselect__tree" data-treeselect-tree></div>
            </div>
          ` : ''}
        </div>`;

      this._instances.set(id, { data, value, expanded: new Set((data || []).map(n => n.id)) });

      if (label) {
        return `<div class="dms-form-item"><label class="dms-form-item__label${req}">${DMS.escape(label)}</label>${field}</div>`;
      }
      return field;
    },

    bindAll(root) {
      if (!root) return;
      root.querySelectorAll('[data-treeselect-id]').forEach((el) => this.bind(el));
      if (!this._docBound) {
        this._docBound = true;
        document.addEventListener('click', (e) => {
          if (e.target.closest('.dms-treeselect')) return;
          document.querySelectorAll('.dms-treeselect.is-open').forEach((open) => {
            open.classList.remove('is-open');
            open.querySelector('.dms-treeselect__control')?.setAttribute('aria-expanded', 'false');
          });
        });
      }
    },

    bind(el) {
      const id = el.dataset.treeselectId;
      const state = this._instances.get(id);
      if (!state || el.dataset.treeselectBound) return;
      el.dataset.treeselectBound = '1';

      const setOpen = (open) => {
        el.classList.toggle('is-open', open);
        el.querySelector('.dms-treeselect__control')?.setAttribute('aria-expanded', open ? 'true' : 'false');
        const drop = el.querySelector('.dms-treeselect__dropdown');
        if (drop) drop.hidden = !open;
        if (open) {
          DMS.closeAllOverlays(el);
          const control = el.querySelector('.dms-treeselect__control');
          if (control && drop) DMS.placeOverlay(drop, control);
        }
      };

      const refreshTree = (keyword = '') => {
        const treeEl = el.querySelector('[data-treeselect-tree]');
        if (!treeEl) return;
        const filtered = filterTree(state.data, keyword);
        const val = el.querySelector('.dms-treeselect__value')?.value || '';
        treeEl.innerHTML = renderNodes(filtered, 0, val, state.expanded);
      };

      refreshTree();
      setOpen(false);

      el.addEventListener('click', (e) => {
        const action = e.target.closest('[data-action]')?.dataset.action;
        if (!action) return;

        if (action === 'treeselect-open') {
          if (el.classList.contains('is-readonly') || el.classList.contains('is-disabled')) return;
          const open = !el.classList.contains('is-open');
          setOpen(open);
          if (open) {
            refreshTree();
            el.querySelector('.dms-treeselect__search')?.focus();
          }
          e.stopPropagation();
        }

        if (action === 'treeselect-toggle') {
          e.preventDefault();
          e.stopPropagation();
          const nodeId = e.target.closest('[data-node-id]')?.dataset.nodeId;
          if (!nodeId) return;
          if (state.expanded.has(nodeId)) state.expanded.delete(nodeId);
          else state.expanded.add(nodeId);
          refreshTree(el.querySelector('.dms-treeselect__search')?.value || '');
        }

        if (action === 'treeselect-select') {
          e.stopPropagation();
          const nodeId = e.target.closest('[data-node-id]')?.dataset.nodeId;
          const map = flattenPaths(state.data);
          const picked = map[nodeId];
          if (!picked) return;
          el.querySelector('.dms-treeselect__value').value = picked.id;
          const display = el.querySelector('.dms-treeselect__display');
          display.textContent = picked.path.join(' > ');
          display.classList.remove('is-placeholder');
          setOpen(false);
          el.dispatchEvent(new CustomEvent('treeselect:change', { bubbles: true, detail: picked }));
          refreshTree(el.querySelector('.dms-treeselect__search')?.value || '');
        }

        if (action === 'treeselect-clear') {
          e.preventDefault();
          e.stopPropagation();
          el.querySelector('.dms-treeselect__value').value = '';
          const display = el.querySelector('.dms-treeselect__display');
          display.textContent = el.querySelector('.dms-treeselect__control')?.getAttribute('data-placeholder') || 'Chọn tổ đội';
          display.classList.add('is-placeholder');
          setOpen(false);
          el.dispatchEvent(new CustomEvent('treeselect:change', { bubbles: true, detail: null }));
          refreshTree('');
        }
      });

      el.addEventListener('input', (e) => {
        if (e.target.matches('[data-action="treeselect-search"]')) {
          refreshTree(e.target.value);
        }
      });
    },

    getPathMap(data) {
      return flattenPaths(data || []);
    }
  });
})(window.DMS);
