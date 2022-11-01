// document.addEventListener("DOMContentLoaded", function () { alert('carregou') })


var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() == 'text') {
        inputs[i].onmouseover = function () {
            this.style.color = 'red';
        };
        inputs[i].onmouseout = function () {
            this.style.color = 'blue';
        };
    }
}

var submitForm = document.querySelector('#enviarForm');
submitForm.addEventListener('click', function (event) {
    event.preventDefault()
})

document.addEventListener('keydown', function (event) {
    let p = document.querySelector('p');
    let cliques = 0

    p.innerText = 'acerto: ' + event.key
})