import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '판매자정보', href: '/seller/profiles' },
    { title: '판매자정보', href: '/seller/profiles/profile_1' },
];

//정보 변경하기
export default function edit() {
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
                    <p className="text-lg font-bold text-gray-700">인증 완료</p>
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
                    <select className="[field-sizing:content] w-auto rounded-md border border-gray-300 p-2 text-gray-900">
                        <option value="">종류</option>
                    </select>
                    <input
                        type="text"
                        placeholder="대표연락처 입력"
                        className="w-full rounded border border-gray-300 p-2 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">대표핸드폰번호</p>
                    <select className="[field-sizing:content] w-auto rounded-md border border-gray-300 p-2 text-gray-900">
                        <option value="">종류</option>
                    </select>
                    <input
                        type="text"
                        placeholder="대표핸드폰번호 입력"
                        className="w-full rounded border border-gray-300 p-2 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                </section>

                <section className="space-y-2 py-4">
                    <p className="text-gray-900">대표이메일주소</p>
                    <input
                        type="text"
                        placeholder="대표이메일주소 입력"
                        className="w-full rounded border border-gray-300 p-2 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                </section>

                <section className="space-y-2 py-4">
                    <button className='flex w-full justify-center py-2 rounded text-white border border-blue-400 bg-blue-500 hover:bg-blue-500/90 cursor-pointer'>저장하기</button>
                    <a
                        href="/seller/profiles/profile_1"
                        className="flex items-center justify-center rounded border border-gray-300 px-4 py-2 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                        취소
                    </a>
                </section>
            </div>
        </AppLayout>
    );
}
