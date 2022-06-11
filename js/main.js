 /* jshint esversion: 6 */
//возвращаем рандомное число(включительное)  из переданного диапозона
function getRandom(min, max){
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

