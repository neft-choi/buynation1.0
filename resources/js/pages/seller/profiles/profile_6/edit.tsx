import { ChevronDown } from 'lucide-react';

//주소록 배송정보 관리 - 수정
export default function edit() {
    return (
        <div className="flex flex-col justify-center gap-4 p-4 text-gray-900">
            <section className="space-y-2 py-4">
                <p className="font-bold">
                    주소지 유형 <span className="text-red-500">*</span>
                </p>
                <p className="font-bold">출고지</p>
            </section>

            <section className="space-y-2 py-4">
                <p className="font-bold">
                    주소지명 <span className="text-red-500">*</span>
                </p>
                <input type="text" className="w-full rounded border border-gray-300 px-2 py-2" />
            </section>

            <section className="space-y-2 py-4">
                <p className="font-bold">
                    국가 구분 <span className="text-red-500">*</span>
                </p>
                <label className="flex items-center gap-2">
                    <input type="radio" name="country" className="size-4" defaultChecked />
                    국내
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="country" className="size-4" />
                    해외
                </label>
            </section>

            <section className="space-y-2 py-4">
                <p className="font-bold">
                    우편번호 <span className="text-red-500">*</span>
                </p>
                <input type="text" className="w-full rounded border border-gray-300 px-2 py-2" />
                <button type="button" className="w-full rounded border border-blue-600 px-4 py-2 font-bold text-blue-600">
                    우편번호 검색
                </button>
            </section>

            <section className="space-y-2 py-4">
                <p className="font-bold">
                    우편번호 검색 <span className="text-red-500">*</span>
                </p>
                <input type="text" className="w-full rounded border border-gray-300 px-2 py-2" />
                <input type="text" className="w-full rounded border border-gray-300 px-2 py-2" />
            </section>

            <section className="space-y-2 py-4">
                <p className="font-bold">
                    전화번호 <span className="text-red-500">*</span>
                </p>
                <input
                    type="text"
                    placeholder="'-'를 포함해 입력해주세요"
                    className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400"
                />
            </section>

            <section className="space-y-2 py-4">
                <p className="font-bold">추가전화번호</p>
                <input
                    type="text"
                    placeholder="'-'를 포함해 입력해주세요"
                    className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400"
                />
            </section>

            <section className="space-y-2 py-4 bg-gray-50">
                <div>
                    <p className="font-bold">
                        택배사 <span className="text-red-500">*</span>
                    </p>
                    <div className="relative">
                        <select className="w-full appearance-none rounded border border-gray-300 px-2 py-2 bg-white">
                            <option value="hanjin">한진택배</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-600">택배사 계약이 없다면 우체국 또는 편의점(CVS택배)를 선택해주세요.</p>
                </div>

                <div>
                    <p className="font-bold">
                        제주 지역(원) <span className="text-red-500">*</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <input type="text" className="w-full rounded border border-gray-300 px-2 py-2 bg-white" />
                        <span>원</span>
                    </div>
                </div>

                <div>
                    <p className="font-bold">
                        제주 외 지역(원) <span className="text-red-500">*</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <input type="text" className="w-full rounded border border-gray-300 px-2 py-2 bg-white" />
                        <span>원</span>
                    </div>
                    <button type="button" className="rounded border border-gray-300 px-4 py-1 mt-2 bg-white">
                        삭제
                    </button>
                </div>
            </section>

            <section className="space-y-2 py-4">
                <button type="button" className="w-full rounded border border-gray-300 px-4 py-2 font-bold">
                    + 목록추가
                </button>
            </section>

            <section className="space-y-2 py-4">
                <div className="space-y-2 rounded border-l-6 border-r-6 border-blue-600 bg-blue-50 p-4 text-blue-700">
                    <div className="flex items-center gap-2 font-bold text-gray-900">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">i</span>
                        아직 택배계약이 없다면?
                    </div>
                    <p className="text-blue-700 underline">쿠팡 마켓플레이스 X 한진 원클릭 서비스 알아보기</p>
                </div>
            </section>

            <section className="space-y-2 py-4">
                <div className="space-y-2 rounded border border-gray-300 p-4 bg-gray-50">
                    <p className="font-bold">확인해주세요!</p>
                    <p>· 무료배송/조건무료배송인 경우에도 도서산간추가배송비는 별도 결제됩니다.</p>
                    <p>· 착불배송(가구, 업체직배송 등)의 경우 도서산간추가배송비가 적용되지 않습니다.</p>
                    <p>· 출고지에 도서산간추가배송비를 등록한 경우 반품 시에 자동 적용됩니다.(단, 고객/쿠팡 배송비 부담 시)</p>
                </div>
            </section>
        </div>
    );
}
