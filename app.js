

const quadrado = document.querySelectorAll('.quadrado')
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const botao = document.createElement("button");
let contador = 0 // ESSA LET SERVE PRA FAZER A VERIFICAR O JOGADOR 

// ---------------------------------------------------------------

let item1 = document.querySelector('.item-1')
let item2 = document.querySelector('.item-2')
let item3 = document.querySelector('.item-3')
let item4 = document.querySelector('.item-4')
let item5 = document.querySelector('.item-5')
let item6 = document.querySelector('.item-6')
let item7 = document.querySelector('.item-7')
let item8 = document.querySelector('.item-8')
let item9 = document.querySelector('.item-9')



// ESSA LET ITEM ELA BUSCA TODOS OS 9 QUADRADOS DO JOGO DA VELHA




function click(e) {
    const verifica = e.target.innerText // ESSA CONST ELA VERIFICA O O VALOR QUE EXISTE NA DIV 

    console.log(verifica)

    if (!verifica.length) { // AQUI VERIFICA  SE O QUADRADO ESTÁ VÁZIO PARA PREENCHER X OU O SE TIVER OCUPADO NÃO SOBRESCREVE E EMITE UM ALERTA
        const divClick = e.target
        if (contador % 2 === 0) {
            divClick.innerText = 'X'
        } else {
            divClick.innerText = 'O'
        }
        contador++

        // console.log(e.target.innerText)
        winner()
        return
    }
    alert('Você não pode adicionar aqui')


}

const reiniciar = () => {
    location.reload()
}

const winner = () => {
    if (item1.innerText === 'X' && item4.innerText === 'X' && item7.innerText === 'X' || item1.innerText === 'O' && item4.innerText === 'O' && item7.innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
        // botao.classList.add("restart");
        // container.appendChild(botao)

    }
    else if (item2.innerText === 'X' && item5.innerText === 'X' && item8.innerText === 'X' || item2.innerText === 'O' && item5.innerText === 'O' && item8.innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (item3.innerText === 'X' && item6.innerText === 'X' && item9.innerText === 'X' || item3.innerText === 'O' && item6.innerText === 'O' && item9.innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (item1.innerText === 'X' && item2.innerText === 'X' && item3.innerText === 'X' || item1.innerText === 'O' && item2.innerText === 'O' && item3.innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (item4.innerText === 'X' && item5.innerText === 'X' && item6.innerText === 'X' || item5.innerText === 'O' && item4.innerText === 'O' && item6.innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }

    else if (item7.innerText === 'X' && item8.innerText === 'X' && item9.innerText === 'X' || item7.innerText === 'O' && item8.innerText === 'O' && item9.innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (item1.innerText === 'X' && item5.innerText === 'X' && item9.innerText === 'X' || item1.innerText === 'O' && item5.innerText === 'O' && item9.innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (item7.innerText === 'X' && item5.innerText === 'X' && item3.innerText === 'X' || item1.innerText === 'O' && item5.innerText === 'O' && item3.innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
}






quadrado.forEach((quadrado) => {
    quadrado.addEventListener('click', click);
});

