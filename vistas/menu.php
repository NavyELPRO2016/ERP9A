<aside id="menu" class="menu">
    <div class="menu-titulo"><small>NAVEGACIÓN</small><button id="cerrarMenu" aria-label="Cerrar menú">×</button></div>
    <nav>
        <?php foreach ($vistas as $clave => $titulo): ?>
            <a href="?vista=<?= $clave ?>" class="<?= $vista === $clave ? 'activo' : '' ?>" <?= $vista === $clave ? 'aria-current="page"' : '' ?>><?= $titulo ?></a>
        <?php endforeach; ?>
    </nav>
    <small class="menu-pie">Gestión de productos</small>
</aside>
