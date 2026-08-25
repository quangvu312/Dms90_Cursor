(function (DMS) {
  DMS.register('Tooltip', {
    render(props = {}) {
      const { text = '', content = '' } = props;
      return `<span class="dms-tooltip-trigger" data-tooltip="${DMS.escape(text)}">${content}</span>`;
    },

    init(container = document) {
      container.addEventListener('mouseover', (e) => {
        const trigger = e.target.closest('[data-tooltip]');
        if (!trigger) return;
        const tip = document.createElement('div');
        tip.className = 'dms-tooltip';
        tip.textContent = trigger.dataset.tooltip;
        document.body.appendChild(tip);
        const rect = trigger.getBoundingClientRect();
        tip.style.top = `${rect.top - tip.offsetHeight - 8}px`;
        tip.style.left = `${rect.left + rect.width / 2 - tip.offsetWidth / 2}px`;
        trigger._tooltip = tip;
      });
      container.addEventListener('mouseout', (e) => {
        const trigger = e.target.closest('[data-tooltip]');
        if (trigger && trigger._tooltip) {
          trigger._tooltip.remove();
          delete trigger._tooltip;
        }
      });
    }
  });
})(window.DMS);
