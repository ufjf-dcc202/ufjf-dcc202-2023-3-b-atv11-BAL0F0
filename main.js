const pEntrada=document.querySelector("#entrada");
const btnAdicionar=document.querySelector("#adicionar");
const btnLimpar=document.querySelector("#limpar");
const olItens=document.querySelector("#itens");


adicionaElementoNaLitsa("Primeiro");
adicionaElementoNaLitsa("Segundo");
adicionaElementoNaLitsa("Terceiro");

function adicionaElementoNaLitsa(texto){

    const li=document.createElement("li");
    li.textContent=texto;
    olItens.appendChild(li);
}

