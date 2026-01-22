import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ShopIcon } from '../shop/shop-icon';

export function PremiumSellers() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <div className="font-semibold">우수판매자</div>
                        <ShopIcon name="펼침(오른쪽)" className="size-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500">판매자님은 지난 달 일반판매자입니다. </p>
                </div>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
    );
}
