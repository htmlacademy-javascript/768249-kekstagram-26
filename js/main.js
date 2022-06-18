 /* jshint esversion: 6 */
//возвращаем рандомное число(включительное)  из переданного диапозона
/*function getRandom(min, max){
  min=Math.ceil(0);
  max=Math.floor(10);
  //условие выполнения параметров функции
  if(min <= 0){
    console.log('отрицательное значение');
    if(max >= 10){
      console.log('значени превышает допустимый максимум');
    }
  }
  //возвращение валидных значений
  return Math.floor(Math.random() (max - min + 1)) + min;
  //включаем максимальное и минимальное значения
}
getRandom(0, 100);
//функция проверки длинны строки

const getLengthStr = function(initialStr, maxLenght){
  return (maxLenght.length > initialStr);
};

getLengthStr('comment', 50);
*/
/* Составляем структуру объекта :
id = не повторяющумуся числу в диапозоне от 1 - 25;
url = делаем по образцу  photos/{};
description = описание фотографий;
likes = рандомное число лайков от 15 - 200;
comments = массив в котором связываем комментарии с фотографией(автор коммента);
avatar = каждый пользователь оставивший коммент, должен иметь аватар;
message = формируется из случайной связи двух загоовленных фраз;
name = содержит случайные имена пользователей;
*/
//колличество лайков
const MIN_LIKES = 15;
const MAX_LIKES = 200;
//минимальное и максимальное колличество аватаров
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
//максимальное количество генераций 25
const MAX_AMOUNT = 25;
//имена пользователей
const NAMES = [
  'Олег',
  'Вальдемар',
  'Никифр',
  'Юзик',
  'Ярик',
  'Святослав',
  'Мирослав',
  'Днестр',
];
//текст сообщений
const TEXT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
//Описание к фото
const DESCRIPTIONS = [
  'Суперский день',
  'Отличная погода',
  'Сумасшедшей красоты пейзажи',
  'Такого не увидешь в Инсте',
  'Реальное великолепие',
  'Пульсирующая природа',
  'Шашлык заказывали?',
  'Выход за рамки каменных джунглей',
];

//Добавляем функцию для возврата рандомного числа из заданного диапозона

const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomNumber(0, 7);
//функция поиска случайного элемента в выбраном массиве

const getRandomArray = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

//Функция сравнения длины строки(кол-во букв в комментарии)от написаной до максимальной

const stringLength (string, maxLength) => {
  return string.length < maxLength;
};

//Функция склеивания аватара с комментом и лайком
//добавим обязательный id к комментаию и автору и добавим им функцию рандома из массива

let nameId = [];
let commentId = [];

const commentElement = () => {
      const comment = {
        id: getRandomNumber(1, 25),
        avatar: `img/avatar-${getRandomNumber (1, 6)}.svg`,
        message: getRandomNumber(TEXT_MESSAGE),
        name: getRandomNumber(NAMES),
      };
      return comment;
};

const createComment = () => {
  const comments = [];
  const commentsAll = getRandomNumber(1, 7);

  for(let i = 1; i <= commentsAll ; i++){
    comments.push(commentElement());
  }

  return comments;
};
//функция для генерации 25 объектов
const createPhoto () => {
      const photo = [];
      for(let j; j <= MAX_AMOUNT; j++){
        const freshPhoto = {
          id:j,
          url: `photos/${getRandomNumber(1, 25)}.jpg`,
          description: getRandomArray(DESCRIPTIONS),
          likes: getRandomNumber(1, 200),
          comments: createComment(),
        };
        photo.push(freshPhoto);
      }
      return photo;
};

createPhoto();
