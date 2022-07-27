// создаем переменные блока большой фотографии и комментраиев к ней

const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const commentsFrgment = document.createDocumentFragment();
const socialCommentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

//скрываем счетчик комментариев и контейнер загрузки новых комментов

socialCommentsCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const eventBigPicture = (evt, photosData) => {
  socialComments.innerHTML = '';
  const pictureSrc = evt.target.src;
  bigPicture.querySelector('.big-picture__img img').src = pictureSrc;
  const photoDataCurrent = photosData.find((userPhoto) => pictureSrc.indexOf(userPhoto.url) !== -1);

  bigPicture.querySelector('.likes-count').textContent = photoDataCurrent.likes;
  bigPicture.querySelector('comments-count').textContent = photoDataCurrent.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photoDataCurrent.description;

  photosDataCurrent.comments.forEach((item) =>{
    socialComments.innerHTML = '';
    const socialCommentElement = socialComment.cloneNode(true);
    socialCommentElement.querySelector(.social__picture).src = item.avatar;
    socialCommentElement.querySelector('.social__picture').alt = item.name;
    socialCommmentElement.querySelector('.social__text') = item.message;
    commentsFrgment.append(socialCommentElement);
  });
  socialComments.append(commentsFrgment);
};

export {eventBigPicture};
export {bigPicture};
