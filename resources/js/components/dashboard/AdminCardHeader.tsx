import { CardDescription, CardHeader } from '@/components/ui/card';
import { ChevronRight, CircleQuestionMark, RotateCw } from 'lucide-react';
import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export interface AdminCardHeaderProps {
    title: string;
    showTooltip?: boolean;
    showChevron?: boolean;
    subtitle?: string;
    tooltipContent?: string;
    rightContent?: ReactNode;
    onRightButtonClick?: () => void;
}

export function AdminCardHeader({
    title,
    showTooltip,
    showChevron,
    subtitle,
    tooltipContent="툴팁",
    rightContent,
    onRightButtonClick,
}: AdminCardHeaderProps) {
    return (
        <CardHeader>
            <div className="flex items-center justify-between">
                {/* 왼쪽: 타이틀 + 툴팁 + 화살표 */}
                <div className="flex items-center gap-1">
                    <h3 className="font-semibold">{title}</h3>
                    {/* 툴팁 */}
                    {showTooltip && tooltipContent && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <CircleQuestionMark className="ml-1 size-4 hover:cursor-pointer" />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    <p>{tooltipContent}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                    {showChevron && <ChevronRight className="size-4 text-gray-500" />}
                </div>

                {/* 오른쪽: 우측 컨텐츠 + 버튼 */}
                <div className="flex items-center gap-1">
                    {rightContent && <span className="text-xs text-gray-500">{rightContent}</span>}
                    {onRightButtonClick && (
                        <button onClick={onRightButtonClick} className="text-gray-400 hover:text-gray-600">
                            <RotateCw className="size-4 hover:cursor-pointer" />
                        </button>
                    )}
                </div>
            </div>

            {/* 서브 타이틀 */}
            {subtitle && <CardDescription className="text-xs text-gray-500">{subtitle}</CardDescription>}
        </CardHeader>
    );
}
