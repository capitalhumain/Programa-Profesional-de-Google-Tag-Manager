var element = document.getElementById('register');

function clickEnBoton() {
  var textoBoton = this.innerText;
  alert('Click en '+ textoBoton );
}

// Listener
element.addEventListener('click', clickEnBoton);
