import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '주문배송', href: '/seller/orders' },
    { title: '문자 발송 내역', href: '/seller/orders/order_6' },
];

export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-8 p-4">
                <section className="space-y-4">
                    <h1 className="text-2xl font-bold text-gray-900">문자발송내역</h1>

                    <button type="button" className="flex w-full py-1 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white text-gray-900">
                        <span className="text-2xl text-gray-600">⌕</span>
                        <span className="font-semibold">검색 열기</span>
                    </button>

                    <button type="button" className="rounded-full bg-gray-100 px-4 py-2 text-gray-900">
                        지난 30일
                    </button>
                </section>

                <section className="space-y-8 border-t border-gray-200 pt-8">
                    <p className="text-gray-900">최근 한달간의 내역만 확인 가능합니다.</p>

                    <div className="flex h-48 items-start justify-center">
                        <p className="text-gray-900">검색 결과가 없습니다.</p>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
