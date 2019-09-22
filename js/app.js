const inputs = document.querySelectorAll("form .campo input");

//Listener a los inputs
inputs.forEach(input => {
  input.addEventListener("blur", validarInput);
});
inputs.forEach(input => {
  input.addEventListener("input", validarInput);
});

function validarInput(e) {
  // console.log(e.target.value);

  const estado = ["valido", "no-valido"];

  let clase;
  if (e.target.value.length === 0) {
    clase = estado[1];
  } else {
    clase = estado[0];
  }

  e.target.classList.remove(...estado);
  e.target.nextElementSibling.classList.remove(...estado);

  e.target.classList.add(clase);
  e.target.nextElementSibling.classList.add(clase);

  //Inyectar dinamicamente el div con el error
  if (clase === "no-valido") {
    if (e.target.parentElement.nextElementSibling.classList[0] !== "alerta") {
      // construir un mensjae de error
      const errorDiv = document.createElement("div");
      errorDiv.appendChild(document.createTextNode("Este campo es obligatorio"));
      errorDiv.classList.add("alerta");

      //Insetar error
      e.target.parentElement.parentElement.insertBefore(
        errorDiv,
        e.target.parentElement.nextElementSibling
      );
    }
  } else {
    //limpiar el mensaje de error si existe
    if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
        e.target.parentElement.nextElementSibling.remove();
    }
  }
}

//Mostrar y ocultar password
const mostrarPassBtn = document.querySelector('span');
mostrarPassBtn.addEventListener('click', e => {
    const passInput = document.querySelector('#password');

    if (e.target.classList.contains('mostrar')) {
        //mostrar texto del span
        e.target.classList.remove('mostrar');

        //cambiar el texto del span
        e.target.textContent = 'Ocultar';

        // cambiamos el tipo del input (password por default)
        passInput.type = 'text';


    } else {
        //Agregamos la clase mostrar
        e.target.classList.add('mostrar');

        //Cambia el texto del span
        e.target.textContent = 'Mostrar';

        //Y ponemos el tipo del input por default
        passInput.type = 'password'
    }
});
