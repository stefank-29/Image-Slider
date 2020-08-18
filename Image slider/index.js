// todo animacija za promenu slika
// todo animacija za tackice kad se promeni
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
  function _activateDot() {
    const currDot = dots.querySelector(`[data-index="${imageIndex}"]`);
    currDot.classList.remove('fa-circle');
    currDot.classList.add('fa-dot-circle');
  }

  function previousImage() {
    if (imageIndex !== 1) {
      imageIndex -= 1;
    } else {
      imageIndex = 9;
    }
    _deactivateAllDots();
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
    _activateDot();
  }

  function nextImage() {
    if (imageIndex !== 9) {
      imageIndex += 1;
    } else {
      imageIndex = 1;
    }
    _deactivateAllDots();
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
    _activateDot();
  }

  function showImageOnDot(dot) {
    const dotIndex = dot.dataset.index;
    imageIndex = dotIndex;
    _deactivateAllDots();
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
    _activateDot();
  }

  document.querySelector('#left').addEventListener('click', previousImage);
  document.querySelector('#right').addEventListener('click', nextImage);
  dots.querySelectorAll('i').forEach((dot) =>
    dot.addEventListener('click', function () {
      showImageOnDot(this);
    })
  );

  function setImageIndex(index) {
    imageIndex = index;
  }

  function getImageIndex() {
    return imageIndex;
  }

  return {
    previousImage,
    nextImage,
    setImageIndex,
    getImageIndex,
  };
})();
