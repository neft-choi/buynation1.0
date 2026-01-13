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
