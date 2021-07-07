var usuario;
var contrasena;
let dato
function cargarJson() {
	const xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'usuarios.json', true);
	xhttp.send();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//console.log(this.responseText);
			 dato = JSON.parse(this.responseText);
			 iniciarSesion(dato);
		}
	}
}
cargarJson();
try {
	function iniciarSesion(){
		console.log(dato)
		usuario = document.getElementById("username").value;
		contrasena = document.getElementById("password").value;
		var userAndPasswordPresent = false;
		for (var i in dato) {
			if (dato[i].user === usuario && dato[i].password === contrasena) {
				userAndPasswordPresent = true;
			}
		}
		if(userAndPasswordPresent==true){
			alert('Bienvenido');
		  window.open("index-access.html");
		} 
		}
	throw "myException"; // genera una excepción
 }
 catch (e) {
	// sentencias para manejar cualquier excepción
	console.log(e); // pasa el objeto de la excepción al manejador de errores
 }

