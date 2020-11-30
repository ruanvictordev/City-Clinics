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

let contatolog = document.getElementById('contatolog');
let senhalog =document.getElementById('senhalog');

let senha = document.getElementById('senha');
let conf_senha = document.getElementById('conf_senha');


form.addEventListener("submit", e=>{
	e.preventDefault();
	//Primary content
	if(nome.value === ""){alert("O campo NOME COMPLETO não pode estar vazio!");}
	if(contato.value === ""){alert("O campo EMAIL OU TELEFONE não pode estar vazio!");}
	if(senha.value.length < 8){alert("O campo SENHA precisa de no mínimo 8 caracteres!");}
	if(senha.value != conf_senha.value){alert("Sua Senha e confirmação de senha não são iguais!");}
})
formlog.addEventListener("submit", e=>{
	e.preventDefault();
	if(contatolog.value != contato.value){alert("E-mail ou senha incorretos")}
	if(senhalog.value != senha.value){alert("Senha incorreta")}
})