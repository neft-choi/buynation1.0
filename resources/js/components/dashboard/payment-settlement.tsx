import { Card, CardContent } from '@/components/ui/card';
import { AdminCardHeader } from './AdminCardHeader';

export interface SettlementProps {
    amount?: number;
}

export function PaymentSettlement({ amount = 0 }: SettlementProps) {
    const isEmpty = amount === 0;

    return (
        <Card>
            <AdminCardHeader title="정산" showChevron={true} rightContent="최근 12:34" onRightButtonClick={() => {}} />
            <CardContent>
                <div className="flex flex-col items-end justify-center pt-12">
                    {/* 금액 표시 */}
                    <div className="text-3xl my-2 font-bold text-gray-900">
                        {amount.toLocaleString()}
                        <span className="ml-1 text-xl">원</span>
                    </div>

                    {/* 빈 상태 메세지 */}
                    {isEmpty && <p className="text-sm text-gray-600">지급 예정 금액이 없습니다</p>}
                </div>
            </CardContent>
        </Card>
    );
}
