<?php

namespace Database\Seeders;

use App\Enum\RolesEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //Role 생성
        $developerRole = Role::create(['name' => RolesEnum::Developer->value]);
        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);
        $buygentRole = Role::create(['name' => RolesEnum::Buygent->value]);
        $buycleRole = Role::create(['name' => RolesEnum::Buycle->value]);
        $guestRole = Role::create(['name' => RolesEnum::Guest->value]);
        $buymerRole = Role::create(['name' => RolesEnum::Buymer->value]);
        $SellerRole = Role::create(['name' => RolesEnum::Seller->value]);
        //Role 생성

        // User::factory(10)->create();
        User::factory()->create([
            'name' => 'Developer',
            'email' => 'developer@example.com',
        ])->assignRole($developerRole);

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
        ])->assignRole($adminRole);

        User::factory()->create([
            'name' => 'Buygent',
            'email' => 'buygent@example.com',
        ])->assignRole($buygentRole);

        User::factory()->create([
            'name' => 'Buycle',
            'email' => 'buycle@example.com',
        ])->assignRole($buycleRole);

        User::factory()->create([
            'name' => 'Guest',
            'email' => 'guest@example.com',
        ])->assignRole($guestRole);

        User::factory()->create([
            'name' => 'Buymer',
            'email' => 'buymer@example.com',
        ])->assignRole($buymerRole);

        User::factory()->create([
            'name' => 'Seller',
            'email' => 'seller@example.com',
        ])->assignRole($SellerRole);
    }
}
