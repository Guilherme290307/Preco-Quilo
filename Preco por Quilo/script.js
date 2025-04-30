let valorQuiloproduto = document.querySelector("#valorQuiloproduto");
let quantidadesQuiloproduto = document.querySelector("#quantidadesQuiloproduto");
let btfinalPagar = document.querySelector("#btfinalPagar");
let Resultado = document.querySelector("#Resultado");

function Pagar() {
    let valorQuilo = parseFloat(valorQuiloproduto.value.replace(",", "."));
    let quantidadeQuilo = parseFloat(quantidadesQuiloproduto.value.replace(",", "."));
    Resultado.textContent = (valorQuilo * quantidadeQuilo);
    Resultado.textContent = "Pagar: R$: " + Resultado.textContent
}

btfinalPagar.onclick = function() {
    Pagar();
}