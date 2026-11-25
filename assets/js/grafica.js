let datosGrafica = [];
let grafica;
let datosCargados = false;
const campo = id => document.getElementById(id);

// 1. Consultar todos los productos usando el controlador existente.
function cargarGrafica() {
    enviarSolicitud('listarProductos', {}, function(respuesta) {
        if (respuesta.msg !== 0) return mostrarMensaje(respuesta.respuesta, true);
        datosGrafica = respuesta.datos.productos;
        datosCargados = true;
        aplicarFiltros();
    });
}

// 2. Leer filtros y calcular los indicadores de los resultados visibles.
function aplicarFiltros() {
    if (!datosCargados) return;
    const productos = filtrarProductos(datosGrafica, {
        buscar: campo('buscar').value.trim(), categoria: campo('fCategoria').value,
        stock: campo('fStock').value, orden: campo('fOrden').value,
        limite: Number(campo('fLimite').value)
    });
    campo('totalExistencia').textContent = resumenInventario(productos).unidades + ' unidades';
    const mayor = filtrarProductos(productos)[0];
    campo('productoMayor').textContent = mayor ? mayor.nombre : '—';
    dibujarGrafica(productos);
}

// 3. Dibujar con Highcharts y los colores compartidos del CSS.
function dibujarGrafica(productos) {
    if (grafica) { grafica.destroy(); grafica = null; }
    if (!productos.length) {
        campo('graficaProductos').textContent = 'No hay productos que coincidan con los filtros.';
        return;
    }
    const tipo = campo('fTipo').value;
    const estilo = getComputedStyle(document.body);
    const color = estilo.getPropertyValue('--principal').trim();
    const texto = estilo.getPropertyValue('--texto').trim();
    grafica = Highcharts.chart('graficaProductos', {
        chart: {type: tipo, backgroundColor:'transparent', height: tipo === 'bar' ? Math.max(350, productos.length * 30) : 400},
        title: {text:'Existencia por producto', style:{color:texto}},
        subtitle: {text: productos.length + ' productos', style:{color:texto}},
        xAxis: {categories: productos.map(p => p.nombre), labels:{style:{color:texto}}},
        yAxis: {min:0, allowDecimals:false, title:{text:'Unidades',style:{color:texto}}, labels:{style:{color:texto}}},
        tooltip: {valueSuffix:' unidades'},
        plotOptions: {pie:{dataLabels:{style:{color:texto}, enabled:true}}},
        legend: {enabled:false}, credits:{enabled:false},
        series: [{name:'Existencias', color:tipo === 'pie' ? undefined : color, data: tipo === 'pie' ? productos.map(p => ({name:p.nombre,y:Number(p.existencia)})) : productos.map(p => Number(p.existencia))}]
    });
}

// 4. Eventos de la pantalla.
campo('filtrosGrafica').onsubmit = e => { e.preventDefault(); aplicarFiltros(); };
campo('limpiarFiltros').onclick = () => { campo('filtrosGrafica').reset(); aplicarFiltros(); };
campo('recargarGrafica').onclick = cargarGrafica;
document.addEventListener('apariencia', aplicarFiltros);
cargarGrafica();
