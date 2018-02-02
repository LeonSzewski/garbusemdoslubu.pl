function attachMenuButtonListener(value) {
    const option = value;
    const navItems = document.querySelector('.nav__items');
    const navButton = document.querySelector('.nav__button');

    switch (option) {
        case open:
            if (!navItems.classList.contains('nav__items--toggle')) navItems.classList.add('nav__items--toggle');
            break;
        default:
            navButton.addEventListener('click', function () {
                navItems.classList.toggle('nav__items--toggle');
                attachTargetButtonsListener();
            });
    }

}

function attachTargetButtonsListener() {
    const navItemsButton = document.querySelectorAll('.nav__items-button');
    const contentBox = document.querySelector('.content-box');
    const welcomeHeader = document.querySelector('.welcome-header');

    navItemsButton.forEach(function (value) {
        value.addEventListener('click', function (event) {
            let contentId = document.getElementById(event.currentTarget.name),
                clickedNavItemsButton = event.currentTarget.classList,
                activeNavItemsButton = document.querySelector('.nav__items-button--active'),
                activeContent = document.querySelector('.active');
            
            welcomeHeader.classList.add('hidden');
            contentBox.classList.remove('hidden');

            if (!contentId.classList.contains('active')) {
                activeContent.classList.remove('active');
                contentId.classList.add('active');
            }

            if (activeNavItemsButton.classList.contains('nav__items-button--active')) {
                activeNavItemsButton.classList.remove('nav__items-button--active');
                clickedNavItemsButton.add('nav__items-button--active');
            }
        });
    });
}

function attachOfferLinkListener() {
    const contentBox = document.querySelector('.content-box');
    const welcomeHeader = document.querySelector('.welcome-header');
    const offerLink = document.querySelector('.welcome-header__text--link');
    const activeNavItemsButton = document.querySelector('.nav__items-button--active');

    offerLink.addEventListener('click', function () {
        let offerContent = document.getElementById('offer'),
            offerNavButton = document.querySelector('a[name="offer"]');

        contentBox.classList.remove('hidden');
        welcomeHeader.classList.add('hidden');

        offerContent.classList.add('active');
        activeNavItemsButton.classList.remove('nav__items-button--active');
        offerNavButton.classList.add('nav__items-button--active');
        attachMenuButtonListener(open);
    })
}

function attachThumbnailsListener() {
    const contentBoxThumbnails = Array.from(document.querySelectorAll('.content-box__thumbnail'));
    const imageInImageBox = document.querySelector('.image-box__image');
    const imageBox = document.querySelector('.image-box');

    contentBoxThumbnails.map(function (value) {
        value.addEventListener('click', function (event) {
            let imageSource = event.currentTarget.src.replace('thumbnail.jpg', 'jpg');

            imageBox.classList.add('active');
            imageInImageBox.setAttribute('src', imageSource);
            imageLoadingAndErrorCheck();
        });
    });
}

function attachGalleryBoxButtonListener() {
    const contentBoxThumbnails = Array.from(document.querySelectorAll('.content-box__thumbnail'));
    const imageBox = document.querySelector('.image-box');
    const imageInImageBox = document.querySelector('.image-box__image');
    const closeButton = document.querySelector('.image-box__icon--close');
    const nextButton = document.querySelector('.image-box__icon--next');
    const previousButton = document.querySelector('.image-box__icon--previous');

    closeButton.addEventListener('click', function () {
        resetImageLoadingAndErrorCheck();
        imageBox.classList.remove('active');
    });

    nextButton.addEventListener('click', function () {

        for (let i = 0; i < contentBoxThumbnails.length - 1; i++) {
            if (i === contentBoxThumbnails.length - 1) return;
            if (contentBoxThumbnails[i].src.replace('thumbnail.jpg', 'jpg') === imageInImageBox.getAttribute('src')) {
                return imageInImageBox.setAttribute('src', contentBoxThumbnails[i + 1].src.replace('thumbnail.jpg', 'jpg'));
            }
        }
        imageLoadingAndErrorCheck();
    });

    previousButton.addEventListener('click', function () {

        for (let i = contentBoxThumbnails.length - 1; i > 0 - 1; i--) {
            if (i === 0) return;
            if (contentBoxThumbnails[i].src.replace('thumbnail.jpg', 'jpg') === imageInImageBox.getAttribute('src')) {
                return imageInImageBox.setAttribute('src', contentBoxThumbnails[i - 1].src.replace('thumbnail.jpg', 'jpg'));
            }
        }
        imageLoadingAndErrorCheck();
    });
}

function imageLoadingAndErrorCheck() {
    const imageInImageBox = document.querySelector('.image-box__image');
    const loader = document.querySelector('.loader');
    const squareBox = document.querySelector('.loader__square-box');
    const imageLoadingError = document.querySelector('.loader__error');

    imageInImageBox.addEventListener('load', function () {
        resetImageLoadingAndErrorCheck();
        loader.classList.add('hidden');
    });

    imageInImageBox.addEventListener('error', function () {
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
attachOfferLinkListener();
