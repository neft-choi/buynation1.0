import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '고객관리', href: '/seller/customers' },
    { title: '고객센터 문의', href: '/seller/customers/customer_2' },
];

// 고객센터 문의
export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4">
                <div className="flex items-baseline gap-2">
                    <h1 className="pl-2 text-2xl font-bold text-gray-900">고객센터 문의</h1>
                    <button type="button" className="text-blue-600">
                        자세히 알아보기
                    </button>
                </div>

                <section className="space-y-2 py-4">
                    <button
                        type="button"
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2"
                    >
                        <span className="text-gray-500">⌕</span>
                        <span className="font-semibold text-gray-900">검색열기</span>
                    </button>

                    <div className="flex gap-2 overflow-x-auto">
                        <div className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 whitespace-nowrap text-gray-400">
                            <span>기간: 지난 30일</span>
                            <button className="cursor-pointer">✕</button>
                        </div>

                        <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 whitespace-nowrap text-gray-900">
                            <span>처리상태: 미답변/미확인</span>
                            <button className="cursor-pointer text-gray-500">✕</button>
                        </div>
                    </div>
                </section>

                <section className="space-y-2 py-4">
                    <p className="font-bold text-gray-900">총 0건</p>
                </section>
            </div>
        </AppLayout>
    );
}
