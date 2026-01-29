import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '../ui/dialog';

interface AdminCardTitleProps {
    title: string;
    required?: boolean; // 빨간 점 표시
    question?: string; // 물음표 아이콘 표시 + 클릭 시 모달 등장
    help?: boolean; // 도움말 표시
    rightContent?: React.ReactNode; //  오른쪽 컨텐츠 표시
    collapsible?: boolean; // 펼치기/접기 버튼 표시
    onCollapse?: (isCollapsed: boolean) => void;
    defaultCollapsed?: boolean;
    className?: string;
    variant?: 'default' | 'small'; // 타이틀 글자 스타일
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
    variant = 'default',
}: AdminCardTitleProps) {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
    const [isOpen, setIsOpen] = useState(false);

    const handleCollapse = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        onCollapse?.(newState);
    };

    const titleSizeClass = {
        default: 'text-md',
        small: 'text-sm',
    }[variant];

    return (
        <div className={`flex items-center justify-between ${className}`}>
            {/* 왼쪽: 제목 + 옵셔널 표시들 */}
            <div className="flex items-center gap-2">
                {/* 제목 */}
                <span className={`${titleSizeClass} font-bold text-[var(--color-admin-text)]`}>{title}</span>

                {/* 빨간 점 */}
                {required && <div className="h-2 w-2 rounded-full bg-red-500" />}

                {/* ? 아이콘 + 툴팁 */}
                {question && (
                    <>
                        <button onClick={() => setIsOpen(true)} className="cursor-help" aria-label="question">
                            <HelpCircle className="h-5 w-5 fill-black text-white" />
                        </button>
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogDescription className="text-admin-secondary-text">{question}</DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </>
                )}

                {/* "도움말" 텍스트 */}
                {help && <span className="px-2 text-sm text-blue-600">도움말</span>}
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
