const sliders = (slides, direction, prev, next) => {
  let slideIndex = 1, // current slide
      pause = false;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function changeSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      changeSlides(-1);
      items[slideIndex - 1].classList.remove('fadeIn');
      items[slideIndex - 1].classList.add('fadeIn');
    });

    nextBtn.addEventListener('click', () => {
      changeSlides(1);
      items[slideIndex - 1].classList.remove('fadeIn');
      items[slideIndex - 1].classList.add('fadeIn');
    });
  } catch(e) {}

  function activateAnimation () {
    if (direction === 'vertical') {
      pause = setInterval(() => {
        changeSlides(1);
        items[slideIndex - 1].classList.add('fadeInLeft');
      }, 4000);
    } else {
      pause = setInterval(() => {
        changeSlides(1);
        items[slideIndex - 1].classList.remove('fadeIn');
        items[slideIndex - 1].classList.add('fadeIn');
      }, 5000);
    }
  }

  activateAnimation();

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(pause);
  });

  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });

  if (window.screen.availWidth < 992) {
    console.log('mobile');
    clearInterval(pause);
    
  }
}

export default sliders;