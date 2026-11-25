// Elementos del formulario y la tabla.
const formulario = document.getElementById('formularioProducto');
const idProducto = document.getElementById('idProducto');
const nombre = document.getElementById('nombre');
const categoria = document.getElementById('categoria');
const precio = document.getElementById('precio');
const existencia = document.getElementById('existencia');
const tituloFormulario = document.getElementById('tituloFormulario');
const botonCancelar = document.getElementById('botonCancelar');
const botonRecargar = document.getElementById('botonRecargar');
const cuerpoProductos = document.getElementById('cuerpoProductos');

// Cargar y limpiar los campos del formulario.
function prepararEdicion(producto){
    idProducto.value = producto.id_producto;
    nombre.value = producto.nombre;
    categoria.value = producto.categoria;
    precio.value = producto.precio;
    existencia.value = producto.existencia;
    tituloFormulario.textContent = 'Editar producto';
    botonCancelar.hidden = false;
    nombre.focus();
}

function limpiarFormulario(){
    formulario.reset();
    idProducto.value = 0;
    tituloFormulario.textContent = 'Nuevo Producto';
    botonCancelar.hidden = true;
}

