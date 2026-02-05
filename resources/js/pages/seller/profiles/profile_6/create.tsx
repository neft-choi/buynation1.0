import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '판매자정보', href: '/seller/profiles' },
    { title: '주소록/배송정보 관리', href: '/seller/profiles/profile_6' },
];

//새 주소지 등록
export default function create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4"></div>
        </AppLayout>
    );
}
