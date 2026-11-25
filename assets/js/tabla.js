// Construcción segura de la tabla de productos.
function crearCelda(texto){
    const celda = document.createElement('td');
    celda.textContent = texto;
    return celda;
}

function dibujarProductos(productos){
    cuerpoProductos.replaceChildren();

    if(productos.length === 0){
        const fila = document.createElement('tr');
        const celda = crearCelda('No hay productos registrados.');
        celda.colSpan = 5;
        celda.className = 'sin-registros';
        fila.appendChild(celda);
        cuerpoProductos.appendChild(fila);
        return;
    }

    productos.forEach(function(producto){
        const fila = document.createElement('tr');
        const celdaAcciones = document.createElement('td');
        
        const botonEditar  = document.createElement('button');
        const botonEliminar = document.createElement('button');

        fila.appendChild(crearCelda(producto.nombre));
        fila.appendChild(crearCelda(producto.categoria));
        fila.appendChild(crearCelda(`$${Number(producto.precio).toFixed(2)}`));
        fila.appendChild(crearCelda(producto.existencia));

        botonEditar.className = 'boton boton-editar';
        botonEditar.textContent = 'Editar';
        botonEditar.addEventListener('click', 
        function(){
            prepararEdicion(producto);
        });

        botonEliminar.className = 'boton boton-eliminar';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', 
        function(){
            eliminarProducto(producto.id_producto, producto.nombre);
        });

        celdaAcciones.append(botonEditar, botonEliminar);
        fila.appendChild(celdaAcciones);
        cuerpoProductos.appendChild(fila);
    })
}

