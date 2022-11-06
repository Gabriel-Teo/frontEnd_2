//variaveis
var playerPonto = 0;
var maquinaPonto = 0;

//jogada "aleatoria" da maquina
function jogadaMaquina() {
    let resposta = Math.random() * 3 + 1;
    let jogadaMaquina = parseInt(resposta);
    return jogadaMaquina;
}

//img de input do usuario
var inputP = document.getElementById('inputPlayer');
var inputM = document.getElementById('inputMaquina');

//input do usuario
//pedra [1]
let pedra = document.querySelector('#pedra');
pedra.addEventListener("click", function () {
    inputP.src = "./img/pedra.png"
    if (jogadaMaquina() === 2) {
        maquinaPonto++;
        inputM.src = "./img/papel.png"
    } else if (jogadaMaquina() === 3) {
        playerPonto++;
        inputM.src = "./img/tesoura.png"
    } else {
        document.getElementById('helpTitle').innerText = 'Empate!'
        inputP.src = "./img/empate.jpg"
        inputM.src = "./img/empate.jpg"
    }
    calcVencedor();
});
//papel [2]
let papel = document.querySelector('#papel');
papel.addEventListener("click", function () {
    inputP.src = "./img/papel.png"
    if (jogadaMaquina() === 3) {
        maquinaPonto++;
        inputM.src = "./img/tesoura.png"
    } else if (jogadaMaquina() === 1) {
        playerPonto++;
        inputM.src = "./img/pedra.png"
    } else {
        document.getElementById('helpTitle').innerText = 'Empate!'
        inputP.src = "./img/empate.jpg"
        inputM.src = "./img/empate.jpg"
    }
    calcVencedor();
});

//tesoura [3]
let tesoura = document.querySelector('#tesoura');
tesoura.addEventListener("click", function () {
    inputP.src = "./img/tesoura.png"
    if (jogadaMaquina() === 1) {
        maquinaPonto++;
        inputM.src = "./img/pedra.png"
    } else if (jogadaMaquina() === 2) {
        playerPonto++;
        inputM.src = "./img/papel.png"
    } else {
        document.getElementById('helpTitle').innerText = 'Empate!'
        inputP.src = "./img/empate.jpg"
        inputM.src = "./img/empate.jpg"
    }
    calcVencedor();
});



//Calc Vencedor
function calcVencedor() {
    let result = document.getElementById('textoResult');
    if (playerPonto === 3) {
        result.innerText = 'O vencedor é: Player!'
        playerPonto = 0;
        maquinaPonto = 0;
    } else if (maquinaPonto === 3) {
        result.innerText = 'O vencedor é: Computer :('
        playerPonto = 0;
        maquinaPonto = 0;
    }
}

//Calc e edição vida
document.addEventListener('click', function () {
    let vida = document.getElementById('vida')
    let vidaPc = document.getElementById('vidaPc')

    vida.innerText = 'Pontos Player: ' + playerPonto
    vidaPc.innerText = 'Pontos Pc: ' + maquinaPonto
})

//texto empate
let clickCount = 0;
document.addEventListener('click', function () {
    clickCount++;
    if (clickCount == 2) {
        document.getElementById('helpTitle').innerText = 'Escolha sua mão'
        clickCount = 0;
    }
})
