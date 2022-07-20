import { isEnterKey, isEscapeKey } from "./utils";

//создаем переменные для оброботчика событий на контрол загрузки

const uploadFileControl = document.querySelector('#upload-file');
const uploadCancelControl = document.querySelector('.img-upload__cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

// создаем событие закрытия окна по клавише Esc

const onModalEscKey = (evt) => {
  const input = evt.target.tagName;
  if (input === 'INPUT' || input === 'TEXTAREA'){
    evt.stopPropagation();
  } else if(isEscapeKey(evt)){
    evt.preventDefault();
    closeWindowModal();
  }
}

// функция открытия модального окна

function openWindowModal () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKey);
};

// функция закрытия модального окна

function closeWindowModal () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKey);
  uploadFileControl.value ='';
}

// создаем обработчик на открытие по значению #upload-file

uploadFileControl.addEventListener('change', () => {
  openWindowModal();
});

//создаем обработчики на открытие и закрытие по клавише Enter

uploadFileControl.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openWindowModal();
  }
});

uploadCancelControl.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeWindowModal();
  }
});

// создаем обработчик закрытия по клику

uploadCancelControl.addEventListener('click', () => {
  if (isEnterKey(evt)) {
    closeWindowModal();
  }
});
