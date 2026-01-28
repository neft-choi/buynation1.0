<?php

namespace App\Enum;

enum RolesEnum: string
{
    case Guest = 'guest';
    case Admin = 'admin';
    case Buygent = 'buygent';
    case Buycle = 'buycle';
    case Buymer = 'buymer';
    case Developer = 'developer';
    case Seller = 'seller';
    public static function labels(): array
    {
        return [
            self::Guest->value => 'Guest',
            self::Admin->value => 'Admin',
            self::Buygent->value => 'Buygent',
            self::Buycle->value => 'Buycle',
            self::Buymer->value => 'Buymer',
            self::Developer->value => 'Developer',
            self::Seller->value => 'Seller',
        ];
    }

    public function label()
    {
        return match($this) {
            self::Guest => 'Guest',
            self::Admin => 'Admin',
            self::Buygent => 'Buygent',
            self::Buycle => 'Buycle',
            self::Buymer => 'Buymer',
            self::Developer => 'Developer',
            self::Seller => 'Seller',

        };
    }
}