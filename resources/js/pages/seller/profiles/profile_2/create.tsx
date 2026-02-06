import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { ChevronDown } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '판매자정보', href: '/seller/profiles' },
    { title: '계정 정보', href: '/seller/profiles/profile_2' },
];

//계정추가
export default function create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4 text-gray-900">
                <h1 className="text-2xl font-bold">계정정보</h1>

                <section className="space-y-2 py-4">
                    <h2 className="font-bold">계정 추가</h2>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">ID</p>
                    <input type="text" placeholder="아이디" className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400" />
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">담당자 이름</p>
                    <input type="text" placeholder="담당자 이름" className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400" />
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">비밀번호</p>
                    <input type="password" placeholder="비밀번호" className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400" />
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">비밀번호 확인</p>
                    <input type="password" placeholder="비밀번호 확인" className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400" />
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">전화번호</p>
                    <div className="relative w-56">
                        <select className="w-full appearance-none rounded border border-gray-300 px-2 py-2">
                            <option value="kr82">대한민국+82</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-gray-500" />
                    </div>
                    <input type="text" placeholder="'-' 포함 입력" className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400" />
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">휴대전화번호</p>
                    <div className="relative w-56">
                        <select className="w-full appearance-none rounded border border-gray-300 px-2 py-2">
                            <option value="kr82">대한민국+82</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-gray-500" />
                    </div>
                    <input type="text" placeholder="'-' 포함 입력" className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400" />
                    <button type="button" className="w-full rounded border border-blue-600 px-4 py-2 font-bold text-blue-600">
                        인증하기
                    </button>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">이메일</p>
                    <input type="text" placeholder="이메일" className="w-full rounded border border-gray-300 px-2 py-2 placeholder:text-gray-400" />
                    <button type="button" className="w-full rounded border border-blue-600 px-4 py-2 font-bold text-blue-600">
                        인증하기
                    </button>
                </section>

                <section className="space-y-2 py-4">
                    <div className="space-y-4 rounded border border-gray-300 p-4">
                        <p className="font-bold">개인정보 취급 관련 주의사항</p>
                        <p>
                            계정 생성에 사용되는 개인정보는 개인정보 주체 본인의 적법한 동의 하에 수집되어야 하며, 불법적으로 수집된 개인정보를 이용하는
                            경우 쿠팡은 민형사상의 책임을 지지 않습니다.
                        </p>
                        <label className="flex items-center gap-2 bg-blue-50 p-4">
                            <input type="checkbox" className="size-4" />
                            <span className="font-bold">본인은 위 개인정보 취급 관련 주의사항을 이해하고 준수하였습니다.</span>
                        </label>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <button type="button" className="w-full rounded bg-gray-300 px-4 py-2 font-bold text-gray-400">
                        추가하기
                    </button>
                    <a href="/seller/profiles/profile_2" className="flex items-center justify-center rounded border border-gray-300 px-4 py-2 font-bold">
                        취소
                    </a>
                </section>
            </div>
        </AppLayout>
    );
}
