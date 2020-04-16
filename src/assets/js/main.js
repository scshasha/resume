if (window.addEventListener) { window.addEventListener('load', initCustomJS); }
else { window.attachEvent('onload', initCustomJS); }

/**
 * MAIN CUSTOM JS INIT.
 */
function initCustomJS() {

  if (typeof jQuery == 'undefined') { setTimeout(initCustomJS, 500); }

  /** print message to console */
  console.log("DOM ready...");

  $('div[class^="cat-item-"]').on('click', (event) => {
    const target = event.target;
    console.log(target);
    $('div[class^="cat-item-"]').removeClass('is-active');
    $(target).addClass('is-active');
    console.log(target);

    // $(this).addClass("is-active").siblings().removeClass("is-active");
  });
}
