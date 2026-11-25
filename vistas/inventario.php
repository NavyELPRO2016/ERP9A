<p>Identifica los productos que necesitan reposición (5 unidades o menos).</p>
<?php require __DIR__ . '/indicadores.php'; ?>
<section class="panel">
    <h2>Productos con stock bajo o agotado</h2>
    <div class="tabla"><table><thead><tr><th>Producto</th><th>Categoría</th><th>Existencia</th><th>Estado</th></tr></thead><tbody id="tablaInventario"></tbody></table></div>
    <a class="boton" href="?vista=productos">Administrar productos</a>
</section>
