var menu = document.querySelector('.menu'),
    menuButton = document.querySelectorAll('.button'),
    navButton = document.querySelector('.navButton');

(function () {
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
