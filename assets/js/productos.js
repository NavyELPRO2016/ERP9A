// Operaciones del CRUD.
function cargarProductos(){
    enviarSolicitud('listarProductos', {}, function(respuesta){
        if(respuesta.msg === 0){
            dibujarProductos(respuesta.datos.productos);
        } else {
            mostrarMensaje(respuesta.respuesta, true);
        }
    });
}

async function eliminarProducto(id, nombreProducto){
    if (!await confirmarEliminacion(nombreProducto)){
        return;
    }

    enviarSolicitud('eliminarProducto', {id_producto: id}, function(respuesta){
        mostrarMensaje(respuesta.respuesta, respuesta.msg !== 0);

        if(respuesta.msg === 0){
            cargarProductos();
        }
    });
}

// Registrar o actualizar según el identificador.
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const id = Number(idProducto.value);
    const accion = id == 0 ? 'registrarProductos' : 'actualizarProducto';

    enviarSolicitud(accion, {
        id_producto:id,
        nombre: nombre.value,
        categoria: categoria.value,
        precio: precio.value,
        existencia: existencia.value
    }, function(respuesta){
        mostrarMensaje(respuesta.respuesta, respuesta.msg !== 0);

        if(respuesta.msg === 0){
            limpiarFormulario();
            cargarProductos();
        }
    });
})

botonCancelar.addEventListener('click', limpiarFormulario);
botonRecargar.addEventListener('click', cargarProductos);
cargarProductos();