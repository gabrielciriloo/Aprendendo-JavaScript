//Exercício pedia para criar um conversor de medidas.

const medida = prompt("Escolha um número em metros: ")
const conversao = prompt("Escolha a conversão:\n " +
    "\n1. milimetros(mm)" + 
    "\n2. centimetros(cm)" + 
    "\n3. decimetros(dm)" +
    "\n4. decametros(dam)" +
    "\n5. hectometros(hm)" +
    "\n6. kilometros(km)" 
)

switch (conversao) {
    case "1": 
    alert("Resultado: " + medida + " metros = " + medida * 1000 + " milímetros")
    break
    case "2": 
    alert("Resultado: " + medida + " metros = " + medida * 100 + " centimetros")
    break
    case "3": 
    alert("Resultado: " + medida + " metros = " + medida * 10 + " decimetros")
    break
    case "4":
    alert("Resultado: " + medida + " metros = " + medida / 10 + " decametros")
    break
    case "5":
    alert("Resultado: " + medida + " metros = " + medida / 100 + " hectometros")
    break
    case "6":
    alert("Resultado: " + medida + " metros = " + medida / 1000 + " kilometros")
    break
    default: 
    alert("Opção inválida!")
}
