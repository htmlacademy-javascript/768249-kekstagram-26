// создаем переменные блока большой фотографии и комментраиев к ней

const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const commentsFrgment = document.createDocumentFragment();
const showCommentsCount = document.querySelector('.shown-comments-count');
const MAX_COMMENTS = 5;

// нчальное значение видимых комментов равно 5
let shownCommentCount = MAX_COMMENTS;

const commentsLogic = () => {
  //делаем коллекцию массивом
  const comments = Array.from(socialComments.children);
  // комментариев больше 5
  if (socialComments.children.length > MAX_COMMENTS) {
    //добавляем счетчик и кнопки
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    //перебор массива с комментариями
    comments.forEach((comment, index) => {
      //скрытие комментов
      comment.classList.add('hidden');
      //показ комментов
      if(index < shownCommentCount) {
        comment.classList.remove('hidden');
      }
    });
  } else {
    //если комментов 5 и меньше - кнопки скрываются
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  }
};

 // показываем скрытые комменты

 const showHiddenComments = () =>{
  shownCommentCount += MAX_COMMENTS;
  commentsLogic();
  if(shownCommentCount >= socialComments.children.length) {
    commentsLoader.classList.add('hidden');
    shownCommentsCount.textContent = socialComments.children.length;
  } else {
    shownCommentsCount.textContent = shownCommentCount
  }

  return shownCommentCount;
 };

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
export {commentsLoader};
export {showHiddenComments};
