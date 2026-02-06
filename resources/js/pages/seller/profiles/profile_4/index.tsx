import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '판매자정보', href: '/seller/profiles' },
    { title: '비밀번호 변경', href: '/seller/profiles/profile_4' },
];

//비밀번호변경
export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4 text-gray-900">
                <h1 className="text-2xl font-bold">계정 정보</h1>

                <section className="space-y-2 py-4">
                    <h2 className="text-2xl font-bold">비밀번호 변경</h2>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">기존 비밀번호</p>
                    <input type="password" className="w-full rounded border border-gray-300 px-4 py-2" />
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">새 비밀번호</p>
                    <input type="password" className="w-full rounded border border-gray-300 px-4 py-2" />
                    <p className="text-gray-500">8자~15자의 영문, 숫자, 특수문자를 모두 혼합하여 입력해주세요.</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">새 비밀번호 확인</p>
                    <input type="password" className="w-full rounded border border-gray-300 px-4 py-2" />
                </section>

                <section className="space-y-2 py-4">
                    <button type="button" className="w-full rounded bg-blue-600 px-4 py-2 font-bold text-white">
                        저장하기
                    </button>
                    <a href="/seller/profiles/profile_4" className="flex items-center justify-center rounded border border-gray-300 px-4 py-2 font-bold">
                        취소
                    </a>
                </section>
            </div>
        </AppLayout>
    );
}
