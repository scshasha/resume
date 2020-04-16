if (window.addEventListener) { window.addEventListener('load', initCustomJS); }
else { window.attachEvent('onload', initCustomJS); }

/**
 * MAIN CUSTOM JS INIT.
 */
function initCustomJS() {

  if (typeof jQuery == 'undefined') { setTimeout(initCustomJS, 500); }

  /** print message to console */
  console.log("DOM ready...");


  /** ===================== CATEGORY TOGGLE ============================ */

  $('div[class^="cat-item-"]').on('click', (event) => {
    const target = event.target;

    $('div[class^="cat-item-"]').removeClass('is-active');
    $(target).addClass('is-active');
  });


  /** ===================== ANIMATION ============================ */

  const spans = document.querySelectorAll('h1 span');

  spans.forEach(span => span.addEventListener('mouseover', (e) => {
    span.classList.add('animated', 'rubberBand');
  }));
  spans.forEach(span => span.addEventListener('mouseout', (e) => {
    span.classList.remove('animated', 'rubberBand');
  }));







}
