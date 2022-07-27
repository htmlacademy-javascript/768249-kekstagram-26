import { createPhoto } from "./data";

// ищем в разметке блок с изображениями других пользователей
//затем обращаемся к фрагменту по сылке

const differentPictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').textContent.querySelector('.picture');

//создаем контейнер из фрагмента

const picturesFragment = document.createDocumentFragment();
const photoDescrition = createPhoto();

//перебираем массив с фото и плюсуем к нему данные

photoDescrition.forEach(({url, likes, comments}) => {
  //создаем клон и присваиваем ему данные
  const element = picturesTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__likes').textContent = likes;
  element.querySelector('.picture__comments').textContent = comments.length;
  picturesFragment.appendChild(element);
});

//добавляем обертку контейнеру

differentPictures.appendChild(picturesFragment);

export {differentPictures};
