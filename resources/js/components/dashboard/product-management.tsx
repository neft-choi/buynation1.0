import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ShopIcon } from '../shop/shop-icon';
import { AdminCardHeader } from './AdminCardHeader';

interface ListItem {
    label: string;
    value: number;
}

export function ProductManagement() {
    const listItems: ListItem[] = [
        {
            label: '판매중 상품수',
            value: 0,
        },
        {
            label: '임시저장 상품수',
            value: 0,
        },
        {
            label: '승인반려 상품수',
            value: 0,
        },
        {
            label: '품절 상품수',
            value: 3,
        },
    ];

    return (
        <Card>
            <AdminCardHeader title="상품관리" rightContent="최근 12:34" onRightButtonClick={() => {}} />
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
