// Alertas de éxito y error.
function mostrarMensaje(texto, esError = false) {
    if (typeof Swal === 'undefined') {
        alert(texto);
        return;
    }
    Swal.fire({
        icon: esError ? 'error' : 'success',
        title: esError ? 'Error' : 'Correcto',
        text: texto
    });
}

// Confirmar antes de eliminar un producto.
async function confirmarEliminacion(nombreProducto) {
    if (typeof Swal === 'undefined') {
        return confirm('¿Eliminar ' + nombreProducto + '?');
    }
    const resultado = await Swal.fire({
        icon: 'warning',
        title: '¿Eliminar producto?',
        text: nombreProducto,
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#b91c1c'
    });
    return resultado.isConfirmed;
}
