import { PublicTable } from '@/components/public-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { BuygentTableProps, MonthlySalesProps, type BreadcrumbItem } from '@/types';

import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import { useEffect, useRef } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Create() {
    const input = useRef<HTMLInputElement>(null);
    useEffect(() => {
        input.current?.focus();
    }, [])
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col gap-4 rounded-xl p-8 overflow-x-auto">
                <div className="grid gap-2 w-full max-w-sm">
                    <Label htmlFor="buygent-code">코드</Label>
                    <Input ref={input} tabIndex={1} />
                </div>
                <div className="grid gap-2 w-full max-w-sm">
                    <Label htmlFor="buygent-code">아이디</Label>
                    <Input tabIndex={2} />
                </div>
                <div className="grid gap-2 w-full max-w-sm">
                    <Label htmlFor="buygent-code">비밀번호</Label>
                    <Input tabIndex={3} />
                </div>
                <div className="grid gap-2 w-full max-w-sm">
                    <Button className='font-black' tabIndex={4}>생성</Button>
                </div>
            </div>
        </AppLayout>
    );
}
