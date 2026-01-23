import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ShopIcon } from '../shop/shop-icon';
import { AdminCardHeader } from './AdminCardHeader';

interface ListItem {
    label: string;
    value: number;
}

export function SellerRequests() {
    const listItems: ListItem[] = [
        {
            label: '주문이행',
            value: 100,
        },
        {
            label: '정시배송완료',
            value: 100,
        },
        {
            label: '정시출고완료',
            value: 100,
        },
        {
            label: '24시간 내 답변',
            value: 100,
        },
    ];

    return (
        <Card>
            <AdminCardHeader title="판매자접수" showChevron={true} />
            <CardContent>
                {listItems.map((item) => (
                    <Label key={item.label} className="flex cursor-pointer items-baseline justify-between space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-700">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-bold text-gray-900">{item.value}</span>
                            <ShopIcon className="size-4 text-gray-400" name="펼침(오른쪽)" />
                        </div>
                    </Label>
                ))}
            </CardContent>
        </Card>
    );
}
