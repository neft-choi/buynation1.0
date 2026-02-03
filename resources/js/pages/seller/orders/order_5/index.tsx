import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '주문배송', href: '/seller/orders' },
    { title: '주문조회', href: '/seller/orders/order_5' },
];

export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-8 p-4">
                <section className="space-y-8">
                    <div className="flex items-baseline gap-2">
                        <h1 className="text-2xl font-bold text-gray-900">주문조회</h1>
                        <button type="button" className="text-sm font-medium text-blue-600">
                            자세히보기
                        </button>
                    </div>

                    <div className="space-y-2">
                        <div className="grid grid-cols-3">
                            <button type="button" className="h-12 rounded-l-md border border-gray-300 bg-white text-gray-900">
                                오늘
                            </button>
                            <button type="button" className="h-12 border-y border-gray-300 bg-white text-gray-900">
                                지난 7일
                            </button>
                            <button type="button" className="h-12 rounded-r-md border border-blue-500 bg-white text-blue-600">
                                지난 30일
                            </button>
                        </div>

                        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                            <button type="button" className="flex h-12 items-center justify-between rounded-md border border-gray-300 px-4 text-gray-900">
                                <span>2025.11.16.</span>
                                <span>🗓️</span>
                            </button>
                            <span className="text-gray-700">~</span>
                            <select className="h-12 rounded-md border border-gray-300 px-4 text-gray-900">
                                <option value="2025-12-15">2025.12.15.</option>
                            </select>
                        </div>

                        <input
                            type="text"
                            placeholder="주문자명"
                            className="h-12 w-full rounded-md border border-gray-300 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="전화번호"
                            className="h-12 w-full rounded-md border border-gray-300 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="주문번호"
                            className="h-12 w-full rounded-md border border-gray-300 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                        />
                    </div>
                </section>

                <section>
                    <div className="grid grid-cols-2 gap-0">
                        <button type="button" className="h-12 rounded-l-md border border-gray-300 bg-white font-semibold text-gray-900">
                            초기화
                        </button>
                        <button type="button" className="h-12 rounded-r-md border border-blue-600 bg-blue-600 font-semibold text-white">
                            검색
                        </button>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
