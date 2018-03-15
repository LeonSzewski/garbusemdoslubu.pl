function attachNavButtonListener(value) {
    const navItems = document.querySelector('.nav__items'),
        navItemsCheck = !navItems.classList.contains('nav__items--toggle');

    switch (value) {
        case 'openMenu':
            if (navItemsCheck) navItems.classList.add('nav__items--toggle');
            break;
        default:
            navButtonListener();
    }

    function navButtonListener() {
        const navButton = document.querySelector('.nav__button');

        navButton.addEventListener('click', function () {
            navItems.classList.toggle('nav__items--toggle');
        })
    }
}

function attachTargetButtonsListener(contentBox, welcomeHeader) {
    const navItemsButton = document.querySelectorAll('.nav__items-button');

    navItemsButton.forEach(function (value) {
        value.addEventListener('click', function (event) {
            openContentBox(event)
        });
    });

    function openContentBox(event) {
        let clickedButton = event.currentTarget.id.replace('-button', ''),
            contentId = document.getElementById(clickedButton),
            clickedNavItemsButton = event.currentTarget.classList,
            activeNavItemsButton = document.querySelector('.nav__items-button--active'),
            activeContent = document.querySelector('.active'),
            activeNavItemsButtonCheck = activeNavItemsButton.classList.contains('nav__items-button--active');

        welcomeHeader.classList.add('hidden');
        contentBox.classList.remove('hidden');

        if (!contentId.classList.contains('active')) {
            activeContent.classList.remove('active');
            contentId.classList.add('active');
        }

        if (activeNavItemsButtonCheck) {
            activeNavItemsButton.classList.remove('nav__items-button--active');
            clickedNavItemsButton.add('nav__items-button--active');
        }
    }
}

function attachOfferLinkListener(contentBox, welcomeHeader) {
    const offerLink = document.querySelector('.welcome-header__text--link'),
        activeNavItemsButton = document.querySelector('.nav__items-button--active');

    offerLink.addEventListener('click', function () {openOfferLink()});

    function openOfferLink() {
        let offerContent = document.getElementById('offer'),
            offerNavButton = document.querySelector('a[id="offer-button"]');

        contentBox.classList.remove('hidden');
        welcomeHeader.classList.add('hidden');

        offerContent.classList.add('active');
        activeNavItemsButton.classList.remove('nav__items-button--active');
        offerNavButton.classList.add('nav__items-button--active');
        attachNavButtonListener('openMenu');
    }
}

function attachThumbnailsListener(imageBox, contentBoxThumbnails) {
    let imageInImageBox = document.querySelector('.image-box__image');

    contentBoxThumbnails.map(function (value) {
        value.addEventListener('click', function (event) {
            openClickedImage(event)
        });
    });

    function openClickedImage(event) {
        let imageSource = event.currentTarget.src.replace('thumbnail.jpg', 'jpg');

        imageBox.classList.add('active');
        imageInImageBox.setAttribute('src', imageSource);
        imageLoadingAndErrorCheck('', imageInImageBox);
    }
}

function attachGalleryBoxButtonListener(imageBox, contentBoxThumbnails) {
    const closeButton = document.querySelector('.image-box__icon--close'),
        nextButton = document.querySelector('.image-box__icon--next'),
        previousButton = document.querySelector('.image-box__icon--previous');

    let imageInImageBox = document.querySelector('.image-box__image');

    closeButton.addEventListener('click', function () {close()});
    nextButton.addEventListener('click', function () {next()});
    previousButton.addEventListener('click', function () {previous()});

    function close() {
        imageBox.classList.remove('active');
        imageLoadingAndErrorCheck('reset');
    }

    function next() {
        for (let i = 0; i < contentBoxThumbnails.length - 1; i++) {
            if (i === contentBoxThumbnails.length - 1) return;

            let nextImage = contentBoxThumbnails[i + 1].src.replace('thumbnail.jpg', 'jpg');
            if (contentBoxThumbnails[i].src.replace('thumbnail.jpg', 'jpg') === imageInImageBox.getAttribute('src')) {
                return imageInImageBox.setAttribute('src', nextImage);
            }
        }
        imageLoadingAndErrorCheck('', imageInImageBox);
    }

    function previous() {
        for (let i = contentBoxThumbnails.length - 1; i > 0 - 1; i--) {
            if (i === 0) return;

            let previousImage = contentBoxThumbnails[i - 1].src.replace('thumbnail.jpg', 'jpg');
            if (contentBoxThumbnails[i].src.replace('thumbnail.jpg', 'jpg') === imageInImageBox.getAttribute('src')) {
                return imageInImageBox.setAttribute('src', previousImage);
            }
        }
        imageLoadingAndErrorCheck('', imageInImageBox);
    }
}

function imageLoadingAndErrorCheck(value, imageInImageBox) {
    const loader = document.querySelector('.loader'),
        squareBox = document.querySelector('.loader__square-box'),
        imageLoadingError = document.querySelector('.loader__error'),
        imageLoadingAnimation = document.querySelector('.loader');

    switch (value) {
        case 'reset':
            reset();
            break;
        default:
            imageInImageBox.addEventListener('load', function () {
                reset();
                loader.classList.add('hidden');
            });

            imageInImageBox.addEventListener('error', function () {
                reset();
                imageLoadingError.classList.add('loader__error--show');
                squareBox.classList.add('loader__square-box--hide');
            });
    }

    function reset() {
        imageLoadingAnimation.classList.remove('hidden');
        imageLoadingError.classList.remove('loader__error--show');
        squareBox.classList.remove('loader__square-box--hide');
    }
}

function attachSiteListener() {
    const contentBox = document.querySelector('.content-box'),
        welcomeHeader = document.querySelector('.welcome-header'),
        imageBox = document.querySelector('.image-box'),
        contentBoxThumbnails = Array.from(document.querySelectorAll('.content-box__thumbnail'));

    attachNavButtonListener();
    attachOfferLinkListener(contentBox, welcomeHeader);
    attachTargetButtonsListener(contentBox, welcomeHeader);
    attachThumbnailsListener(imageBox, contentBoxThumbnails);
    attachGalleryBoxButtonListener(imageBox, contentBoxThumbnails);
}

attachSiteListener();
