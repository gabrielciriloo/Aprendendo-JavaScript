//Exercício pedia para criar um teste de velocidade.

const v1 = Number(prompt("qual a velocidade do primeiro carro?: "))
const v2 = Number(prompt("qual a velocidade do segundo carro?: "))

if (v1 > v2) {
    alert("carro um é mais rapido!")
} else if (v2 > v1) {
    alert("carro dois é mais rapido!")
} else {
    alert("ambos sao rapidos!")
}

