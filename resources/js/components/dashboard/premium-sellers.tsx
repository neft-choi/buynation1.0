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
    // 현재 값 단위 표시
    const formatCurrent = (label: string, current: number) => {
        if (label.includes('아이템위너')) {
            return `${current}%`;
        }
        return current.toLocaleString();
    };

    // 목표 값 단위 표시
    const formatTarget = (label: string, target: number) => {
        if (label.includes('매출')) {
            return target >= 100000000 ? `${(target / 100000000).toFixed(0)}억` : target.toLocaleString();
        }
        if (label.includes('아이템위너')) {
            return `${target}% 이상`;
        }
        if (label.includes('판매자 점수')) {
            return `${target}항목`;
        }
        return target.toLocaleString();
    };

    return (
        <Card>
            <AdminCardHeader title="우수판매자" showChevron={true} rightContent={statusMessage} />
            <CardContent>
                <div className="space-y-1 py-4">
                    {conditions.map((condition, index) => {
                        const isAchieved = condition.current >= condition.target;

                        return (
                            <div key={index} className="grid grid-cols-3 items-center justify-items-center">
                                <span>{condition.label}</span>
                                <span className="text-sm font-medium text-gray-900">
                                    {formatCurrent(condition.label, condition.current)} / {formatTarget(condition.label, condition.target)}
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
