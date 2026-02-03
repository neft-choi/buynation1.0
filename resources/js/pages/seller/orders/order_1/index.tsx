import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { ChevronDown } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '주문배송', href: '/seller/orders' },
    { title: '배송관리', href: '/seller/orders/order_1' },
];

export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-8 p-4">
                <div className="flex items-baseline gap-2">
                    <h1 className="text-2xl font-bold text-gray-900">배송관리</h1>
                    <button type="button" className="text-sm font-medium text-blue-500">
                        자세히 알아보기
                    </button>
                </div>
                <section>
                    <div className="grid grid-cols-3 gap-2">
                        <button type="button" className="rounded-md border border-gray-300 bg-gray-50 p-4 text-left">
                            <p className="text-md mb-2 font-semibold text-gray-900">출고중지요청</p>
                            <p className="text-3xl font-bold text-red-500">0</p>
                        </button>

                        <button type="button" className="rounded-md border border-blue-600 bg-gray-50 p-4 text-left">
                            <p className="text-md mb-2 font-semibold text-gray-900">결제완료</p>
                            <p className="text-3xl font-bold text-gray-900">0</p>
                        </button>

                        <button type="button" className="rounded-md border border-gray-300 bg-gray-50 p-4 text-left">
                            <p className="text-md mb-2 font-semibold text-gray-900">상품준비중</p>
                            <p className="text-3xl font-bold text-gray-900">0</p>
                        </button>
                    </div>
                </section>

                <section className="space-y-2">
                    <select className="flex w-full rounded-md border p-2" id="select">
                        <option value="select1">결제완료</option>
                    </select>

                    <div className="grid grid-cols-[1fr_2fr] gap-2">
                        <select className="flex w-full rounded-md border p-2" id="select">
                            <option value="select1">주문자명</option>
                        </select>

                        <div className="relative flex items-center gap-2 rounded-md border border-gray-300 px-2">
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요"
                                className="peer w-full pl-8 text-gray-900 placeholder:text-gray-400 focus:pl-2 focus:outline-none"
                            />
                            <span className="absolute left-2 text-3xl text-gray-600 peer-focus:hidden peer-[&:not(:placeholder-shown)]:hidden">
                                ⌕
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex items-center rounded-full border border-blue-600">
                            <div className="relative flex items-center justify-end">
                                <span className="pl-4">기간</span>
                                <select
                                    className="appearance-none px-2 pr-8 text-blue-600 focus:outline-none"
                                    id="date-select"
                                    defaultValue={'select3'}
                                >
                                    <option value="select1">오늘</option>
                                    <option value="select2">지난 7일</option>
                                    <option value="select3">지난 30일</option>
                                </select>
                                <ChevronDown className="absolute right-4 size-4" />
                            </div>
                        </div>

                        <select className="rounded-full border border-gray-300 px-4 py-2 text-gray-900" id="select">
                            <option value="" selected disabled hidden>
                                배송방법
                            </option>
                            <option value="select1">전체</option>
                            <option value="select2">판매자 직접배송</option>
                        </select>
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-lg font-bold">결제완료 목록</h2>
                    <div className="border-t border-b border-gray-300 py-2">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="size-4 rounded border-gray-400 text-blue-600" />
                            <button type="button" className="rounded border border-gray-300 bg-gray-200 px-2 py-1 text-gray-400">
                                발주확인처리
                            </button>
                            <button type="button" className="rounded border border-gray-300 px-2 py-1 text-gray-400">
                                배송지연
                            </button>
                        </div>
                    </div>

                    <div className="flex h-80 flex-col items-center justify-center gap-2 text-gray-900">
                        <span className="text-3xl">ⓘ</span>
                        <p>검색 결과가 없습니다.</p>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
