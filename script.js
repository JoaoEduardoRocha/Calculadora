
function resultado (valor) {
    document.querySelector("input.resultado").value += valor;
}

function limparTela () {
    document.querySelector("input.resultado").value = " ";
}

function teclas () {
    let resultado = 0;
    resultado = document.querySelector("input.resultado").value;

    document.querySelector("input.resultado").value = " ";
    document.querySelector("input.resultado").value = eval(resultado);
}

