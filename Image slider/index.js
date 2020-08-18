// todo animacija za promenu slika
const imageSlider = (() => {
  const sliderImage = document.querySelector('#slider img');
  let imageIndex = 1;
  function leftImage() {
    if (imageIndex !== 1) {
      imageIndex -= 1;
    } else {
      imageIndex = 9;
    }
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
  }

  function rightImage() {
    if (imageIndex !== 9) {
      imageIndex += 1;
    } else {
      imageIndex = 1;
    }
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
  }

  document.querySelector('#left').addEventListener('click', leftImage);
  document.querySelector('#right').addEventListener('click', rightImage);

  function setImageIndex(index) {
    imageIndex = index;
  }

  function getImageIndex() {
    return imageIndex;
  }

  return {
    leftImage,
    rightImage,
    setImageIndex,
    getImageIndex,
  };
})();
