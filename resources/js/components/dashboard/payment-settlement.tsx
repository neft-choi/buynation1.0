import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { ShopIcon } from '../shop/shop-icon';

export function PaymentSettlement() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="font-semibold">정산</div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">최근 12:34</span>
                        <button className="text-gray-400 hover:text-gray-600">
                            <ShopIcon name="초기화" className="size-4" />
                        </button>
                    </div>
                </div>
                <CardDescription className="text-xs text-gray-500">최근 30일 기준</CardDescription>
            </CardHeader>

            <CardContent></CardContent>
        </Card>
    );
}
