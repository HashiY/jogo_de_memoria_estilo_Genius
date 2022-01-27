let order = [];        //ordens do jogo aleatorios
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

//Selecionando as cores do html
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); //sorteia de 0 a 3
    order[order.length] = colorOrder;               //atribui o indice do array com a cor aleatorio
    clickedOrder = [];

    for(let i in order) {  
        let elementColor = createColorElement(order[i]); // guarda elemento i q e o indice do array
        lightColor(elementColor, Number(i) + 1); //cor, numero para existir na lista de cores
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    //funcao q executa um codigo dentro de um tempo (nunber)
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

