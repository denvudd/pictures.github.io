const accordion = (triggersSelector) => {
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      btns.forEach(btn => {
        btn.classList.remove('active-style');
        btn.nextElementSibling.classList.remove('active-content');
        btn.nextElementSibling.style.maxHeight = '0px';
      })
      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');

      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });

  // const = blocks = document.querySelectorAll(itemsSelector);

  // blocks.forEach(block => {
  //   block.classList.add('animated', 'fadeInDown');
  // });

  // btns.forEach(btn => {
  //   btn.addEventListener('click', function() {
  //     if (this.classList.contains('active')) {
  //       btns.forEach(btn => {
  //         btn.classList.remove('active');
  //       })

  //       blocks.forEach(block => {
  //         block.classList.remove('accordion-block-active');
  //       })

  //       this.classList.remove('active');
  //       this.nextElementSibling.classList.remove('accordion-block-active');
  //     } else {
  //       btns.forEach(btn => {
  //         btn.classList.remove('active');
  //       })

  //       blocks.forEach(block => {
  //         block.classList.remove('accordion-block-active');
  //       })

  //       this.classList.add('active');
  //       this.nextElementSibling.classList.add('accordion-block-active');
  //     }
  //   });
  // });
}

export default accordion;