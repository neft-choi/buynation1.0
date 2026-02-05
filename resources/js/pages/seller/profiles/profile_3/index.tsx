import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Info } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '판매자정보', href: '/seller/profiles' },
    { title: '담당자 관리', href: '/seller/profiles/profile_3' },
];

//담당자관리
export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4 text-gray-900">
                <h1 className="text-2xl font-bold">담당자관리</h1>

                <section className="space-y-2 py-4">
                    <div className="space-y-2 rounded bg-gray-100 p-4">
                        <div className="flex items-center gap-2">
                            <Info className="size-6" />
                            <p className="font-bold">정산 담당자를 반드시 지정해주세요.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Info className="size-6" />
                            <p>담당자 정보가 변경되었을 경우 정보를 업데이트 해주세요.</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <a
                        href="/seller/profiles/profile_3/create"
                        className="inline-flex rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-600/90"
                    >
                        담당자 추가하기
                    </a>
                </section>

                <section className="space-y-2 border-t border-gray-200 py-4 text-gray-600">
                    <div className="grid grid-cols-2">
                        <p>업무</p>
                        <p className="text-gray-900">출고</p>
                    </div>
                    <p>담당자 이름</p>
                    <p>비고(직급, 직책 등)</p>
                    <p>전화번호</p>
                    <p>휴대전화번호</p>
                    <p>이메일</p>
                    <p>대표여부</p>
                    <p>사용여부</p>
                    <div className="flex gap-2 pt-2">
                        <a
                            href="/seller/profiles/profile_3/edit"
                            className="inline-flex rounded border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
                        >
                            수정
                        </a>
                        <button type="button" className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-50">
                            삭제
                        </button>
                    </div>
                </section>

                <section className="space-y-2 border-t border-gray-200 py-4 text-gray-600">
                    <div className="grid grid-cols-2">
                        <p>업무</p>
                        <p className="text-gray-900">정산</p>
                    </div>
                    <p>담당자 이름</p>
                    <p>비고(직급, 직책 등)</p>
                    <p>전화번호</p>
                    <p>휴대전화번호</p>
                    <p>이메일</p>
                    <p>대표여부</p>
                    <p>사용여부</p>
                    <div className="flex gap-2 pt-2">
                        <a
                            href="/seller/profiles/profile_3/edit"
                            className="inline-flex rounded border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
                        >
                            수정
                        </a>
                        <button type="button" className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-50">
                            삭제
                        </button>
                    </div>
                </section>

                <section className="space-y-2 border-t border-b border-gray-200 py-4 text-gray-600">
                    <div className="grid grid-cols-2">
                        <p>업무</p>
                        <p className="text-gray-900">영업</p>
                    </div>
                    <p>담당자 이름</p>
                    <p>비고(직급, 직책 등)</p>
                    <p>전화번호</p>
                    <p>휴대전화번호</p>
                    <p>이메일</p>
                    <p>대표여부</p>
                    <p>사용여부</p>
                    <div className="flex gap-2 pt-2">
                        <a
                            href="/seller/profiles/profile_3/edit"
                            className="inline-flex rounded border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
                        >
                            수정
                        </a>
                        <button type="button" className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-50">
                            삭제
                        </button>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
