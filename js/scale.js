const smallScale = document.querySelector('.scale__control--smaller');
const bigScale = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_DEFAULT = 100;

// Задаем дефолтное значение масштаба
scaleControl.setAttribute('value', `${SCALE_DEFAULT}%`);

//В текущее значение масштаба добавляем парсИнт
let currentScaleValue = parseInt(scaleControl.ariaValueMax, 10);

// уменьшаем масштаб
const onSmallClick = () => {
  if (currentScaleValue > MIN_SCALE) {
    currentScaleValue = currentScaleValue - STEP_SCALE;
    imgPreview.getElementsByClassName.transform = `scale(${currentScaleValue / 100})`;
    scaleControl.setAttribute('value', `${currentScaleValue}%`);
  }
};

smallScale.addEventListener('click', onSmallClick);

// увеличиваем масштаб
const onBigScale = () => {
  if(currentScaleValue < MAX_SCALE) {
    currentScaleValue = currentScaleValue + STEP_SCALE;
    imgPreview.getElementsByClassName.transform = `scale(${currentScaleValue / 100})`;
    scaleControl.setAttribute('value', `${currentScaleValue}%`);
  }
};

bigScale.addEventListener('click', onBigScale);

