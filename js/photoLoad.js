const files = ['png', 'gif', 'jpg', 'jpeg'];
const filesChange = document.querySelector('.img-upload__input');
const photoPreview =document.querySelector('.img-upload__preview');

filesChange.addEventListener('change', () => {
  const file =filesChange.files[0];
  const nameFiles = file.name.toLowerCase();

  const matche = files.some((it) => nameFiles.endWidth(it));
  if (matche) {
    photoPreview.src = URL.createObjectURL(files);
  }
})
