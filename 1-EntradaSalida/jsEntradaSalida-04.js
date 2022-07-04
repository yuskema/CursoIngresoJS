/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// reservo este espacio para guardar el nombre de usuario
	let nombre;
	// guardo en la variable el texto que escribio en usuario de la ventana prompt
	nombre = prompt("ingrese su nombre");
	// copio en nombre que tengo guardado en la variable (lef) nombre dentro de la caja de texto
	nombre = document.getElementById("txtIdNombre").value = nombre;

	alert("nombre");
}

