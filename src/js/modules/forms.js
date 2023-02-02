import {postData} from '../services/requests';

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');

    const size = document.querySelectorAll('#size'),
          material = document.querySelectorAll('#material'),
          options = document.querySelectorAll('#options'),
          promocode = document.querySelectorAll('.promocode'),
          result = document.querySelectorAll('.calc-price');

    let state = {};
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const clearInputs = () => {
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            let dots;
            const arr = item.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    function bindActionToElems (event, elem, prop) {
        elem.forEach(item => {
          item.addEventListener(event, () => {
            switch(item.nodeName) {
              case 'INPUT':   
                  state[prop] = item.value;
                break;
              case 'SELECT':
                state[prop] = item.value; 
                break;
            }
            console.log(state);
          });
        });
    }

    bindActionToElems('input', size, 'optsizeion');
    bindActionToElems('input', material, 'material');
    bindActionToElems('input', options, 'options');
    bindActionToElems('input', promocode, 'promocode');
    bindActionToElems('input', result, 'result');

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');

            item.classList.add('animated', 'fadeOut');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeIn');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);

            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            if (api === path.designer) {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
                formData.append('total', result[0].textContent);
            }
            console.log(api);
            console.log(result[0].textContent);
            

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                    setTimeout(() => {
                        item.parentNode.appendChild(statusMessage);
                    }, 400);
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOut');
                        item.classList.add('fadeIn');
                        item.reset();
                    }, 5000);
                    state = {};
                });
        });
    });
};

export default forms;