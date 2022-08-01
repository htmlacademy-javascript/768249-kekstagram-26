import { getRandomNumber } from "./utils";
import { getRandomArray } from "./utils";
import { stringLength } from "./utils";

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MAX_AMOUNT = 25;

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

const TEXT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

export {createPhoto};
