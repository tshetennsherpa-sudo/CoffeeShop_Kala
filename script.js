(function () {
  function showPopup(itemName) {
    const overlay = document.createElement('div');
    overlay.id = 'buy-popup-overlay';
    overlay.style.cssText = [
      'position: fixed',
      'inset: 0',
      'background: rgba(44, 24, 16, 0.5)',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'z-index: 100',
    ].join(';');

    const box = document.createElement('div');
    box.style.cssText = [
      'background: #F5F0E8',
      'color: #2C1810',
      'padding: 1.5rem 2rem',
      'border-radius: 1rem',
      'box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25)',
      'max-width: 90vw',
      'text-align: center',
      'font-family: "DM Sans", system-ui, sans-serif',
    ].join(';');
    box.innerHTML = [
      '<p style="margin:0 0 0.5rem; font-size:1.125rem;">Added to order</p>',
      '<p style="margin:0; font-weight:600; font-size:1.25rem;">' + escapeHtml(itemName) + '</p>',
      '<button type="button" id="buy-popup-close" style="margin-top:1rem; padding:0.5rem 1.25rem; background:#2C1810; color:#F5F0E8; border:none; border-radius:9999px; font-size:0.875rem; cursor:pointer;">OK</button>',
    ].join('');

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    function close() {
      overlay.remove();
      document.body.style.overflow = '';
    }

    document.body.style.overflow = 'hidden';
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    box.querySelector('#buy-popup-close').addEventListener('click', close);
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  document.querySelectorAll('.buy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.getAttribute('data-item') || 'Item';
      showPopup(item);
    });
  });
})();
