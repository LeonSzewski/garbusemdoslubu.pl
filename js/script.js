function clicked(clickedButton) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(clickedButton).classList.add('active');
}

// (function attachListener() {
//     var button = document.getElementsByClassName('button');
//     button.addEventListener('click', function (event) {
//         deactivate();
//         document.getElementById('offer').classList.add('active');
//     })
// })();
//
// function deactivate() {
//     document.querySelector('.active').classList.remove('active');
// }
