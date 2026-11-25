<?php
declare(strict_types=1);

function responderJson(int $msg, string $respuesta, ?array $datos = null, int $codigoHttp = 200): void
{
    http_response_code($codigoHttp);
    header('Content-Type: application/json; charset=utf-8');

    $salida = [
        'msg' => $msg,
        'respuesta' => $respuesta
    ];

    if ($datos !== null) {
        $salida['datos'] = $datos;
    }

    echo json_encode($salida, JSON_UNESCAPED_UNICODE);
    exit;
}
