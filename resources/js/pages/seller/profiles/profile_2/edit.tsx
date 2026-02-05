import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { ChevronDown, CircleCheck } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '판매자정보', href: '/seller/profiles' },
    { title: '계정 정보', href: '/seller/profiles/profile_2' },
];

//정보 변경하기
export default function edit() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4 text-gray-900">
                <h1 className="text-2xl font-bold">계정 정보</h1>

                <section className="space-y-2 py-4">
                    <div className="flex items-center gap-2 rounded bg-gray-100 p-4">
                        <span>ⓘ</span>
                        <p className="font-bold">계정정보가 변경되었을 경우 업데이트 해주세요.</p>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <p>ID</p>
                    <p>[ID]</p>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">이름</p>
                    <input type="text" className="w-full rounded border border-gray-300 px-4 py-2" />
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">비밀번호</p>
                    <a
                        href="/seller/profiles/profile_2/edit"
                        className="flex items-center justify-center rounded border border-gray-300 px-4 py-2 font-bold"
                    >
                        변경하기
                    </a>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">전화번호</p>
                    <div className="relative w-52">
                        <select className="w-full appearance-none rounded border border-gray-300 px-2 py-2">
                            <option value="kr82">대한민국+82</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-gray-500" />
                    </div>
                    <input type="text" className="w-full rounded border border-gray-300 px-4 py-2" />
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">휴대전화번호</p>
                    <div className="relative w-52">
                        <select className="w-full appearance-none rounded border border-gray-300 px-2 py-2">
                            <option value="kr82">대한민국+82</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-gray-500" />
                    </div>
                    <input type="text" className="w-full rounded border border-gray-300 px-4 py-2" />
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                        <CircleCheck className='fill-green-600 text-white size-4'/>
                        <span>인증완료</span>
                    </div>
                    <button type="button" className="w-full rounded border border-gray-300 px-4 py-2 font-semibold text-gray-500">
                        인증하기
                    </button>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold">이메일</p>
                    <input type="text" className="w-full rounded border border-gray-300 px-4 py-2" />
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                        <CircleCheck className='fill-green-600 text-white size-4'/>
                        <span>인증완료</span>
                    </div>
                    <button type="button" className="w-full rounded border border-gray-300 px-4 py-2 font-semibold text-gray-500">
                        인증하기
                    </button>
                </section>

                <section className="space-y-2 py-4">
                    <button type="button" className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white">
                        저장하기
                    </button>
                    <a
                        href="/seller/profiles/profile_2"
                        className="flex items-center justify-center rounded border border-gray-300 px-4 py-2 font-semibold"
                    >
                        취소
                    </a>
                </section>

                <section className="space-y-2 py-4">
                    <h2 className="text-2xl font-bold">광고성 정보 수신 동의</h2>

                    <div className="flex items-center justify-between gap-2 py-2">
                        <div className="flex items-baseline gap-2">
                            <span>·</span>
                            <p>광고 및 이벤트 목적의 개인정보 수집 및 이용 동의</p>
                            <a className="cursor-pointer text-sm text-blue-500 hover:underline">내용보기</a>
                        </div>
                        <label className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" defaultChecked={true} className="peer sr-only" />
                            <span className="h-6 w-10 rounded-full bg-gray-300 transition-colors peer-checked:bg-blue-500" />
                            <span className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-4" />
                        </label>
                    </div>

                    <div className="flex items-center justify-between gap-2 py-2">
                        <div className="flex items-baseline gap-2">
                            <span>·</span>
                            <p>판매자 무료 교육 및 특별 프로모션 혜택 (광고) 수신 동의</p>
                            <a className="cursor-pointer text-sm text-blue-500 hover:underline">내용보기</a>
                        </div>
                        <label className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" defaultChecked={true} className="peer sr-only" />
                            <span className="h-6 w-10 rounded-full bg-gray-300 transition-colors peer-checked:bg-blue-500" />
                            <span className="absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-4" />
                        </label>
                    </div>

                    <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <span>ⓘ</span>
                            <p>확인해주세요.</p>
                        </div>
                        <p>· 수신거부 시 판매에 도움이 되는 정보를 받아보실 수 없습니다.</p>
                        <p>· 동의 여부를 변경하시면 익일부터 반영되며 내 계정에만 적용됩니다.</p>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <h2 className="text-2xl font-bold">판매자 탈퇴 신청</h2>
                    <div className="flex flex-col items-start gap-2 border-t border-gray-300 py-2 text-sm text-gray-600">
                        <p>
                            입점 완료 후 계정을 삭제하면, 동일 사업자번호로 마켓플레이스 / 로켓배송에 재가입을 할 수 없습니다. (입점전 또는 입점진행
                            중 계정삭제 시 재가입 가능, 단 동일 ID로 재가입 불가)
                        </p>
                        <p>계정 정지만 필요하신 경우 판매자 콜센터(1600-9879)로 문의 부탁드립니다.</p>
                    </div>
                    <button type="button" className="rounded border border-gray-400 bg-gray-100 px-2 py-1 text-sm">
                        탈퇴 신청
                    </button>
                </section>
            </div>
        </AppLayout>
    );
}
