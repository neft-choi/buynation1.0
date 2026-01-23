import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { AdminCardHeader } from './AdminCardHeader';

interface ConditionItem {
    label: string;
    current: number;
    target: number;
}

export interface PremiumSellersProps {
    statusMessage?: string;
    conditions?: ConditionItem[];
}

const DEFAULT_CONDITIONS: ConditionItem[] = [
    { label: '3개월 누적 매출', current: 0, target: 200000000 },
    { label: '아이템위너', current: 0, target: 70 },
    { label: '평균 판매자 점수', current: 3, target: 3 },
];

export function PremiumSellers({ statusMessage = '판매자님은 지난 달 일반판매자입니다.', conditions = DEFAULT_CONDITIONS }: PremiumSellersProps) {
    return (
        <Card>
            <AdminCardHeader title="우수판매자" showChevron={true} rightContent={statusMessage} />
            <CardContent>
                <div className="space-y-1 py-4">
                    {conditions.map((condition, index) => {
                        const isAchieved = condition.current >= condition.target;

                        return (
                            <div key={index} className="grid grid-cols-3">
                                <span>{condition.label}</span>
                                <span className="text-sm font-medium text-gray-900">
                                    {condition.current.toLocaleString()} / {condition.target.toLocaleString()}
                                </span>
                                <div className="flex gap-1">
                                    <CheckCircle2
                                        className={`size-5 transition-colors ${isAchieved ? 'fill-red-500 text-white' : 'fill-gray-300 text-white'}`}
                                    />
                                    <span>조건 달성</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}
