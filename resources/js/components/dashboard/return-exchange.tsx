import { Card, CardContent } from '@/components/ui/card';
import { AdminCardHeader } from './AdminCardHeader';
import { Label } from '@/components/ui/label';
import { ShopIcon } from '../shop/shop-icon';

interface ListItem {
    label: string;
    value: number;
}

export function ReturnExchange() {
    const listItems: ListItem[] = [
        {
            label: '출고중지요청',
            value: 0,
        },
        {
            label: '반품접수',
            value: 0,
        },
        {
            label: '교환접수',
            value: 0,
        },
    ];
    return (
        <Card>
            <AdminCardHeader title="취소/반품/교환" showChevron={true} subtitle="최근 30일 기준" rightContent="최근 12:34" onRightButtonClick={()=>{}} />
            <CardContent>
                {listItems.map((item) => (
                    <Label key={item.label} className="flex cursor-pointer items-baseline justify-between space-y-2">
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
