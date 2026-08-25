(function (DMS) {
  DMS.register('Tree', {
    render(props = {}) {
      const renderNode = (node, depth = 0) => {
        const hasChildren = node.children && node.children.length;
        const padding = depth * 20;
        let html = `<div class="dms-tree__node" style="padding-left:${padding}px">
          ${hasChildren ? '<span class="dms-tree__toggle">▶</span>' : '<span class="dms-tree__toggle dms-tree__toggle--leaf">•</span>'}
          <span>${DMS.escape(node.label)}</span>
        </div>`;
        if (hasChildren) {
          html += node.children.map(c => renderNode(c, depth + 1)).join('');
        }
        return html;
      };
      const nodes = (props.data || []).map(n => renderNode(n)).join('');
      return `<div class="dms-tree">${nodes}</div>`;
    }
  });
})(window.DMS);
