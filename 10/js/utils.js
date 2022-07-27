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

export {getRandomNumber};
export {getRandomArray};
export {stringLength};
