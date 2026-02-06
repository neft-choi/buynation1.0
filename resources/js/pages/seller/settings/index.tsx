import { AdminModal } from '@/components/dashboard/admin-modal';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';

//설정 일단 목록만
export default function Index() {
    return (
        <AppLayout>
            <div className="flex flex-col justify-center gap-4 p-4 text-gray-900">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <h1 className="text-2xl font-bold">설정</h1>
                    <button type="button" className="text-2xl text-gray-500">
                        ×
                    </button>
                </div>

                <section className="space-y-2 py-4">
                    <div className="flex items-center justify-between border-b border-gray-200 py-4">
                        <p className="font-bold">푸시알림 설정</p>
                        <span className="text-2xl text-gray-400">›</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 py-4">
                        <p className="font-bold">언어 설정</p>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600">한국어</span>
                            <span className="text-2xl text-gray-400">›</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 py-4">
                        <p className="font-bold">도움말</p>
                        <span className="text-2xl text-gray-400">›</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 py-4">
                        <p className="font-bold">개인정보처리방침</p>
                        <span className="text-2xl text-gray-400">›</span>
                    </div>

                    <AdminModal
                        trigger={
                            <div className="flex items-center justify-between border-b border-gray-200 py-4">
                                <p className="font-bold">앱 정보</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-600">2.3.3</span>
                                    <span className="text-2xl text-gray-400">›</span>
                                </div>
                            </div>
                        }
                        title="앱 정보"
                        footer={<Button className="w-full bg-blue-600 text-white">확인</Button>}
                    >
                        <div className="flex h-20 items-center justify-center">앱 정보</div>
                    </AdminModal>

                    <div className="flex items-center justify-between py-4">
                        <p className="font-bold">로그아웃</p>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
