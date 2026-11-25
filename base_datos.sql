CREATE DATABASE IF NOT EXISTS ejemplo_crud_dwebi
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE ejemplo_crud_dwebi;

CREATE TABLE IF NOT EXISTS productos (
    id_producto INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    categoria VARCHAR(30) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    existencia INT UNSIGNED NOT NULL DEFAULT 0
);

