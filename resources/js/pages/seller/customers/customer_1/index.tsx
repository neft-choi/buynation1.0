import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '고객관리', href: '/seller/customers' },
    { title: '고객 문의', href: '/seller/customers/customer_1' },
];

// 고객문의
export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4">
                <h1 className="ml-2 text-2xl font-bold text-gray-900">고객문의</h1>

                <div className="rounded bg-gray-100 p-2 text-sm">
                    <span>고객문의에 답변을 해주세요! 판매자 점수에 영향을 줄 수 있습니다</span>
                </div>

                <section className="space-y-2 py-4">
                    <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2">
                        <span className="text-gray-500">⌕</span>
                        <span className="font-semibold text-gray-900">검색열기</span>
                    </button>

                    <div className="flex gap-2 overflow-x-auto">
                        <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 whitespace-nowrap text-gray-400">
                            <span>지난 30일</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 whitespace-nowrap text-gray-900">
                            <span>미답변</span>
                            <button className="cursor-pointer text-gray-500">✕</button>
                        </div>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold text-gray-900">총 0건</p>

                    <section className="flex h-30 items-center justify-center">
                        <span>조회된 고객문의가 없습니다.</span>
                    </section>
                </section>
            </div>
        </AppLayout>
    );
}
