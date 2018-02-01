function attachMenuButtonListener() {
    const menu = document.querySelector('.menu');
    const navButton = document.querySelector('.navButton');

    navButton.addEventListener('click', function (event) {
        menu.classList.toggle('navOpenClose');
        attachTargetButtonsListener();
    });
}

function attachTargetButtonsListener() {
    const menuButton = document.querySelectorAll('.button');

    menuButton.forEach(function (value) {
        value.addEventListener('click', function (event) {
            let contentId = document.getElementById(event.currentTarget.name),
                activeContent = document.querySelector('.active'),
                activeMenuButton = document.querySelector('.activeMenuButton'),
                clickedMenuButton = event.currentTarget.classList;

            if (!contentId.classList.contains('active')) {
                activeContent.classList.remove('active');
                contentId.classList.add('active');
                clickedMenuButton.add('activeMenuButton')
            }

            if (activeMenuButton.classList.contains('activeMenuButton')) {
                activeMenuButton.classList.remove('activeMenuButton');
                clickedMenuButton.add('activeMenuButton');
            }
        });
    });
}

function attachThumbnailsListener() {
    const thumbnails = Array.from(document.querySelectorAll('.gallery img'));
    const imageInGalleryBox = document.querySelector('.image-box__image__img');

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
    const thumbnails = Array.from(document.querySelectorAll('.gallery img'));
    const imageBox = document.querySelector('.image-box');
    const image = document.querySelector('.image-box__image__img');
    const closeButton = document.querySelector('.image-box__icon--close');
    const nextButton = document.querySelector('.image-box__icon--next');
    const previousButton = document.querySelector('.image-box__icon--previous');

    closeButton.addEventListener('click', function (event) {
        resetImageLoadingAndErrorCheck();
        imageBox.classList.remove('active');
    });

    nextButton.addEventListener('click', function (event) {

        for (let i = 0; i < thumbnails.length - 1; i++) {
            if (i === thumbnails.length - 1) return;
            if (thumbnails[i].src.replace('thumbnail.jpg', 'jpg') === image.getAttribute('src')) {
                return image.setAttribute('src', thumbnails[i + 1].src.replace('thumbnail.jpg', 'jpg'));
            }
        }
        imageLoadingAndErrorCheck();
    });

    previousButton.addEventListener('click', function (event) {

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
    const image = document.querySelector('.image-box__image__img');
    const loader = document.querySelector('.loader');
    const squareBox = document.querySelector('.loader__square-box');
    const imageLoadingError = document.querySelector('.loader__error');

    image.addEventListener('load', function (event) {
        resetImageLoadingAndErrorCheck();
        loader.classList.add('hidden');
    });

    image.addEventListener('error', function (event) {
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
