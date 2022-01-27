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
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}