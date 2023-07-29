

const quadrados = document.querySelectorAll('.quadrado') // ELA OBTEM TODOS OS QUADRADOS COM [index]
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const botao = document.createElement("button");
let contador = 0 // ESSA LET SERVE PARA VERIFICAR O JOGADOR 

// ---------------------------------------------------------------

// let item1 = document.querySelector('.item-1')
// let item2 = document.querySelector('.item-2')
// let item3 = document.querySelector('.item-3')
// let item4 = document.querySelector('.item-4')
// let item5 = document.querySelector('.item-5')
// let item6 = document.querySelector('.item-6')  
// let item7 = document.querySelector('.item-7')
// let item8 = document.querySelector('.item-8')
// let item9 = document.querySelector('.item-9')

// ESSA LET ITEM ELA BUSCA TODOS OS 9 QUADRADOS DO JOGO DA VELHA

// ---------------------OLD CODE---------------------------------






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
    
    console.log[quadrados]
}



const reiniciar = () => {
    location.reload()
}

const winner = () => {
    if (quadrados[0].innerText === 'X' && quadrados[3].innerText === 'X' && quadrados[6].innerText === 'X' || quadrados[0].innerText === 'O' && quadrados[3].innerText === 'O' && quadrados[6].innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
        // botao.classList.add("restart");
        // container.appendChild(botao)

    }
    else if (quadrados[1].innerText === 'X' && quadrados[4].innerText === 'X' && quadrados[7].innerText === 'X' || quadrados[1].innerText === 'O' && quadrados[4].innerText === 'O' && quadrados[7].innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (quadrados[2].innerText === 'X' && quadrados[5].innerText === 'X' && quadrados[8].innerText === 'X' || quadrados[2].innerText === 'O' && quadrados[5].innerText === 'O' && quadrados[8].innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (quadrados[0].innerText === 'X' && quadrados[1].innerText === 'X' && quadrados[2].innerText === 'X' || quadrados[0].innerText === 'O' && quadrados[1].innerText === 'O' && quadrados[2].innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (quadrados[3].innerText === 'X' && quadrados[4].innerText === 'X' && quadrados[5].innerText === 'X' || quadrados[4].innerText === 'O' && quadrados[3].innerText === 'O' && quadrados[5].innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }

    else if (quadrados[6].innerText === 'X' && quadrados[7].innerText === 'X' && quadrados[8].innerText === 'X' || quadrados[6].innerText === 'O' && quadrados[7].innerText === 'O' && quadrados[8].innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (quadrados[0].innerText === 'X' && quadrados[4].innerText === 'X' && quadrados[8].innerText === 'X' || quadrados[0].innerText === 'O' && quadrados[4].innerText === 'O' && quadrados[8].innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
    else if (quadrados[6].innerText === 'X' && quadrados[4].innerText === 'X' && quadrados[2].innerText === 'X' || quadrados[6].innerText === 'O' && quadrados[4].innerText === 'O' && quadrados[2].innerText === 'O') {
        container.innerHTML = `<h2> PARABÉNS VOCÊ GANHOU! </h2>`
        btn.innerHTML = `<div class="btn">
        <button class="restart" onclick="reiniciar()">Jogar novamente!</button>
    </div>`
    }
}






quadrados.forEach((quadrado) => { // VERIFICA O EVENTO DE TODOS OS QUADRADOS
    quadrado.addEventListener('click', click);

});
