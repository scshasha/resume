if (window.addEventListener) { window.addEventListener('load', initCustomJS); }
else { window.attachEvent('onload', initCustomJS); }

/**
 * MAIN CUSTOM JS INIT.
 */
function initCustomJS() {

  if (typeof jQuery == 'undefined') { setTimeout(initCustomJS, 500); }

  /** print message to console */
  console.log("DOM ready...");

  /**
   * PROGRESS BAR ANIMATION.
   */
  $(".meter > span").each(function() {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate({
        width: $(this).data("origWidth") // or + "%" if fluid
      }, 1200);
  });
}
