<?php

namespace App\Enum;

enum PermissionsEnum: string
{
    case  ManageProducts = 'manage_products';
    case  ManageAgents = 'manage_agents';
    case  ManageStores = 'manage_stores';
    case  ManageTransactions = 'manage_transactions';
    case  ManageSales = 'manage_sales';
    case  ManageSchedules= 'manage_schedules';
    case  ManageRanks= 'manage_ranks';
}