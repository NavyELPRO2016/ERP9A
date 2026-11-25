<?php
declare(strict_types=1);
session_start();
require_once __DIR__ . '/config/csrf.php';
$tokenCsrf = obtenerTokenCsrf();
// Solo se permiten estas vistas.
$vistas = ['inicio'=>'Inicio', 'productos'=>'Productos', 'graficas'=>'Gráficas', 'inventario'=>'Inventario'];
$vista = $_GET['vista'] ?? 'inicio';
if (!is_string($vista) || !isset($vistas[$vista])) $vista = 'inicio';
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="<?= htmlspecialchars($tokenCsrf, ENT_QUOTES, 'UTF-8') ?>">
    <title><?= $vistas[$vista] ?> | Panel de inventario</title>
    <link rel="stylesheet" href="assets/css/estilos.css">
</head>
<body>
    <?php require __DIR__ . '/vistas/navbar.php'; ?>
    <div class="layout">
        <?php require __DIR__ . '/vistas/menu.php'; ?>
        <main id="contenido">
            <h1><?= $vistas[$vista] ?></h1>
            <?php require __DIR__ . '/vistas/' . $vista . '.php'; ?>
        </main>
    </div>
    <script src="assets/lib/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="assets/js/alertas.js"></script>
    <script src="assets/js/solicitudes.js"></script>
    <script src="assets/js/panel.js"></script>
    <script src="assets/js/filtros.js"></script>
    <?php if ($vista === 'productos'): ?>
        <script src="assets/js/formulario.js"></script>
        <script src="assets/js/tabla.js"></script>
        <script src="assets/js/productos.js"></script>
    <?php elseif ($vista === 'graficas'): ?>
        <script src="assets/lib/highcharts.js"></script>
        <script src="assets/js/grafica.js"></script>
    <?php else: ?>
        <script src="assets/js/inventario.js"></script>
    <?php endif; ?>
</body>
</html>
