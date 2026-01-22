import { ShopIcon } from '@/components/shop/shop-icon';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

export function SalesShipping() {
    const stats = [
        { value: 0, label: '결제완료' },
        { value: 0, label: '상품준비' },
        { value: 0, label: '배송지시' },
        { value: 0, label: '배송중' },
    ];

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold">판매/배송</h3>
                        <span className="text-xs text-gray-500">{'>'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">최근 12:34</span>
                        <button className="text-gray-400 hover:text-gray-600">
                            <ShopIcon name="초기화" className="size-4" />
                        </button>
                    </div>
                </div>
                <CardDescription className="text-xs text-gray-500">최근 14일 기준</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="mb-6 grid grid-cols-4 gap-3">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="mb-2 text-2xl font-bold">{stat.value}</div>
                            <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
