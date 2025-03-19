let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim(); // Eliminar espacios en blanco

  // Validar que nombre no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Actualizar la lista en el HTML
  actualizarLista();

  // Limpiar la entrada
  input.value = "";
  input.focus();

  // Borrar el mensaje si se añade un nuevo amigo
  resultado.innerHTML = "";
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista antes de actualizar

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];

    // Crear un botón para eliminar
    let botonEliminar = document.createElement("span");
    botonEliminar.textContent = " ❌";
    botonEliminar.classList.add("eliminar"); // Agregamos una clase para estilo

    // Función para eliminar el amigo de la lista
    botonEliminar.onclick = function () {
      amigos.splice(i, 1); // Elimina el amigo del array
      actualizarLista(); // Vuelve a actualizar la lista
    };

    li.appendChild(botonEliminar); // Agrega el botón dentro del <li>
    lista.appendChild(li); // Agrega a la lista
  }
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  // Validar que haya al menos un amigo en la lista
  if (amigos.length < 3) {
    resultado.innerHTML = "No hay suficientes amigos en la lista para sortear.";
    resultado.style.color = "red";
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre del amigo sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
