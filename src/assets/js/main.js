if (window.addEventListener) { window.addEventListener('load', initCustomJS); }
else { window.attachEvent('onload', initCustomJS); }

/**
 * MAIN CUSTOM JS INIT.
 */
function initCustomJS() {

  if (typeof jQuery == 'undefined') { setTimeout(initCustomJS, 500); }

  /** print message to console */
  console.log("DOM ready...");
}
