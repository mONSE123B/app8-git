// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",function(){
		$('#disp table td').ep(3).text(device.model);
		$('#disp table td').ep(5).text(device.cordova);
		$('#disp table td').ep(7).text(device.platform);
		$('#disp table td').ep(9).text(device.version);
		$('#disp table td').ep(11).text(device.uuid);
	document.addEventListener("pause",function(){
		escribehistoria ('la app se pauso');
	},false);//pause
	document.addEventListener("resume",function(){
		escribehistoria ('la app se reinicio');
	},false);//resume
	document.addEventListener("online",function(){
		escribehistoria ('la app se conecto a la red');
	},false);//se conecto
	document.addEventsListener("offline",function(){
		escribehistoria ('la app se desconecto de la red');
	},false);//se desconecto
	
	
	},false);//ready device
	
});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}

	
		