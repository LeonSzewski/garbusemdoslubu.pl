(function () {
    let menu = document.querySelector('.menu'),
        menuButton = document.querySelectorAll('.button'),
        navButton = document.querySelector('.navButton');

    navButton.addEventListener('click', function (event) {
        menu.classList.toggle('hidden');
        if (!menu.classList.contains('hidden')) {
            menuButton.forEach(function (value) {
                value.addEventListener('click', function (event) {
                    let contentId = document.getElementById(event.currentTarget.name);
                    if (!contentId.classList.contains('active')) {
                        let activeContent = document.querySelector('.active');
                        activeContent.classList.remove('active');
                        document.querySelector('.contentBox').classList.remove('hidden');
                        contentId.classList.add('active');
                    }
                })
            }
        )
        }
    })
})();

(function openGalleryBox() {
    let thumbnails = Array.from(document.querySelectorAll('.gallery img')),
        imageBox = document.querySelector('#imageBox'),
        imageInGalleryBox = document.querySelector('#imageBox img'),
        closeButton = document.querySelector('.close'),
        nextButton = document.querySelector('.next'),
        previousButton = document.querySelector('.previous');

    thumbnails.map(function (value) {
        value.addEventListener('click', function (event) {
            let imageSrc = event.currentTarget.src.replace('thumbnail.jpg', 'jpg');
            imageBox.classList.add('active');
            imageInGalleryBox.setAttribute('src', imageSrc);
        })
    });
    closeButton.addEventListener('click', function (event) {
        imageBox.classList.remove('active');
    });
    nextButton.addEventListener('click', function (event) {

        for (let i=0; i < thumbnails.length - 1; i++) {
            if (thumbnails[i].src.replace('thumbnail.jpg', 'jpg') === imageInGalleryBox.getAttribute('src')) {
                return imageInGalleryBox.setAttribute('src', thumbnails[i+1].src.replace('thumbnail.jpg', 'jpg'));

            }
        }

    });

    previousButton.addEventListener('click', function (event) {

        for (let i=1; i < thumbnails.length; i++) {
            if (thumbnails[i].src.replace('thumbnail.jpg', 'jpg') === imageInGalleryBox.getAttribute('src')) {
                return imageInGalleryBox.setAttribute('src', thumbnails[i-1].src.replace('thumbnail.jpg', 'jpg'));

            }
        }
    })

})();
