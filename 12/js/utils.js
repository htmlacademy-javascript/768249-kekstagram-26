//Добавляем функцию для возврата рандомного числа из заданного диапозона

const getRandomNumber = (min, max) {
  if (min < 0 || max < 0) {
    return ('Ошибка, входное значение меньше 0');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber();

//функция поиска случайного элемента в выбраном массиве

const getRandomArray = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

//Функция сравнения длины строки(кол-во букв в комментарии)от написаной до максимальной

const checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength(1, 2);

//создаем кнопки ENTER и Escape
const isEscapeKey = (evt) => evt.key ==='Escape';
const isEnterKey = (evt) => evt.key ==='Enter';

const showErrorMessage = () => {
  document.body.appendChild(errorMessageTemplate);

  const errorButton = document.querySelector('.error__button');
  const errorMessage = document.querySelector('.error');
  const clearErrorMessage = () => errorMessage.remove();

  errorButton.addEventListener('click', clearErrorMessage);
  document.addEventListener('click', (evt) => {
    if (evt.target.matches('.error')) {
      errorButton.removeEventListener('click', clearErrorMessage);
      errorMessage.remove();
    }
  });


  window.addEventListener('keydown', (evt) => {
    if (isEscapeKey) {
      evt.preventDefault();
      errorButton.removeEventListener('click', clearErrorMessage);
      errorMessage.remove();
    }
  });
};

const showAlert = (errorMessage) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = errorMessage;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const checkDuplicates = (data) => (new Set(data)).size !== data.length;

export {isEscapeKey, isEnterKey};
export {getRandomNumber};
export {getRandomArray};
export {stringLength};
