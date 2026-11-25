// Comunicación con el controlador PHP.
const URL_PRODUCTOS = 'src/productos/controladores/productosController.php';
const metaToken = document.querySelector('meta[name="csrf-token"]');

function enviarSolicitud(accion, datos, alTerminar){
   
    $.ajax({
    url: URL_PRODUCTOS,
    type: 'POST',
    dataType: 'json',
    headers: {
        'X-CSRF-Token' : metaToken.getAttribute ('content')
    },
    data: Object.assign({accion: accion,}, datos),
    success: function(respuesta){
        alTerminar(respuesta);
    },
    error: function(xhr){
        const respuesta = xhr.responseJSON || {};
        mostrarMensaje(respuesta.respuesta || 'No fue posible completar la solicitud.', true);
    }
    });
}

