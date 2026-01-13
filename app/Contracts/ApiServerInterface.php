<?php

namespace App\Contracts;

interface ApiServerInterface
{
    public function send(
        string $role,
        string $action,
        array $payload = [],
        bool $withAuth = true
    ): array;
}
