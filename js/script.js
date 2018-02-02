function attachMenuButtonListener() {
    const menu = document.querySelector('.nav__items');
    const navButton = document.querySelector('.nav__button');

    navButton.addEventListener('click', function (event) {
        menu.classList.toggle('nav__items--toggle');
        attachTargetButtonsListener();
    });
}

function attachTargetButtonsListener() {
    const menuButton = document.querySelectorAll('.nav__items-button');

    menuButton.forEach(function (value) {
        value.addEventListener('click', function (event) {
            let contentId = document.getElementById(event.currentTarget.name),
                activeContent = document.querySelector('.active'),
                activeMenuButton = document.querySelector('.nav__items-button--active'),
                clickedMenuButton = event.currentTarget.classList;

            if (!contentId.classList.contains('active')) {
                activeContent.classList.remove('active');
                contentId.classList.add('active');
                clickedMenuButton.add('nav__items-button--active')
            }

            if (activeMenuButton.classList.contains('nav__items-button--active')) {
                activeMenuButton.classList.remove('nav__items-button--active');
                clickedMenuButton.add('nav__items-button--active');
            }
        });
    });
}

function attachThumbnailsListener() {
    const thumbnails = Array.from(document.querySelectorAll('.content-box__thumbnail'));
    const imageInGalleryBox = document.querySelector('.image-box__image');

    thumbnails.map(function (value) {
        value.addEventListener('click', function (event) {
            let imageSrc = event.currentTarget.src.replace('thumbnail.jpg', 'jpg');

            imageBox.classList.add('active');
            imageInGalleryBox.setAttribute('src', imageSrc);
            imageLoadingAndErrorCheck();
        });
    });
}

function attachGalleryBoxButtonListener() {
    const thumbnails = Array.from(document.querySelectorAll('.content-box__thumbnail'));
    const imageBox = document.querySelector('.image-box');
    const image = document.querySelector('.image-box__image');
    const closeButton = document.querySelector('.image-box__icon--close');
    const nextButton = document.querySelector('.image-box__icon--next');
    const previousButton = document.querySelector('.image-box__icon--previous');

    closeButton.addEventListener('click', function () {
        resetImageLoadingAndErrorCheck();
        imageBox.classList.remove('active');
    });

    nextButton.addEventListener('click', function () {

        for (let i = 0; i < thumbnails.length - 1; i++) {
            if (i === thumbnails.length - 1) return;
            if (thumbnails[i].src.replace('thumbnail.jpg', 'jpg') === image.getAttribute('src')) {
                return image.setAttribute('src', thumbnails[i + 1].src.replace('thumbnail.jpg', 'jpg'));
            }
        }
        imageLoadingAndErrorCheck();
    });

    previousButton.addEventListener('click', function () {

        for (let i = thumbnails.length - 1; i > 0 - 1; i--) {
            if (i === 0) return;
            if (thumbnails[i].src.replace('thumbnail.jpg', 'jpg') === image.getAttribute('src')) {
                return image.setAttribute('src', thumbnails[i - 1].src.replace('thumbnail.jpg', 'jpg'));
            }
        }
        imageLoadingAndErrorCheck();
    });
}

function imageLoadingAndErrorCheck() {
    const image = document.querySelector('.image-box__image');
    const loader = document.querySelector('.loader');
    const squareBox = document.querySelector('.loader__square-box');
    const imageLoadingError = document.querySelector('.loader__error');

    image.addEventListener('load', function () {
        resetImageLoadingAndErrorCheck();
        loader.classList.add('hidden');
    });

    image.addEventListener('error', function () {
        resetImageLoadingAndErrorCheck();
        imageLoadingError.classList.add('loader__error--show');
        squareBox.classList.add('loader__square-box--hide');
    });
}

function resetImageLoadingAndErrorCheck() {
    const imageLoadingAnimation = document.querySelector('.loader');
    const squareBox = document.querySelector('.loader__square-box');
    const imageLoadingError = document.querySelector('.loader__error');

    imageLoadingAnimation.classList.remove('hidden');
    imageLoadingError.classList.remove('loader__error--show');
    squareBox.classList.remove('loader__square-box--hide');
}

attachMenuButtonListener();
attachThumbnailsListener();
attachGalleryBoxButtonListener();
