// Filtrar y ordenar sin modificar la lista original.
function filtrarProductos(productos, filtros = {}) {
    let lista = productos.filter(function(p) {
        const cantidad = Number(p.existencia);
        return (!filtros.categoria || p.categoria === filtros.categoria)
            && (!filtros.buscar || p.nombre.toLowerCase().includes(filtros.buscar.toLowerCase()))
            && (!filtros.stock || (filtros.stock === 'agotado' && cantidad === 0)
                || (filtros.stock === 'bajo' && cantidad > 0 && cantidad <= 5)
                || (filtros.stock === 'normal' && cantidad > 5));
    });
    lista.sort(function(a,b) {
        if (filtros.orden === 'nombre') return a.nombre.localeCompare(b.nombre);
        if (filtros.orden === 'menor') return Number(a.existencia) - Number(b.existencia);
        return Number(b.existencia) - Number(a.existencia);
    });
    return filtros.limite ? lista.slice(0, Number(filtros.limite)) : lista;
}

// Indicadores calculados a partir de la lista recibida.
function resumenInventario(productos) {
    return productos.reduce(function(r,p) {
        const cantidad = Number(p.existencia);
        r.productos++;
        r.unidades += cantidad;
        r.valor += cantidad * Number(p.precio);
        if (cantidad <= 5) r.bajos++;
        return r;
    }, {productos:0, unidades:0, valor:0, bajos:0});
}

if (typeof module !== 'undefined') module.exports = {filtrarProductos, resumenInventario};
