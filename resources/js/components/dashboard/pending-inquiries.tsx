import { Card, CardContent } from '@/components/ui/card';
import { AdminCardHeader } from './AdminCardHeader';
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
            <AdminCardHeader title="미답변문의" subtitle="최근 30일 기준" rightContent="최근 12:34" onRightButtonClick={()=>{}} />
            <CardContent>
                {listItems.map((item) => (
                    <Label key={item.label} className="flex cursor-pointer items-baseline justify-between space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-700">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-bold text-gray-900">{item.value}</span>
                            <ShopIcon className="size-4 text-gray-400" name='펼침(오른쪽)' />
                        </div>
                    </Label>
                ))}
            </CardContent>
        </Card>
    );
}

