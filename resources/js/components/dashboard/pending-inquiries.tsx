import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ShopIcon } from '../shop/shop-icon';

interface ListItem {
    label: string;
    value: number;
}

export function PendingInquiries() {
    const listItems: ListItem[] = [
        {
            label: '고객센터문의',
            value: 0,
        },
        {
            label: '고객문의',
            value: 0,
        },
    ];

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="font-semibold">미답변문의</div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">최근 12:34</span>
                        <button className="text-gray-400 hover:text-gray-600">
                            <ShopIcon name="초기화" className="size-4" />
                        </button>
                    </div>
                </div>
                <CardDescription className="text-xs text-gray-500">최근 30일 기준</CardDescription>
            </CardHeader>

            <CardContent>
                {listItems.map((item) => (
                    <Label key={item.label} className="flex cursor-pointer items-center justify-between gap-2 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-700">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-lg font-bold text-gray-900">{item.value}</span>
                            <ShopIcon className="size-4 text-gray-400" name='펼침(오른쪽)' />
                        </div>
                    </Label>
                ))}
            </CardContent>
        </Card>
    );
}

