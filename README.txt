PANEL DE INVENTARIO — PHP 8+, MySQL, jQuery, Highcharts y SweetAlert2

INSTALACIÓN
1. Copia PanelInventario a C:\wamp64\www (o htdocs de XAMPP).
2. Inicia Apache y MySQL.
3. Si ya tienes ejemplo_crud_dwebi, no importes nada. Se usa la misma tabla productos.
   Si no existe, ejecuta base_datos.sql (crea la estructura sin borrar datos).
4. Revisa config/conexion.php si tu usuario o contraseña MySQL son diferentes.
5. Abre http://localhost/PanelInventario/.

ARCHIVOS
index.php: selecciona la vista mediante una lista permitida y carga sus scripts.
vistas/: navbar, menú y contenido separado por pantalla.
assets/css/estilos.css: variables, controles, navegación, tarjetas y responsividad.
assets/js/panel.js: menú, colores y modo oscuro; preferencias guardadas en navegador.
assets/js/alertas.js: SweetAlert2 y alternativa nativa si el CDN no carga.
assets/js/solicitudes.js: AJAX con token CSRF compartido.
assets/js/formulario.js, tabla.js, productos.js: CRUD original.
assets/js/filtros.js: filtros y cálculos reutilizables.
assets/js/grafica.js: filtros, indicadores y Highcharts local.
assets/js/inventario.js: inicio y reporte de stock bajo (0 a 5 unidades).
src/productos/: controlador y consultas MySQLi originales.

El panel no incluye autenticación; es una práctica local, no un sistema listo para publicación.
SweetAlert2 requiere internet; jQuery y Highcharts están incluidos localmente.
Pruebas: node pruebas/alertas.test.js y node pruebas/filtros.test.js.
