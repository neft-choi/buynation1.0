import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '판매자정보', href: '/seller/profiles' },
    { title: '추가 판매 정보', href: '/seller/profiles/profile_5' },
];

//정산유형
export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4 text-gray-900">
                <h1 className="text-2xl font-bold">추가 판매 정보</h1>

                <section className="space-y-2 py-4">
                    <div className="rounded bg-gray-100 p-4">
                        <p>- 휴가시즌 판매자와 고객 간의 원활한 커뮤니케이션을 위해, 귀사의 휴무 일정을 공유 부탁합니다.</p>
                        <p>- 정보 수정 후 "저장" 버튼을 꼭 눌러주세요.</p>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <h2 className="text-xl font-bold">정산 유형</h2>

                    <p className="text-gray-700">정산 유형을 변경하시면 다음달 1일부터 반영됩니다.</p>
                    <div className="space-y-2 py-4">
                        <p className="font-bold">적용중인 정산 유형</p>
                        <p>주정산</p>
                    </div>
                    <a
                        href="/seller/profiles/profile_5/edit"
                        className="flex justify-center rounded border border-gray-300 px-4 py-2 font-bold hover:bg-gray-50"
                    >
                        정산 유형 변경하기
                    </a>
                </section>

                <section className="space-y-2 py-4">
                    <h2 className="text-2xl font-bold">계좌 정보</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <p className="font-semibold">업체명 :</p>
                        <p className="font-semibold">대표자명 :</p>
                    </div>

                    <p className="pt-2 font-bold">현재 계좌</p>
                    <div className="border-t border-gray-300">
                        <div className="grid grid-cols-[160px_1fr] border-b border-gray-300">
                            <div className="bg-gray-100 px-4 py-4 font-semibold text-gray-500">예금주명</div>
                            <div className="px-4 py-4"></div>
                        </div>
                        <div className="grid grid-cols-[160px_1fr] border-b border-gray-300">
                            <div className="bg-gray-100 px-4 py-4 font-semibold text-gray-500">은행명</div>
                            <div className="px-4 py-4"></div>
                        </div>
                        <div className="grid grid-cols-[160px_1fr] border-b border-gray-300">
                            <div className="bg-gray-100 px-4 py-4 font-semibold text-gray-500">계좌번호</div>
                            <div className="px-4 py-4"></div>
                        </div>
                        <div className="grid grid-cols-[160px_1fr] border-b border-gray-300">
                            <div className="bg-gray-100 px-4 py-4 font-semibold text-gray-500">상태</div>
                            <div className="px-4 py-4">
                                <span className="rounded bg-green-100 px-2 py-1 text-green-800">정상 이용중</span>
                            </div>
                        </div>
                    </div>

                    <p>계좌 변경은 PC에서 하실 수 있습니다.</p>
                </section>

                <button type="button" className="w-full rounded border border-gray-300 px-4 py-2 font-bold hover:bg-gray-50">
                    이력 조회
                </button>

                <section className="space-y-2 py-4">
                    <h2 className="text-xl font-bold">해외상품 배송</h2>
                    <p className="font-semibold">해외 상품 배송 여부(구매대행 등)</p>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="overseas" className="size-4" />유
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="overseas" className="size-4" defaultChecked />무
                    </label>
                </section>

                <section className="space-y-2 py-4">
                    <h2 className="text-2xl font-bold">근무 정보</h2>

                    <div className="space-y-2 py-4">
                        <p className="font-semibold">운영 시간</p>
                        <div className="flex items-center gap-2">
                            <input type="text" className="w-12 rounded border border-gray-300 px-2 py-2" />
                            <span>시</span>
                            <input type="text" className="w-12 rounded border border-gray-300 px-2 py-2" />
                            <span>분 ~</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="text" className="w-12 rounded border border-gray-300 px-2 py-2" />
                            <span>시</span>
                            <input type="text" className="w-12 rounded border border-gray-300 px-2 py-2" />
                            <span>분</span>
                        </div>
                    </div>

                    <div className="space-y-2 py-4">
                        <p className="font-semibold">택배 마감 시간</p>
                        <div className="flex items-center gap-2">
                            <input type="text" className="w-32 rounded border border-gray-300 px-2 py-2" />
                            <span>시~</span>
                            <input type="text" className="w-32 rounded border border-gray-300 px-2 py-2" />
                            <span>시</span>
                        </div>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <button type="button" className="w-full rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-600/90">
                        저장하기
                    </button>
                </section>

                <section className="space-y-2 py-4">
                    <h2 className="text-xl font-bold">OPEN API 키 발급</h2>
                    <button type="button" className="w-full rounded border border-gray-300 px-4 py-2 font-bold hover:bg-gray-50">
                        발급
                    </button>
                </section>
            </div>
        </AppLayout>
    );
}
