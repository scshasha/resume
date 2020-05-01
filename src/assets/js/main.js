if (window.addEventListener) { window.addEventListener('load', init); }
else { window.attachEvent('onload', init); }

/**
 * MAIN CUSTOM JS INIT.
 */
function init() {
  if (typeof jQuery == 'undefined') {
    setTimeout(init, 500);
  }
  /** print message to console */
  console.log("jQuery loaded...");

  /** ===================== PROJECT FILTER ACTIVE TOGGLE ============================ */
  $('div[class^="cat-item-"]').on('click', (event) => {
    const target = event.target;

    $('div[class^="cat-item-"]').removeClass('is-active');
    $(target).addClass('is-active');
  });
  /** ===================== END PROJECT FILTER ACTIVE TOGGLE ============================ */

  /** ===================== WELCOME SCREEN TITLE ANIMATION ============================ */
  // const spans = document.querySelectorAll('h1 span');
  // spans.forEach(span => span.addEventListener('mouseover', (event) => {
  //   span.classList.add('animated', 'rubberBand');
  // }));
  // spans.forEach(span => span.addEventListener('mouseout', (event) => {
  //   span.classList.remove('animated', 'rubberBand');
  // }));

  $('h1').on('mouseover', 'span', (event) => {
    const span = event.target;
    span.classList.add('animated', 'rubberBand');
  });
  $('h1').on('mouseout', 'span', (event) => {
    const span = event.target;
    span.classList.remove('animated', 'rubberBand');
  });
  /** ===================== END WELCOME SCREEN TITLE ANIMATION ============================ */

  /** ===================== SKILL PROGRESS ANIMATION ============================ */
  // const skills = document.querySelectorAll('span.progress-default');
  // skills.forEach(skill => skill.addEventListener('mouseover', (event) => {
  //   skill.classList.add('animated', 'rubberBand');
  // }));
  // skills.forEach(skill => skill.addEventListener('mouseout', (event) => {
  //   skill.classList.remove('animated', 'rubberBand');
  // }));
  /** ===================== END SKILL PROGRESS TITLE ANIMATION ============================ */
}
