// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft", function(){
			navigator.notification.alert("Deslizó hacia la izquierda",function(){"Aplicacion 7","Ok"});
		});//Cerrar deslizar izquierda
		$('#derecha').on("swiperight", function(){
			navigator.notification.confirm("¿Qué quieres hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(3000);
					break;
				}
			},"Aplicacion 7","Beepear,Vibrar,Cancelar");
		});//Cerrar delizar derecha
	},false);//Cerrar deviceready
});//Cerrar document