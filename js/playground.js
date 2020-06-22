//desafio 1

var seletorInput = document.querySelector("#valor");
var seletorOutput = document.querySelector("#resposta");

seletorInput.oninput = trocaValor;

function trocaValor(){
    seletorOutput.value = seletorInput.value;
}




// desafio 2

var input_quantidade = document.querySelector("#qtde");
var output_total = document.querySelector("#total");

input_quantidade.oninput = function() {
    var preco = document.querySelector("#preco").textContent;
    preco = preco.replace("R$", "");
    preco = preco.replace(",", ".");
    preco = parseFloat(preco);

    var quantidade = input_quantidade.value;
    var total = quantidade * preco;
    total = "R$ " + total.toFixed(2);
    total = total.replace(".", ",");

    output_total.textContent = total;
}