'use strict'



window.addEventListener("load",function(){


	console.log("Pagina cargada ok");

	var boton_nuevo = document.getElementById("boton_nuevo2");

	//console.log(boton_nuevo);


	document.getElementById("boton_nuevo").addEventListener("click", function() {
 		 alert("dentro de la funcion");
 		 nueva_fila();

 		
});


function nueva_fila(){
	var table = document.getElementById("tablaprueba"); 
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'NOMBRE 1';
        cell2.innerHTML = 'APELLIDO 1';

}
	

});










