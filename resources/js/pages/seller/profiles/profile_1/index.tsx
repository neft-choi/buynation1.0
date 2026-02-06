import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '판매자정보', href: '/seller/profiles' },
    { title: '판매자 정보', href: '/seller/profiles/profile_1' },
];

//판매자정보
export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4">
                <h1 className="text-2xl font-bold text-gray-900">판매자 정보</h1>

                <section className="space-y-2 py-4">
                    <div className="rounded bg-gray-100 p-4 text-gray-900">
                        <p>대표 연락처는 판매자님의 상품 상세 페이지에 노출되는 정보입니다.</p>
                        <p>입력하신 번호가 실제로 연락 가능한 판매자님의 연락처인지 다시 한 번 확인해 주시기 바랍니다.</p>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">고객확인제도 이행 ⓘ</p>
                    <p className="text-gray-700">[고객확인제도 이행 내용]</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">사업자번호</p>
                    <p className="text-gray-700">[사업자번호]</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">상호</p>
                    <p className="text-gray-700">[상호]</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">업태/업종</p>
                    <p className="text-gray-700">[업태/업종]</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">우대수수료 구간</p>
                    <p className="text-gray-700">[우대수수료 구간]</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">사업장 주소</p>
                    <p className="text-gray-700">[사업장 주소]</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">대표연락처</p>
                    <p className="text-gray-700">[대표연락처]</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">대표핸드폰번호</p>
                    <p className="text-gray-700">[대표핸드폰번호]</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">대표이메일주소</p>
                    <p className="text-gray-700">[대표이메일주소]</p>
                </section>

                <section className="space-y-2 py-4">
                    <a
                        href="/seller/profiles/profile_1/edit"
                        className="flex items-center justify-center rounded border border-gray-300 px-4 py-2 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                        정보 변경하기
                    </a>
                </section>
            </div>
        </AppLayout>
    );
}
