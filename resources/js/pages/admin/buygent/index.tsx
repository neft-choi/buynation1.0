import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Label } from "@/components/ui/label"
import { Input } from '@/components/ui/input';
import { useEffect, useRef } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function Index() {
    const input = useRef<HTMLInputElement>(null);
    useEffect(() => {
        input.current?.focus();
    }, [])
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col gap-4 rounded-xl p-8 overflow-x-auto">

            </div>
        </AppLayout>
    );
}
