const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key.match(/[^а-яё 0-9]/ig) && e.key.match(/[^а-яії 0-9]/ig)) {
        e.preventDefault();
        input.placeholder = 'Только латиница';
      } 
    });
  });
}

export default checkTextInputs;