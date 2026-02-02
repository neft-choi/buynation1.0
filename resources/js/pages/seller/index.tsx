import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/seller',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="justify-cebter flex flex-col gap-4 p-4">
                <AdminDashboard />
            </div>
        </AppLayout>
    );
}
