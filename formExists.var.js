//Devuelve "verdadero" si existe un elementon con el id "registration " en el documento html

function() {
	var form = document.getElementById("registration");
  	if(form && form.value != "") { return true; }
 	return false;
}
