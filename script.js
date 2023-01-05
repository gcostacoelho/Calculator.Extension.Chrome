const display = document.getElementById("display");
const buttons = document.getElementsByTagName("button")

var primeiroNumero = "initial";
var segundoNumero = "initial";
var operacao = "initial"
var result = 0

Array.from(buttons).forEach(
    button => button.addEventListener("click", run)
)

console.log(chrome.audio.getDevices());

function run(event) {
    var button = event.target;

    number = parseInt(button.value);

    if (isNaN(number)) {
        if (button.value != "=") {
            if (button.value == "C") {
                primeiroNumero = "initial";
                segundoNumero = "initial";
                operacao = "initial"
                result = 0;

                exibeDisplay()
            }
            else {
                operacao = button.value;
                exibeDisplay(primeiroNumero, segundoNumero, operacao)
            }
        }
        if (button.value == "=") {
            resultadoFuncao = calculaConta(primeiroNumero, segundoNumero, operacao)
            
            primeiroNumero = "initial";
            segundoNumero = "initial";
            operacao = "initial"
            result = 0;

            exibeDisplay(primeiroNumero, segundoNumero, operacao, resultadoFuncao)

        }
    }

    else {
        if (primeiroNumero == "initial") {
            primeiroNumero = number
            exibeDisplay(primeiroNumero, segundoNumero, operacao);
        }
        else if (primeiroNumero != "initial" && segundoNumero == "initial") {
            segundoNumero = number;
            exibeDisplay(primeiroNumero, segundoNumero, operacao);
        }
    }
}

function exibeDisplay(primeiroNumero="initial", segundoNumero="initial", operacao="initial", mensagem = "") {
    if (primeiroNumero != "initial" && segundoNumero == "initial" && operacao == "initial") {
        display.innerHTML = `${primeiroNumero}`
    }
    else if (primeiroNumero != "initial" && operacao != "initial" && segundoNumero == "initial") {
        display.innerHTML = `${primeiroNumero} ${operacao}`
    }
    else if (primeiroNumero != "initial" && operacao != "initial" && segundoNumero != "initial") {
        display.innerHTML = `${primeiroNumero} ${operacao} ${segundoNumero}`
    }
    else {
        display.innerHTML = mensagem;
    }
}

function calculaConta(primeiroNumero="initial", segundoNumero="initial", operacao="initial") {
    var result = 0

    switch (operacao) {
        case "X":
            result = primeiroNumero * segundoNumero;

            return (result);

        case "+":
            result = primeiroNumero + segundoNumero;

            return (result);

        case "-":
            result = primeiroNumero - segundoNumero;

            return (result);

        case "/":

            if (primeiroNumero == 0 || segundoNumero == 0) {
                return "Divisão por zero";
            }
            else {
                result = primeiroNumero / segundoNumero;

                return (result);
            }
        default:
            return 0;
    }
}