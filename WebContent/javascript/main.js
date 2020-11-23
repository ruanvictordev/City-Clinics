//Alerando imagem com um clique
let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
	let src = minhaImagem.getAttribute('src');
	if(src == 'imagens/LogoCityClinics.png'){
		minhaImagem.setAttribute('src', 'imagens/iconejs.jpg');
	}else{
		minhaImagem.setAttribute('src', 'imagens/LogoCityClinics.png');
	}
}