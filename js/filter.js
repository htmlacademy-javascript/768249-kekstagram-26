import { getRandomNumber } from "./utils";

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл "поставить таймаут - удалить таймаут" будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

const DATA_RANDOM_COUNT = 10;

const filterImages = (photosData) => {
  const filters = document.querySelector('.img-filters');
  const filtersForm = filters.querySelector('.img-filters__form');
  const filtersButtons = filters.querySelectorAll('.img-filters__button');
  filters.classList.remove('img-filters--inactive');
  renderSmallPictures(photosData);

  const sortPhotos = (sortProperty) => {
    if (sortProperty === 'filter-default') {
      renderSmallPictures(photosData);
    }

    if (sortProperty === 'filter-discussed') {
      const filterDiscussed = JSON.parse(JSON.stringify(photosData)).sort((item1, item2) => item2.comments.length - item1.comments.length);
      renderSmallPictures(filterDiscussed);
    }

    if (sortProperty === 'filter-random') {
      const randomData = [];
      for (let i = 0; i < DATA_RANDOM_COUNT; i++) {
        randomData.push(photosData[getRandomInteger(0, photosData.length - 1)]);
        if (checkDuplicates(randomData)) {
          randomData.pop();
          i--;
        }
      }

      renderSmallPictures(randomData);
    }
  };

  const onFiltersClick = (evt) => {
    filtersButtons.forEach((btn) => {
      btn.classList.remove('img-filters__button--active');
    });

    if (evt.target.closest('.img-filters__button')) {
      evt.target.classList.add('img-filters__button--active');
      const sortProperty = evt.target.id;
      sortPhotos(sortProperty);
    }
  };

  filtersForm.addEventListener('click', debounce(onFiltersClick));
};

export {filterImages};
