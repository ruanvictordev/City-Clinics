$(document).ready(function(){
	var botao = $('.bt1'); //classe "a" que vai ser clicado
	var dropDown = $('.ul-servicos'); //classe do submenu que vai ser aberta
	botao.on('click', function(event){
		dropDown.stop(true,true).slideToggle();
		event.stopPropagation();
	});
});