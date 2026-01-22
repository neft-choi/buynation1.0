import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ShopIcon } from '../shop/shop-icon';

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
            <CardHeader>
                <div className="flex items-center gap-1">
                    <div className="font-semibold">판매자접수</div>
                    <ShopIcon name="펼침(오른쪽)" className="size-4 text-gray-500" />
                </div>
            </CardHeader>

            <CardContent>
                {listItems.map((item) => (
                    <Label key={item.label} className="flex cursor-pointer items-center justify-between gap-2 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-700">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-lg font-bold text-gray-900">{item.value}</span>
                            <ShopIcon className="size-4 text-gray-400" name="펼침(오른쪽)" />
                        </div>
                    </Label>
                ))}
            </CardContent>
        </Card>
    );
}
