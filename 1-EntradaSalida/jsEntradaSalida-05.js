/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	// hago dos varibles porque pide dos texto
	let nombre;
	let edad;
	// buscop la informacion en mi html 
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;


	alert("usted se llama " + nombre + " y tiene " + edad + " años");

}

