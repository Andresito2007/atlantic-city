// === REGISTRO DE CLIENTES ===
const formRegistro = document.getElementById("formRegistro");
const listaClientes = document.getElementById("listaClientes");
const mensaje = document.getElementById("mensaje");

if (formRegistro && listaClientes) {
  formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (nombre === "" || correo === "") {
      mensaje.textContent = "Por favor completa todos los campos.";
      mensaje.style.color = "red";
      return;
    }

    // Crear nuevo elemento <li>
    const nuevoCliente = document.createElement("li");
    nuevoCliente.textContent = `${nombre} - ${correo}`;
    listaClientes.appendChild(nuevoCliente);

    // Mostrar mensaje
    mensaje.textContent = `¡Registro exitoso! Bienvenido, ${nombre}.`;
    mensaje.style.color = "green";

    // Limpiar formulario
    formRegistro.reset();
  });
}

// === PROMOCIONES ===
const formPromocion = document.getElementById("formPromocion");
const listaPromociones = document.getElementById("listaPromociones");
const mensajePromo = document.getElementById("mensajePromo");

if (formPromocion && listaPromociones) {
  formPromocion.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = document.getElementById("tituloPromo").value.trim();
    const descripcion = document.getElementById("descripcionPromo").value.trim();

    if (titulo === "" || descripcion === "") {
      mensajePromo.textContent = "Completa todos los campos de la promoción.";
      mensajePromo.style.color = "red";
      return;
    }

    // Crear nueva tarjeta
    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("tarjeta");
    nuevaTarjeta.innerHTML = `
      <h3>${titulo}</h3>
      <p>${descripcion}</p>
    `;

    listaPromociones.appendChild(nuevaTarjeta);

    mensajePromo.textContent = "Promoción agregada correctamente.";
    mensajePromo.style.color = "green";

    formPromocion.reset();
  });
}













const telefono = document.getElementById("telefono").value.trim();
const edad = document.getElementById("edad").value.trim();
const preferencia = document.getElementById("preferencia").value;
const comentarios = document.getElementById("comentarios").value.trim();

const nuevoCliente = document.createElement("li");
nuevoCliente.textContent = `${nombre} - ${correo} - ${telefono} - ${edad} años - ${preferencia}`;
listaClientes.appendChild(nuevoCliente);
