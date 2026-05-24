const API="https://iot-pet.onrender.com";

async function atualizar(){

const resposta=await fetch(
`${API}/ultima-leitura`
);

const pet=await resposta.json();

document.getElementById(
"nome"
).innerText=`Nome: ${pet.nome||"-"}`;

document.getElementById(
"especie"
).innerText=`Espécie: ${pet.especie||"-"}`;

document.getElementById(
"idade"
).innerText=`Idade: ${pet.idade||"-"}`;

document.getElementById(
"responsavel"
).innerText=`Tutor: ${pet.responsavel||"-"}`;

document.getElementById(
"uid"
).innerText=`UID: ${pet.uid||"-"}`;

}

setInterval(atualizar,2000);
