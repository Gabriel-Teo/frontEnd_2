var button = document.querySelector('.btnMode');

button.addEventListener('click', function darkmode() {
    let body = document.querySelector('body');
    let h1 = document.querySelector('h1');
    let item = document.querySelectorAll('.item');
    let text = document.querySelector('.container');
    let button = document.querySelector('.btnMode')

    body.classList.toggle('dark');
    h1.classList.toggle('darkTitle');
    text.classList.toggle('darkText');
    button.classList.toggle('darkItem');
    button.classList.toggle('darkText');
    for (let i = 0; i < item.length; i++) {
        item[i].classList.toggle('darkItem');
    }

});

