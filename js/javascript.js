/************************ SELECTORES ***************************/

//document.querySelector devuelve el primer elemento coincidente con el selector especificado.

//Distintas formas de acceder al mismo elemento del DOM. Ej. <a id="register" href="" class="btn btn-secondary animated bounceIn visible" target="…

document.querySelector(".btn");

document.querySelector("a.btn");

document.querySelector("#register");

document.querySelector(".list-inline li>a");

//Si hay varios elmentos con los mismo selectores
document.querySelectorAll(".btn")

//El resultado devuelve un array y cada elemento tiene una índice numérico: [0,1,2,…]
// Para acceder al primer elemento:
document.querySelectorAll(".btn")[0]

//Por lo tanto
document.querySelector(".btn") == document.querySelectorAll(".btn")[0]

/************************ REGISTER ***************************/

var element = document.getElementById('register');

function clickEnBoton() {
  var textoBoton = this.innerText;
  alert('Click en '+ textoBoton );
}

// Listener
element.addEventListener('click', clickEnBoton);

/************************ TABS ***************************/

//Para probarlo reemplazar el evento load por beforeunload

window.addEventListener('load', function() {
  var links = document.querySelectorAll('.nav li>a');
  for (var i = 0; i < links.length; i++) {
	var texto = links[i].innerText;    	console.log(texto);
  }
});

