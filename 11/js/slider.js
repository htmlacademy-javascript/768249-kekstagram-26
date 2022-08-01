const sliderMain = document.querySelector('.effect-level__slider');
const valueSlider = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');
const imagePreview = document.querySelector('.img-upload__preview');
let currentEffect = 'none';
// пишим код для слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

// создаем блок с эффектами

const effects = {
  none: () => {
    imagePreview.getElementsByClassName.filter = 'none';
  },
  chrome: (value) => {
    imagePreview.getElementsByClassName.filter = `grayscale(${value})`;
  },
  sepia: (value) => {
    imagePreview.style.filter = 'sepia(${value})'
  },
  marvin: (value) => {
    imagePreview.style.filter = 'invert(${value}%)'
  },
  phobos: (value) => {
    imagePreview.style.filter = 'blur(${value}px)'
  },
  heat: (value) => {
    imagePreview.style.filter = 'brightness(${value})'
  },
};

//пишим функцию применения эффекта
const applyEffect = () => {
  effectList.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('effects__preview')) {
      currentEffect = evt.target.classList[1].replace('effects__preview--'. '');
      effects[currentEffect](valueElement.value);
    }

    document.querySelector('.effect-level').classList.remove('hidden');
    sliderElement.noUiSlider.set(100);

    switch (currentEffect) {
      case 'marvin':
        sliderElement.noUiSlider.updateOptions({
          range : {
            min: 0,
            max: 100,
          },
          step: 1,
          start: 100,
        });
        break;
        case 'phobos':
          sliderElement.noUiSlider.updateOptions({
            range: {
              min: 0,
              max: 3,
            },
            step: 0.1,
            start: 3,
          });
          break;
          case 'none' :
            document.querySelector('.effect-level').classList.add('hidden');
    }
  });
};

sliderElement.noUiSlider.on('update', (values, handle) => {
  valueElement.value = values[handle];
  effects[currentEffect](valueElement.value);
});

document.querySelector('.effect-level').classList.add('hidden');

applyEffect();
