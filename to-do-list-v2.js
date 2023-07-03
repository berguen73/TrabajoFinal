
// Crea la tabla de la nueva tarea

function crearTarea() {
    const contenedor = document.getElementById("contenedor");
    const tabla = document.createElement("div");
    tabla.classList.add("row");

    const columna1 = document.createElement("div");
    columna1.classList.add("tabla");
    // columna1.innerText = document.getElementById("hacerTarea").value;
    columna1.className = "col";
    // columna1.style.color = "red";

    const parrafo1 = document.createElement("p");
    parrafo1.classList.add("parrafo-tarea");
    parrafo1.innerText = document.getElementById("hacerTarea").value;
    parrafo1.style.color = "black";

    const columna2 = document.createElement("div");
    columna2.classList.add("tabla");
    columna2.className = "col";

    const select = document.createElement("select");
    select.classList.add("form-select");
    const opcion1 = document.createElement("option");
    opcion1.value = "pendiente";
    opcion1.innerText = "Pendiente";
    const opcion2 = document.createElement("option");
    opcion2.value = "completada";
    opcion2.innerText = "Completada";

    select.appendChild(opcion1);
    select.appendChild(opcion2);

    columna2.appendChild(select);

    const columna3 = document.createElement("div");
    columna3.classList.add("tabla");
    columna3.className = "col";



    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton-eliminar");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.className = "btn btn-dark" 
    botonEliminar.addEventListener("click", function () {
        tabla.remove();
    });

    tabla.className = "contenedor";

    columna3.appendChild(botonEliminar);

    columna1.appendChild(parrafo1);

    tabla.appendChild(columna1);
    tabla.appendChild(columna2);
    tabla.appendChild(columna3);

    contenedor.appendChild(tabla);


// deja vacío el recuadro del input
    document.getElementById("hacerTarea").value = "";

    select.addEventListener("change", function() {
        if (select.value === "pendiente") {
            parrafo1.style.textDecoration = "none";
        } else if (select.value === "completada") {
          parrafo1.style.color = "black";
          parrafo1.style.textDecoration = "line-through";
        }
      });
}

const agregarBtn = document.getElementById("botonAgregar");
agregarBtn.addEventListener("click", crearTarea);

