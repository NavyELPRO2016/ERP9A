// La pantalla de inicio y el reporte usan la misma consulta del CRUD.
enviarSolicitud('listarProductos', {}, function(respuesta) {
    if (respuesta.msg !== 0) return mostrarMensaje(respuesta.respuesta, true);
    const productos = respuesta.datos.productos;
    const r = resumenInventario(productos);
    document.getElementById('kProductos').textContent = r.productos;
    document.getElementById('kUnidades').textContent = r.unidades;
    document.getElementById('kValor').textContent = r.valor.toLocaleString('es-MX', {style:'currency', currency:'MXN'});
    document.getElementById('kBajos').textContent = r.bajos;
    const tabla = document.getElementById('tablaInventario');
    if (!tabla) return;
    const bajos = productos.filter(p => Number(p.existencia) <= 5).sort((a,b) => a.existencia - b.existencia);
    if (!bajos.length) {
        const celda = tabla.insertRow().insertCell();
        celda.colSpan = 4;
        celda.textContent = 'No hay productos con stock bajo.';
    }
    bajos.forEach(function(p) {
        const fila = tabla.insertRow();
        [p.nombre, p.categoria, p.existencia, Number(p.existencia) === 0 ? 'Agotado' : 'Stock bajo'].forEach(texto => fila.insertCell().textContent = texto);
    });
});
