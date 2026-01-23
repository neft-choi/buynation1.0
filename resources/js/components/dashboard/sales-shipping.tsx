import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { AdminCardHeader } from './AdminCardHeader';

export function SalesShipping() {
    const stats = [
        { value: 0, label: '결제완료' },
        { value: 0, label: '상품준비' },
        { value: 0, label: '배송지시' },
        { value: 0, label: '배송중' },
    ];

    return (
        <Card>
            <AdminCardHeader title="판매/배송" showChevron={true} subtitle="최근 14일 기준" rightContent="최근 12:34" onRightButtonClick={() => {}} />
            <CardContent>
                <div className="mb-8 grid grid-cols-7 items-end">
                    {stats.map((stat, idx) => (
                        <>
                            {/* 요소 */}
                            <div key={`stat-${idx}`} className="col-span-1 text-center">
                                <div className="mb-2 text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs text-gray-600">{stat.label}</div>
                            </div>

                            {/* 화살표 */}
                            {idx < stats.length - 1 && (
                                <div key={`arrow-${idx}`} className="col-span-1 flex justify-center">
                                    <ChevronRight className="size-5 text-gray-300" />
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
