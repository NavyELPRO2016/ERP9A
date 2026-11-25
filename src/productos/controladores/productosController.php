<?php 
declare(strict_types=1);
 
session_start();
 
require_once __DIR__ . '/../../../config/respuestaJson.php';
require_once __DIR__ . '/../../../config/csrf.php';
require_once __DIR__ . '/../../../config/conexion.php';
require_once __DIR__ . '/../consultas/productosConsultas.php';

$tokenRecibido = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';

if(!validarTokenCsrf($tokenRecibido)){
    responderJson(1, 'La solicitud no es valida', null, 403);
}

$accion = $_POST['accion'] ?? '';

switch($accion){
    case 'listarProductos':
        $productos = consultarProductos($link);

        if($productos === false){
            responderJson(1,'No fue posible consultar los productos.', null, 500);
            }
        responderJson(0,'Consulta realizada.', ['productos' => $productos]);

    case 'registrarProductos':
        $nombre = trim($_POST['nombre'] ?? '');
        $categoria = trim($_POST['categoria'] ?? '');
        $precio = filter_var($_POST['precio'] ?? null, FILTER_VALIDATE_FLOAT);
        $existencia = filter_var($_POST['existencia'] ?? null, FILTER_VALIDATE_INT);

        validarDatosProducto($nombre,$categoria,$precio,$existencia);

        if(!insertarProducto($link,$nombre,$categoria,(float) $precio, (int) $existencia)){
            responderJson(1,'No fue posible registrar el producto.', null, 500);
        }
        responderJson(0,'Producto registrado correctamente.');

    case 'actualizarProducto':
        $id = filter_var($_POST['id_producto'] ?? null, FILTER_VALIDATE_INT);
        $nombre = trim($_POST['nombre'] ?? '');
        $categoria = trim($_POST['categoria'] ?? '');
        $precio = filter_var($_POST['precio'] ?? null, FILTER_VALIDATE_FLOAT);
        $existencia = filter_var($_POST['existencia'] ?? null, FILTER_VALIDATE_INT);

        if($id === false || $id < 1){
            responderJson(1,'El identificador no es valido.', null, 422);
        }

        validarDatosProducto($nombre,$categoria,$precio,$existencia);
        
        if(!modificarProducto($link,(int) $id, $nombre, $categoria,(float) $precio, (int) $existencia)){
            responderJson(1,'No fue posible actualizar el producto.', null, 500);
        }
        responderJson(0,'Producto actualizado correctamente.');
    
    case 'eliminarProducto':
            $id = filter_var($_POST['id_producto'] ?? null, FILTER_VALIDATE_INT);

        if($id === false || $id < 1){
            responderJson(1,'El identificador no es valido.', null, 422);
        }

        if(!borrarProducto($link,(int) $id)){
            responderJson(1,'No fue posible eliminar el producto.', null, 500);
        }
        responderJson(0,'Producto eliminado correctamente.');
        
    default:
        responderJson(1,'La accion solicitada no existe.', null, 400);
}

function validarDatosProducto(string $nombre, string $categoria, float|false $precio, int|false $existencia): void
{
        $categoriasPermitidas = ['Accesorios','Computo', 'Oficina'];

        if($nombre === '' || !in_array($categoria, $categoriasPermitidas, true) || $precio === false || $existencia === false){
            responderJson(1, 'Completa correctamente todos los campos.', null, 422);
        }

        if($precio < 0 || $existencia < 0){
            responderJson(1, 'El precio y la existencia no pueden ser negativos.', null, 422);
        }
}

?>