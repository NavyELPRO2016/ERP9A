<?php
declare(strict_types=1);

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'ejemplo_crud_dwebi');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if ($link === false) {
    responderJson(1, 'No fue posible conectar con la base de datos.', null, 500);
}

mysqli_set_charset($link, 'utf8mb4');
