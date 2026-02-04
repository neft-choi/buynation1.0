import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '고객관리', href: '/seller/customers' },
    { title: '상품평', href: '/seller/customers/customer_3' },
];

// 상품평
export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4">
                <h1 className="text-2xl font-bold text-gray-900">상품평</h1>

                <section className="space-y-2 py-4">
                    <button
                        type="button"
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded border border-gray-300 px-4 py-2"
                    >
                        <span className="text-gray-500">⌕</span>
                        <span className="font-semibold text-gray-900">검색열기</span>
                    </button>

                    <div className="flex gap-2 overflow-x-auto">
                        <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 whitespace-nowrap text-gray-400">
                            <span>기간: 지난 30일</span>
                            <button className="cursor-pointer">✕</button>
                        </div>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <div className="flex items-center gap-4">
                        <p className="font-bold text-gray-900">총 0개</p>

                        <div className="flex items-center gap-2">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="peer sr-only" />
                                <span className="h-6 w-10 rounded-full bg-gray-300 transition-colors peer-checked:bg-blue-500" />
                                <span className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-4" />
                            </label>
                            <p className="text-gray-900">상품평 코멘트만 모아보기</p>
                        </div>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
