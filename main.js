const pEntrada=docment.querySelector("#entrada");
const btnAdicionar=docment.querySelector("#adicionar");
const btnLimpar=docment.querySelector("#limpar");
const olItens=docment.querySelector("#itens");

const li=docment.createElement("li");
li.textContent="Primeiro";
olItens.appendChild(li);

const li2=docment.createElement("li");
li2.textContent="Segundo";
olItens.appendChild(li2);

const li3=docment.createElement("li");
li3.textContent="Terceiro";
olItens.appendChild(li3);