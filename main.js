const pEntrada=docment.querySelector("#entrada");
const btnAdicionar=docment.querySelector("#adicionar");
const btnLimpar=docment.querySelector("#limpar");
const olItens=docment.querySelector("#itens");


adicionaElementoNaLitsa("Primeiro");
adicionaElementoNaLitsa("Segundo");
adicionaElementoNaLitsa("Terceiro");

function adicionaElementoNaLitsa(texto){

    const li=docment.createElement("li");
    li.textContent=texto;
    olItens.appendChild(li);
}

