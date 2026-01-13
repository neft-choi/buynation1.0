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
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col gap-4 rounded-xl p-8 overflow-x-auto">
                <div className="grid gap-2 w-full max-w-sm">
                    <Label htmlFor="buygent-code">바이전트 선택</Label>
                    <Select>
                        <SelectTrigger id='buygent-code'>
                            바이전트 선택
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">바이전트1</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2 w-full max-w-sm">
                    <Label htmlFor="buycle-code">바이클 선택</Label>
                    <Select>
                        <SelectTrigger id='buycle-code'>
                            바이클 선택
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">바이클1</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2 w-full max-w-sm">
                    <Label htmlFor="file-upload">파일 선택</Label>
                    <Input type='file' />
                </div>
            </div>
        </AppLayout>
    );
}
