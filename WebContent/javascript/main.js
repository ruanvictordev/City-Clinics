//Alterando imagem da logo com um clique
let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
	let src = minhaImagem.getAttribute('src');
	if(src == 'imagens/LogoCityClinics.png'){
		minhaImagem.setAttribute('src', 'imagens/iconejs.jpg');
	}else{
		minhaImagem.setAttribute('src', 'imagens/LogoCityClinics.png');
	}
}
//Trocar usuário
let meuCabecalho = document.querySelector('h1')
let meuBotao = document.querySelector('button')

function defineUsuario(){
	let nomeUsuario = prompt('Por favor, digite seu nome: ')
	//Condição para o prompt não possuir valor null
	if(nomeUsuario !== null){
		if(!nomeUsuario){
			defineNomeUsuario();
		} else{
			localStorage.setItem('nome', nomeUsuario);
			meuCabecalho.textContent = 'Bem vindo, ' + nomeUsuario;
		}
	}
}
//Inicializa a página com um prompt para definir o usuário
let nomeUsuario = localStorage.getItem('nome');
if(!nomeUsuario){ //Se nomeUsuario não estiver definido
	defineUsuario();
} else{ //Se nomeUsuario estiver definido
	meuCabecalho.textContent = 'Bem vindo, ' + nomeUsuario;
}
// Trocar para um novo usuário quando <button> for clicado
meuBotao.onclick = function(){defineNomeUsuario();}
