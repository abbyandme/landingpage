var splide;
var previousButton, nextButton;
var rotationButton, pauseContainer, resumeContainer;

document.addEventListener('DOMContentLoaded', function() {
  previousButton = document.querySelector('.carousel .previous-button');
  nextButton = document.querySelector('.carousel .next-button');

  rotationButton = document.querySelector('.carousel .rotation-button');
  pauseContainer = document.querySelector('.carousel .rotation-button .pause-container');
  resumeContainer = document.querySelector('.carousel .rotation-button .resume-container');

  splide = new Splide('.splide', {
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,

    arrows: false,
    perPage: 1,
    type: 'loop',
    pagination: true,
    keyboard: false,  // Splide listens to key events at the document level and moves ALL carousels when arrow keys are used. Since keyboard and screen reader users use these keys to operate the tabs, this creates a very unusual experience.
    slideFocus: false  // removes tabindex="0" from each slide wrapper, since we only want our links inside each slide to receive focus.
  }).mount();

  // To prevent animation issues, let's make every slide visible before a transition happens. Splide will then automatically remove the `.is-visible` class from non-visible slides once the transition is finished.
  splide.on('move', function() {
    var slides = document.querySelectorAll('.splide .splide__slide');

    slides.forEach(function(slide) {
      slide.classList.add('is-visible');
    });
  });

  // Go to the previous slide and stop autoplay when the Previous button is activated
  previousButton.addEventListener('click', function(e) {
    disableAutoplay();
    splide.go('<');
  });

  // Go to the next slide and stop autoplay when the Next button is activated
  nextButton.addEventListener('click', function(e) {
    disableAutoplay();
    splide.go('>');
  });

  // Toggle autoplay when the pause/resume button is activated
  rotationButton.addEventListener('click', function(e) {
    toggleAutoplay();
  });
});


/**
  Disable or enable built-in Splide Slider autoplay
*/
function toggleAutoplay() {
  var autoplayEnabled = splide.options.autoplay;

  if(autoplayEnabled) {
    disableAutoplay();
  } else {
    enableAutoplay();
  }
}

function disableAutoplay() {
  // Disable autoplay using the Splide API
  splide.Components.Autoplay.pause();
  splide.options = { autoplay: false };

  // Switch the rotation button icon to "resume"
  pauseContainer.classList.remove('is-visible');
  resumeContainer.classList.add('is-visible');
}

function enableAutoplay() {
  // Disable autoplay using the Splide API
  splide.Components.Autoplay.play();
  splide.options = { autoplay: true };

  // Switch the rotation button icon to "pause"
  pauseContainer.classList.add('is-visible');
  resumeContainer.classList.remove('is-visible');
}
