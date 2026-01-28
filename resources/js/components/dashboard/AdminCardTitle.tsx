import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface AdminCardTitleProps {
    title: string;
    required?: boolean;
    question?: string;
    help?: boolean;
    rightContent?: React.ReactNode;
    collapsible?: boolean;
    onCollapse?: (isCollapsed: boolean) => void;
    defaultCollapsed?: boolean;
    className?: string;
}

export function AdminCardTitle({
    title,
    required,
    question,
    help,
    rightContent,
    collapsible,
    onCollapse,
    defaultCollapsed = false,
    className = '',
}: AdminCardTitleProps) {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

    const handleCollapse = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        onCollapse?.(newState);
    };

    return (
        <div className={`flex items-center justify-between ${className}`}>
            {/* 왼쪽: 제목 + 옵셔널 표시들 */}
            <div className="flex items-center gap-2">
                {/* 제목 */}
                <span className="text-lg font-semibold text-[var(--color-admin-text)]">{title}</span>

                {/* 빨간 점 */}
                {required && <span className="text-xs leading-none text-red-500">●</span>}

                {/* ? 아이콘 + 툴팁 */}
                {question && (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 cursor-help text-[var(--color-admin-secondary-text)]" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">{question}</TooltipContent>
                    </Tooltip>
                )}

                {/* "도움말" 텍스트 */}
                {help && <span className="cursor-help text-sm text-blue-600">도움말</span>}
            </div>

            {/* 오른쪽: rightContent + 접기 버튼 */}
            <div className="flex items-center gap-3">
                {/* 오른쪽 컨텐츠 */}
                {rightContent && <div className="text-sm text-blue-600">{rightContent}</div>}

                {/* 접기/펼치기 버튼 */}
                {collapsible && (
                    <button
                        onClick={handleCollapse}
                        className="rounded p-1 transition-colors hover:bg-gray-100"
                        aria-label={isCollapsed ? '펼치기' : '접기'}
                    >
                        <ChevronDown
                            className={`h-5 w-5 text-[var(--color-admin-secondary-text)] transition-transform ${isCollapsed ? '-rotate-180' : ''}`}
                        />
                    </button>
                )}
            </div>
        </div>
    );
}
