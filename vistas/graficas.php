<p>Analiza las existencias de los productos con filtros combinables.</p>
<section class="panel">
    <h2>Filtros</h2>
    <form id="filtrosGrafica" class="filtros">
        <label>Buscar producto<input id="buscar" placeholder="Nombre"></label>
        <label>Categoría<select id="fCategoria"><option value="">Todas</option><option>Accesorios</option><option value="Computo">Cómputo</option><option>Oficina</option></select></label>
        <label>Existencias<select id="fStock"><option value="">Todas</option><option value="agotado">Agotados</option><option value="bajo">Stock bajo (1–5)</option><option value="normal">Más de 5</option></select></label>
        <label>Orden<select id="fOrden"><option value="mayor">Mayor existencia</option><option value="menor">Menor existencia</option><option value="nombre">Nombre A-Z</option></select></label>
        <label>Límite<select id="fLimite"><option value="10">10 productos</option><option value="20">20 productos</option><option value="5">5 productos</option><option value="0">Todos</option></select></label>
        <label>Tipo de gráfica<select id="fTipo"><option value="column">Columnas</option><option value="bar">Barras</option><option value="line">Línea</option><option value="pie">Circular</option></select></label>
        <button type="submit">Aplicar filtros</button><button id="limpiarFiltros" type="button" class="secundario">Limpiar</button><button id="recargarGrafica" type="button" class="secundario">Recargar datos</button>
    </form>
</section>
<div class="indicadores"><div class="panel">Unidades mostradas<strong id="totalExistencia">—</strong></div><div class="panel">Mayor existencia mostrada<strong id="productoMayor">—</strong></div></div>
<section class="panel"><div id="graficaProductos"></div></section>
