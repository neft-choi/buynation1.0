import { AdminSheet } from '@/components/dashboard/admin-sheet';
import AppLayout from '@/layouts/app-layout';
import Profile6_Create from '@/pages/seller/profiles/profile_6/create';
import Profile6_Edit from '@/pages/seller/profiles/profile_6/edit';
import type { BreadcrumbItem } from '@/types';
import { ChevronDown } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '판매자정보', href: '/seller/profiles' },
    { title: '주소록/배송정보 관리', href: '/seller/profiles/profile_6' },
];

//주소록/배송정보 관리
export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4 text-gray-900">
                <h1 className="text-2xl font-bold">주소록/배송정보 관리</h1>

                <section className="space-y-2 py-4">
                    <button type="button" className="flex w-full items-center justify-between rounded bg-gray-100 px-4 py-2">
                        <span className="font-bold">안내사항</span>
                        <ChevronDown className="size-4 text-gray-500" />
                    </button>
                </section>

                <section className="space-y-2 py-4">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">주소록 목록(총 3개)</p>
                        <div className="relative w-20">
                            <select className="w-full appearance-none rounded border border-gray-300 px-2 py-2">
                                <option value="all">전체</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <AdminSheet
                        title="새 주소지 등록"
                        trigger={
                            <button
                                type="button"
                                className="w-full cursor-pointer rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-600/90"
                            >
                                + 새 주소록 등록
                            </button>
                        }
                        side="right"
                        size="md"
                        footer={
                            <div className="grid grid-cols-2 gap-2">
                                <button type="button" className="rounded border border-gray-300 px-4 py-2 font-bold">
                                    취소
                                </button>
                                <button type="button" className="rounded bg-blue-600 px-4 py-2 font-bold text-white">
                                    등록
                                </button>
                            </div>
                        }
                    >
                        <Profile6_Create />
                    </AdminSheet>
                </section>

                <section className="space-y-2 border-t border-gray-200 py-4">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">품고 파주센터</p>
                        <ChevronDown className="size-5" />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                        <div className="grid grid-cols-2">
                            <p>구분</p>
                            <p className="text-gray-900">출고지</p>
                        </div>
                        <p>주소</p>
                        <p>전화번호</p>
                        <p>사용상태</p>
                        <p>택배사</p>
                    </div>
                    <AdminSheet
                        title="주소지 수정"
                        trigger={
                            <button type="button" className="rounded border border-gray-300 px-4 py-1 text-sm">
                                수정
                            </button>
                        }
                        side="right"
                        size="md"
                        footer={
                            <>
                                <button type="button" className="w-full rounded border border-gray-300 px-4 py-2 font-bold">
                                    이 주소지 사용안함
                                </button>
                                <button type="button" className="w-full rounded border border-gray-300 px-4 py-2 font-bold">
                                    취소
                                </button>
                                <button type="button" className="w-full rounded bg-blue-600 px-4 py-2 font-bold text-white">
                                    수정완료
                                </button>
                            </>
                        }
                    >
                        <Profile6_Edit />
                    </AdminSheet>
                </section>

                <section className="space-y-2 border-t border-gray-200 py-4">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">주식회사</p>
                        <ChevronDown className="size-5" />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                        <div className="grid grid-cols-2">
                            <p>구분</p>
                            <p className="text-gray-900">반품지</p>
                        </div>
                        <p>주소</p>
                        <p>전화번호</p>
                        <p>사용상태</p>
                        <p>택배사</p>
                    </div>
                    <button type="button" className="rounded border border-gray-300 px-4 py-1 text-sm">
                        수정
                    </button>
                </section>

                <section className="space-y-2 border-t border-b border-gray-200 py-4">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">주식회사</p>
                        <ChevronDown className="size-5" />
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                        <div className="grid grid-cols-2">
                            <p>구분</p>
                            <p className="text-gray-900">출고지</p>
                        </div>
                        <p>주소</p>
                        <p>전화번호</p>
                        <p>사용상태</p>
                        <p>택배사</p>
                    </div>
                    <button type="button" className="rounded border border-gray-300 px-4 py-1 text-sm">
                        수정
                    </button>
                </section>
            </div>
        </AppLayout>
    );
}
