import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info, ChevronRight } from 'lucide-react';
import { AdminCardHeader } from './AdminCardHeader';

interface PriceItem {
    label: string;
    value: number;
    hasTooltip: boolean;
    tooltipText?: string;
}

export function PriceManagement() {
    const listItems: PriceItem[] = [
        {
            label: '현재 아이템위너가 아닌 상품',
            value: 0,
            hasTooltip: false,
        },
        {
            label: '현재 자동가격조정 상품수',
            value: 0,
            hasTooltip: false,
        },
        {
            label: '최근 7일 자동조정 매출',
            value: 0,
            hasTooltip: true,
            tooltipText: '자동 가격 조정으로 발생한 매출',
        },
        {
            label: '최근 7일 자동조정 판매수',
            value: 0,
            hasTooltip: true,
            tooltipText: '자동 가격 조정으로 발생한 판매수',
        },
    ];

    return (
        <Card>
            <AdminCardHeader
                title="가격관리"
                showTooltip={true}
                tooltipContent="자동 가격 조정 설정 관련 정보"
                showChevron={true}
                rightContent="최근 12:34"
                onRightButtonClick={() => {}}
            />
            <CardContent>
                {listItems.map((item) => (
                    <Label key={item.label} className="flex cursor-pointer items-baseline justify-between gap-2 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-700">{item.label}</span>

                            {item.hasTooltip && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button className="text-gray-300 hover:text-gray-500">
                                                <Info className="size-4" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent side="top">
                                            <p>{item.tooltipText}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="text-xl font-bold text-gray-900">{item.value} 개</span>
                            <ChevronRight className="size-4 text-gray-400" />
                        </div>
                    </Label>
                ))}
            </CardContent>
        </Card>
    );
}
