const primeiro = prompt("Insira o primeiro valor:")
const segundo = prompt("Insira o segundo valor:")

const x = parseFloat(primeiro)
const y = parseFloat(segundo)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert("Resultado: \n" + 
      "\nsoma: " + soma +
      "\nsubtração: " + subtracao + 
      "\nmultiplição: " + multiplicacao + 
      "\ndivisão: " + divisao)