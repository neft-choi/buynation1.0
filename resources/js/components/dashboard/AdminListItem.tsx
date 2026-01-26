import { CheckCircle2, ChevronRight, CircleQuestionMark } from 'lucide-react';
import { Label } from '../ui/label';

export interface AdminListItemProps {
    label: string;
    value: number;
    tooltipText?: string;
    showStatusIcon?: boolean;
}

export function AdminListItem({ label, value, tooltipText, showStatusIcon = false }: AdminListItemProps) {
    const getStatusColor = (value: number) => {
        if (value >= 95) return 'fill-green-700';
        if (value >= 80) return 'fill-orange-400';
        return 'fill-red-600';
    };

    return (
        <Label className="flex cursor-pointer items-baseline justify-between">
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">{label}</span>
                {tooltipText && <CircleQuestionMark className="size-4 text-gray-400" />}
            </div>
            <div className="flex items-center gap-1">
                {showStatusIcon && <CheckCircle2 className={`size-6 text-white ${getStatusColor(value)}`} />}
                <span className="w-14 text-right text-xl font-bold text-gray-900">{value}</span>
                <ChevronRight className="size-4 text-gray-400" />
            </div>
        </Label>
    );
}
