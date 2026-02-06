import { AdminModal } from '@/components/dashboard/admin-modal';
import { Button } from '@/components/ui/button';

export function Index() {
    return (
        <AdminModal
            trigger={<Button>모달 열기</Button>}
            title="판매 정책 변경"
            description="변경 사항은 즉시 적용됩니다."
            footer={<Button>확인</Button>}
        >
            <div className="text-sm text-muted-foreground">내용 영역</div>
        </AdminModal>
    );
}
