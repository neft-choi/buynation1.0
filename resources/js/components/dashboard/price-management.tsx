import { ShopIcon } from '@/components/shop/shop-icon';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

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
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold">가격관리</h3>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <Info className="size-3.5" />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>자동 가격 조정 설정 관련 정보</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <span className="text-xs text-gray-500">{'>'}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">최근 12:34</span>
                        <button className="text-gray-400 hover:text-gray-600">
                            <ShopIcon name="초기화" className="size-4" />
                        </button>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                {listItems.map((item) => (
                    <Label key={item.label} className="flex cursor-pointer items-center justify-between gap-2 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-700">{item.label}</span>

                            {item.hasTooltip && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button className="text-gray-300 hover:text-gray-500">
                                                <Info className="size-3.5" />
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
                            <span className="font-semibold text-lg text-gray-900">{item.value} 개</span>
                            <ShopIcon name="Arrow-Right" className="size-4 text-gray-400" />
                        </div>
                    </Label>
                ))}
            </CardContent>
        </Card>
    );
}
