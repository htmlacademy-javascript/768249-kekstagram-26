import { differentPictures } from "./random-photos";
import { isEscapeKey } from "./utils";
import { bigPicture } from "./bigPicture";
import { eventBigPicture } from "./bigPicture";

const gallery = (photosData) => {
  const closeBigPicture = document.querySelector('.big-picture__cancel');
  const bigPictureEscape = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture()
    }
  };

  function openBigPicture (evt, photos) {
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    eventBigPicture(evt, photos);
    document.addEventListener('keydown', bigPictureEscape);
  }

  function closeBigPicture () {
    bigPicture.classList.toggle('hidden');
    document.body.classList.remove('modal-oppen');
    document.removeEventListener('keydown', bigPictureEscape);
  }

  differentPictures.addEventListener('click' , () => {
    if(evt.target.matches(.picture__img)) {
      openBigPicture(evt, photosData);
    }
  });

  closeBigPicture.addEventListener('click', () => {
    closeBigPicture();
  });
};

export {gallery};
