import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { ChevronDown } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [{ title: '정산 현황', href: '/seller/payments' }];

// 정산 현황
export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4">
                <div className="flex items-baseline gap-2">
                    <h1 className="text-2xl font-bold text-gray-900">정산현황</h1>
                    <button type="button" className="text-sm font-medium text-blue-600">
                        도움말보기
                    </button>
                </div>

                <div className="rounded bg-gray-100 p-2 text-sm">
                    <span></span>
                </div>

                <section>
                    <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
                        <button type="button" className="flex items-center gap-2 rounded-full border border-blue-500 px-4 py-2 text-blue-600">
                            <span>⟳</span>
                            <span>초기화</span>
                        </button>

                        <label htmlFor="payment-period" className="flex shrink-0 items-center rounded-full border border-blue-500 px-4 py-2">
                            <span className="pr-2 text-gray-900">기간</span>
                            <div className="relative">
                                <select
                                    id="payment-period"
                                    className="w-auto appearance-none bg-transparent pr-6 text-blue-600 [field-sizing:content] focus:outline-none"
                                >
                                    <option value="today">오늘</option>
                                    <option value="1week">최근 1주</option>
                                    <option value="1month">최근 1달</option>
                                    <option value="this-month">이번달</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-5 -translate-y-1/2 text-blue-600" />
                            </div>
                        </label>

                        <label htmlFor="payment-status" className="flex shrink-0 items-center rounded-full border border-blue-500 px-4 py-2">
                            <span className="pr-2 text-gray-900">정산상태</span>
                            <div className="relative">
                                <select
                                    id="payment-status"
                                    className="w-auto appearance-none bg-transparent pr-6 text-blue-600 [field-sizing:content] focus:outline-none"
                                >
                                    <option value="all">전체</option>
                                    <option value="confirmed">정산확정</option>
                                    <option value="scheduled">정산예정</option>
                                    <option value="hold">정산보류</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-5 -translate-y-1/2 text-blue-600" />
                            </div>
                        </label>

                        <label htmlFor="payment-type" className="flex shrink-0 items-center rounded-full border border-blue-500 px-4 py-2">
                            <span className="pr-2 text-gray-900">정산유형</span>
                            <div className="relative">
                                <select
                                    id="payment-type"
                                    className="w-auto appearance-none bg-transparent pr-6 text-blue-600 [field-sizing:content] focus:outline-none"
                                >
                                    <option value="all">전체</option>
                                    <option value="weekly">주정산</option>
                                    <option value="final">최종액정산</option>
                                    <option value="extra">추가지급</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-5 -translate-y-1/2 text-blue-600" />
                            </div>
                        </label>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold text-gray-900">정산지급목록 (총 0건)</p>

                    <div className="flex h-30 items-center justify-center border-t border-b border-gray-200">
                        <p className="text-center text-gray-800">ⓘ 데이터가 존재하지 않습니다.</p>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
