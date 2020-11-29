//Animação "Deslize" da tela p/ cadastro
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

//Validar campos do formuário
let nome = document.getElementById('nome');
let contato = document.getElementById('contato');
let senha = document.getElementById('senha');
let form = document.getElementById('form');

form.addEventListener("submit", e=>{
	e.preventDefault();
	if(nome.value === ""){alert("O campo NOME COMPLETO não pode estar vazio!");}
	if(contato.value === ""){alert("O campo EMAIL OU TELEFONE não pode estar vazio!")}
	if(senha.value.length < 8){alert("O campo SENHA precisa de no mínimo 8 caracteres!");}
})