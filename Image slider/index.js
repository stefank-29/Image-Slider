// todo animacija za promenu slika
const imageSlider = (() => {
  const sliderImage = document.querySelector('#slider img');
  const dots = document.querySelector('#dots');
  let imageIndex = 1;

  function _deactivateAllDots() {
    dots.querySelectorAll('i').forEach((dot) => {
      dot.classList.remove('fa-dot-circle');
      dot.classList.add('fa-circle');
    });
  }

  function leftImage() {
    if (imageIndex !== 1) {
      imageIndex -= 1;
    } else {
      imageIndex = 9;
    }
    _deactivateAllDots();
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
    const currDot = dots.querySelector(`[data-index="${imageIndex}"]`);
    currDot.classList.remove('fa-circle');
    currDot.classList.add('fa-dot-circle');
  }

  function rightImage() {
    if (imageIndex !== 9) {
      imageIndex += 1;
    } else {
      imageIndex = 1;
    }
    _deactivateAllDots();
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
    const currDot = dots.querySelector(`[data-index="${imageIndex}"]`);
    currDot.classList.remove('fa-circle');
    currDot.classList.add('fa-dot-circle');
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
