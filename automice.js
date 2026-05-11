(function(){
  try {
    function start() {
      console.log('[automice] active');

      var style = document.createElement('style');
      style.setAttribute('data-automice', '1');
      style.textContent = '*, *::before, *::after { cursor: none !important; }';
      (document.head || document.documentElement).appendChild(style);

      function autoClick() {
        try {
          var x = Math.floor(Math.random() * (window.innerWidth || 800));
          var y = Math.floor(Math.random() * (window.innerHeight || 600));
          var el = document.elementFromPoint(x, y);
          if (el) {
            var opts = { bubbles: true, cancelable: true, view: window, clientX: x, clientY: y, button: 0 };
            el.dispatchEvent(new MouseEvent('mousemove', opts));
            el.dispatchEvent(new MouseEvent('mousedown', opts));
            el.dispatchEvent(new MouseEvent('mouseup', opts));
            el.dispatchEvent(new MouseEvent('click', opts));
          }
        } catch (e) {}
        setTimeout(autoClick, 600 + Math.random() * 1400);
      }
      autoClick();

      var KEYS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','Enter','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Tab'];
      function autoKey() {
        try {
          var k = KEYS[Math.floor(Math.random() * KEYS.length)];
          var init = { key: k, code: k, bubbles: true, cancelable: true };
          var target = document.activeElement || document.body || document.documentElement;
          target.dispatchEvent(new KeyboardEvent('keydown', init));
          target.dispatchEvent(new KeyboardEvent('keypress', init));
          target.dispatchEvent(new KeyboardEvent('keyup', init));
        } catch (e) {}
        setTimeout(autoKey, 800 + Math.random() * 1800);
      }
      autoKey();
    }

    setTimeout(start, 1000);
  } catch (e) {
    console.warn('[automice] init error', e);
  }
})();