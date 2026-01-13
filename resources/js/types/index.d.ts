import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';
import { ItemsResponse, ProductMetaResponse } from './shop/home';
import { DetailItemResponse } from './shop/product';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    role?:UserRole;
    icon?: LucideIcon | null;
    isActive?: boolean;
}
export interface SearchSuggestionsData {
    popular_keywords: PopularKeyword[];
    recommended_images: RecommendedImage[];
    recommended_keywords: string[];
}

export interface SearchSuggestionsResponse {
    data: SearchSuggestionsData;
}
export interface SharedData {
    access_token?: string | null;
    category?: string | null;
    cart:{count:number};
    subcategory?: string | null;
    child?: string | null;
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    success: string|null;
    metaData: ProductMetaResponse;
    searchSuggestions:SearchSuggestionsResponse
    keyword?:string;
    recommandProducts:ItemsResponse;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    permissions: string[];
    roles: UserRole[];
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export type UserRole = 'admin' | 'buygent' | 'buycle' | 'developer' | 'guest';

export interface TableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
}

export interface BuygentTableProps {
    id:string;
    name:string;
    yesterdaySales:number;
    cumulativeSales:number;
    yestermonthSales:number;
    monthlySales:MonthlySalesProps[];
}

export interface MonthlySalesProps {
    month: '1월'|'2월'|'3월'|'4월'|'5월'|'6월'|'7월'|'8월'|'9월'|'10월'|'11월'|'12월';
    sales: number;
}
export interface BuycleTableProps {
    id:string;
    buycleName:string;
    buycleCode:string;
    buygentName:string;
    password:string;
    aproved:ApprovalStatus
}
export type ApprovalStatus = "pending" | "approved" | "rejected";
