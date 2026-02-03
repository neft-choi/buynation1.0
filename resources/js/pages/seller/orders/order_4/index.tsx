import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '주문배송', href: '/seller/orders' },
    { title: '교환관리', href: '/seller/orders/order_4' },
];

export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-8 p-4">
                <section className="space-y-4">
                    <div className="flex items-baseline gap-2">
                        <h1 className="text-2xl font-bold text-gray-900">교환관리</h1>
                        <button type="button" className="text-sm font-medium text-blue-600">
                            자세히 알아보기
                        </button>
                    </div>

                    <button type="button" className="flex w-full items-center justify-between rounded-md bg-gray-100 p-4">
                        <span className="font-semibold text-gray-900">교환 정보 안내 내용입니다.</span>
                        <span className="text-gray-500">⌄</span>
                    </button>

                    <div className="flex gap-2 overflow-x-auto">
                        <button type="button" className="min-w-52 rounded-md border border-gray-300 bg-gray-50 p-4 text-left">
                            <p className="mb-2 font-semibold text-gray-900">교환취소</p>
                            <p className="text-3xl font-bold text-gray-900">0</p>
                        </button>

                        <button type="button" className="min-w-52 rounded-md border border-gray-300 bg-gray-50 p-4 text-left">
                            <p className="mb-2 font-semibold text-gray-900">교환접수</p>
                            <p className="text-3xl font-bold text-gray-900">0</p>
                        </button>

                        <button type="button" className="min-w-52 rounded-md border border-gray-300 bg-gray-50 p-4 text-left">
                            <p className="mb-2 font-semibold text-gray-900">교환진행</p>
                            <p className="text-3xl font-bold text-gray-900">0</p>
                        </button>

                        <button type="button" className="min-w-52 rounded-md border border-blue-500 bg-gray-50 p-4 text-left">
                            <p className="mb-2 font-semibold text-gray-900">교환완료</p>
                            <p className="text-3xl font-bold text-gray-900">0</p>
                        </button>
                    </div>
                </section>

                <section className="space-y-4 border-b border-gray-200 pb-4">
                    <select className="w-full rounded-md border border-gray-300 p-2 text-gray-900">
                        <option value="all">전체</option>
                    </select>

                    <div className="grid grid-cols-3 gap-2">
                        <select className="col-span-1 w-full rounded-md border border-gray-300 p-2 text-gray-900">
                            <option value="orderNo">주문번호</option>
                        </select>

                        <div className="col-span-2 flex items-center gap-2 rounded-md border border-gray-300 px-2">
                            <span className="text-gray-500">⌕</span>
                            <input type="text" placeholder="입력" className="w-full text-gray-900 placeholder:text-gray-400 focus:outline-none" />
                        </div>
                    </div>

                    <div className="w-56 rounded-full border border-blue-500 px-4 py-2">
                        <select className="w-full appearance-none bg-transparent text-blue-600">
                            <option value="date">접수일 2025.11.16~2...</option>
                        </select>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="font-bold text-gray-900">
                        교환전체 목록 <span className="font-medium text-gray-700">(총 0건)</span>
                    </h2>

                    <div className="border-t border-gray-300 py-4">
                        <div className="flex items-center gap-4">
                            <input type="checkbox" className="size-4 rounded border-gray-400 text-blue-600 focus:ring-blue-500" />
                            <button type="button" className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900">
                                입고완료
                            </button>
                        </div>
                    </div>

                    <div className="flex h-96 flex-col items-center justify-center gap-2 text-gray-900">
                        <span className="text-3xl">ⓘ</span>
                        <p>검색 결과가 없습니다.</p>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
