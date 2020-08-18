// todo animacija za promenu slika
// todo animacija za tackice kad se promeni
const imageSlider = (() => {
  const sliderImage = document.querySelector('#slider img');
  const dots = document.querySelector('#dots');
  let imageIndex = 1;
  let interval;

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
  function showNextImg5sec() {
    clearInterval(interval);
    interval = setInterval(nextImage, 5000);
  }

  function previousImage() {
    if (imageIndex !== 1) {
      imageIndex--;
    } else {
      imageIndex = 9;
    }
    _deactivateAllDots();
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
    sliderImage.classList.remove('show');
    setTimeout(function () {
      //! forica da se skine i prikaze klasa
      sliderImage.classList.add('show');
    }, 1);
    _activateDot();
    showNextImg5sec();
  }

  function nextImage() {
    if (imageIndex !== 9) {
      imageIndex++;
    } else {
      imageIndex = 1;
    }
    _deactivateAllDots();
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
    sliderImage.classList.remove('show');
    setTimeout(function () {
      sliderImage.classList.add('show');
    }, 1);
    _activateDot();
    showNextImg5sec();
  }

  function showImageOnDot(dot) {
    const dotIndex = dot.dataset.index;
    imageIndex = dotIndex;
    _deactivateAllDots();
    sliderImage.setAttribute('src', `./images/cover${imageIndex}.jpg`);
    sliderImage.classList.remove('show');
    setTimeout(function () {
      sliderImage.classList.add('show');
    }, 1);
    _activateDot();
    showNextImg5sec();
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
    showNextImg5sec,
  };
})();

imageSlider.onload = imageSlider.showNextImg5sec();
