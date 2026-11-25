<?php 
declare(strict_types=1);

function consultarProductos(mysqli $link) : array|false
{
    $sql = "SELECT id_producto, nombre, categoria, precio, existencia FROM productos ORDER BY id_producto DESC";
    $resultado = mysqli_query($link, $sql);

    if($resultado === false){
        return false;
    }

    return mysqli_fetch_all($resultado, MYSQLI_ASSOC);
}

function insertarProducto(mysqli $link, string $nombre, string $categoria, float $precio, int $existencia): bool
{
    $sql = "INSERT INTO productos (nombre, categoria, precio, existencia) VALUES (?,?,?,?)";
    $sentencia = mysqli_prepare($link, $sql);

    if($sentencia === false){
        return false;
    }

    mysqli_stmt_bind_param($sentencia, 'ssdi', $nombre, $categoria, $precio, $existencia);
    $resultado = mysqli_stmt_execute($sentencia);
    mysqli_stmt_close($sentencia);
    return $resultado;
}

function modificarProducto(mysqli $link,int $id,  string $nombre, string $categoria, float $precio, int $existencia): bool
{
    $sql = "UPDATE productos SET nombre = ?, categoria = ?, precio = ?, existencia = ? WHERE id_producto = ?";
    $sentencia = mysqli_prepare($link, $sql);

    if($sentencia === false){
        return false;
    }

    mysqli_stmt_bind_param($sentencia, 'ssdii', $nombre, $categoria, $precio, $existencia, $id);
    $resultado = mysqli_stmt_execute($sentencia);
    mysqli_stmt_close($sentencia);
    return $resultado;
}

function borrarProducto(mysqli $link,int $id): bool
{
    $sql = "DELETE FROM productos WHERE id_producto = ?";
    $sentencia = mysqli_prepare($link, $sql);

    if($sentencia === false){
        return false;
    }

    mysqli_stmt_bind_param($sentencia, 'i', $id);
    $resultado = mysqli_stmt_execute($sentencia);
    mysqli_stmt_close($sentencia);
    return $resultado;
}

?>