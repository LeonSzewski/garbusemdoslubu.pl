(function () {
    var menu = document.querySelector('.menu'),
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
    var thumbnails = document.querySelectorAll('.gallery img'),
        imageBox = document.querySelector('#imageBox'),
        imageInGalleryBox = document.querySelector('#imageBox img'),
        closeButton = document.querySelector('#close');

    thumbnails.forEach(function (value) {
        value.addEventListener('click', function (event) {
            let imageSrc = JSON.stringify(event.currentTarget.src).replace('thumbnail.jpg', 'jpg');
            imageSrc = JSON.parse(imageSrc);
            imageBox.classList.add('active');
            imageInGalleryBox.setAttribute('src', imageSrc);
        })
    });

    if (galleryBox.classList.contains('active')) {
        closeButton.addEventListener('click', function (event) {
            imageBox.classList.remove('active');
        })
    }
})();
