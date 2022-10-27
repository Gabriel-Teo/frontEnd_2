var buttonDark = document.querySelector('.btnMode');
var buttonAdd = document.querySelector('#addCard')

buttonAdd.addEventListener('click', function addCard() {
    let nome = prompt('digite o nome do bixo');
    let img = prompt('adicione o link de uma imagem.');
    let p = prompt('adicione uma descrição');
    let container = document.querySelector('.container')
    let item = `
    <div class="item">
        <img src="${img}">
        <h2>${nome}</h2>
        <p>
        ${p}
        </p>
    </div>
    `;
    if (nome === null || img === null) {
        return '';
    } else {
        container.innerHTML += item;
    }
});

buttonDark.addEventListener('click', function darkmode() {
    let body = document.querySelector('body');
    let h1 = document.querySelector('.flex');
    let item = document.querySelectorAll('.item');
    let text = document.querySelector('.container');
    let button = document.querySelectorAll('.btnMode')

    body.classList.toggle('dark');
    h1.classList.toggle('darkTitle');
    text.classList.toggle('darkText');

    for (let i = 0; i < item.length; i++) {
        item[i].classList.toggle('darkItem');
    }
    for (let i = 0; i < button.length; i++) {
        button[i].classList.toggle('darkItem');
        button[i].classList.toggle('darkText');
    }

});
