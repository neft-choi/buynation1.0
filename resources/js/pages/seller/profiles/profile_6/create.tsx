//새 주소지 등록
export default function create() {
    return (
        <div className="flex flex-col justify-center gap-4 p-4 text-gray-900">
            <section className="space-y-2 py-4">
                <div className="flex gap-6 border-b border-gray-200">
                    <button type="button" className="border-b-2 border-blue-600 pb-2 font-bold text-blue-600">
                        출고지
                    </button>
                    <button type="button" className="pb-2 font-bold text-gray-500">
                        반품지
                    </button>
                </div>
            </section>

            <section className="space-y-2 py-4">
                <p className="font-bold">
                    주소지명 <span className="text-red-500">*</span>
                </p>
                <input
                    type="text"
                    placeholder="주소지명을 입력해주세요."
                    className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400"
                />
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
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="size-4" defaultChecked />
                    <span className="font-bold">대표주소와 동일</span>
                </label>
            </section>

            <section className="space-y-2 py-4">
                <p className="font-bold">
                    우편번호 <span className="text-red-500">*</span>
                </p>
                <input
                    type="text"
                    placeholder="우편번호를 입력해주세요."
                    className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400"
                />
            </section>

            <section className="space-y-2 py-4">
                <p className="font-bold">
                    우편번호 검색 <span className="text-red-500">*</span>
                </p>
                <input type="text" placeholder="" className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400" />
                <input type="text" placeholder="" className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400" />
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

            <section className="space-y-2 py-4">
                <p className="font-bold">
                    제주/도서산간 배송여부 <span className="text-red-500">*</span>
                </p>
                <label className="flex items-center gap-2">
                    <input type="radio" name="island" className="size-4" />
                    가능
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="island" className="size-4" defaultChecked />
                    불가능
                </label>
            </section>

            <section className="space-y-2 py-4">
                <div className="space-y-2 rounded border-r-6 border-l-6 border-blue-600 bg-blue-50 p-4 text-blue-700">
                    <div className="flex items-center gap-2 font-bold text-gray-900">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">i</span>
                        아직 택배계약이 없다면?
                    </div>
                    <p className="text-blue-700 underline">쿠팡 마켓플레이스 X 한진 원클릭 서비스 알아보기</p>
                </div>
            </section>
        </div>
    );
}
