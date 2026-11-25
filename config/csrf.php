<?php
declare(strict_types=1);

function obtenerTokenCsrf(): string
{
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['csrf_token'];
}

function validarTokenCsrf(string $tokenRecibido): bool
{
    $tokenGuardado = $_SESSION['csrf_token'] ?? '';

    return $tokenRecibido !== ''
        && $tokenGuardado !== ''
        && hash_equals($tokenGuardado, $tokenRecibido);
}
