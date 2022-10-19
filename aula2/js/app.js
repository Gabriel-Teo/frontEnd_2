//variaveis
var playerPonto = 0;
var maquinaPonto = 0;

//jogada do usuario (prompt)
function jogadaUsuario() {
    let resposta = prompt("pedra[1] // papel[2] // tesoura[3]");
    let jogadaUsuario = parseInt(resposta);
    return jogadaUsuario;
}

//jogada "aleatoria" da maquina
function jogadaMaquina() {
    let resposta = Math.random() * 3 + 1;
    let jogadaMaquina = parseInt(resposta);
    return jogadaMaquina;
}

//roda infinito o jooj
function gameplay() {
    switch (jogadaUsuario()) {
        //pedra
        case 1:
            if (jogadaMaquina() === 2) {
                maquinaPonto++;
            } else if (jogadaMaquina() === 3) {
                playerPonto++;
            }
            break;
        //papel
        case 2:
            if (jogadaMaquina() === 3) {
                maquinaPonto++;
            } else if (jogadaMaquina() === 1) {
                playerPonto++;
            }
            break;
        //tesoura
        case 3:
            if (jogadaMaquina() === 1) {
                maquinaPonto++;
            } else if (jogadaMaquina() === 2) {
                playerPonto++;
            }
            break;
        default:
            break;
    };

    //verifica se o player venceu
    if (playerPonto === 2) {
        alert("O Player venceu");
        playerPonto = 0;
        maquinaPonto = 0;
    } else if (maquinaPonto === 2) {
        alert("Perdeste :(");
        playerPonto = 0;
        maquinaPonto = 0;
    }
    gameplay();
}

gameplay();