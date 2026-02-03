import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '주문배송', href: '/seller/orders' },
    { title: '출고중지 요청', href: '/seller/orders/order_2' },
];

export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-8 p-4">
                <section className="space-y-4">
                    <div className="flex items-baseline gap-2">
                        <h1 className="text-2xl font-bold text-gray-900">출고중지관리</h1>
                        <button type="button" className="text-sm font-medium text-blue-600">
                            자세히 알아보기
                        </button>
                    </div>

                    <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md bg-gray-50 p-2"
                    >
                        <span className="font-semibold text-gray-900">출고중지 정보안내 내용입니다.</span>
                        <span className="text-2xl text-gray-500">⌄</span>
                    </button>

                    <div className="grid grid-cols-3 gap-2">
                        <button type="button" className="rounded-md border border-blue-500 bg-gray-50 p-4 text-left">
                            <p className="text-md mb-2 font-semibold text-gray-900">출고중지요청</p>
                            <p className="text-3xl font-bold text-gray-900">0</p>
                        </button>

                        <button type="button" className="rounded-md border border-gray-300 bg-gray-50 p-4 text-left">
                            <p className="text-md mb-2 font-semibold text-gray-900">출고중지완료</p>
                            <p className="text-3xl font-bold text-gray-900">0</p>
                        </button>
                    </div>
                </section>

                <section className="space-y-2">
                    <select className="flex w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900">
                        <option value="request">출고중지요청</option>
                    </select>

                    <div className="grid grid-cols-3 gap-2">
                        <select className="col-span-1 flex w-full rounded-md border border-gray-300 bg-white p-2 text-gray-900">
                            <option value="orderNo">주문번호</option>
                        </select>

                        <div className="col-span-2 flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3">
                            <span className="text-3xl text-gray-600">⌕</span>
                            <input type="text" placeholder="입력" className="w-full text-gray-900 placeholder:text-gray-400 focus:outline-none" />
                        </div>
                    </div>

                    <button type="button" className="flex items-center gap-2 rounded-full border border-blue-500 bg-white px-4 py-2">
                        <span className="text-gray-900">접수일</span>
                        <span className="text-blue-600">2025.11.16~2...</span>
                        <span className="text-blue-600">⌄</span>
                    </button>
                </section>

                <section className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-900">
                        출고중지요청 목록<span className="font-medium">(총 0건)</span>
                    </h2>

                    <div className="border-t border-b border-gray-300 py-2">
                        <div className="flex items-center gap-4">
                            <label className="flex size-4 items-center justify-center rounded border border-gray-400 text-xl text-white">□</label>
                            <button type="button" className="rounded-md border border-gray-300 px-4 py-2 text-lg text-gray-900">
                                출고중지완료
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
