import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '상품관리', href: '/seller/products' },
    { title: '상품 조회/수정', href: '/seller/products/show' },
];

export default function Show() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4">Show</div>
        </AppLayout>
    );
}
