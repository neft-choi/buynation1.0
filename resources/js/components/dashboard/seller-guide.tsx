import { Card, CardContent } from '@/components/ui/card';
import { AdminCardHeader } from './AdminCardHeader';
interface ImageItem {
    imageSrc: string;
    title: string;
}

export function SellerGuide() {
    const imageItems: ImageItem[] = [
        {
            imageSrc: 'url',
            title: '쿠팡 교육 오픈',
        },
        {
            imageSrc: 'url',
            title: '판매자자동가격조정',
        },
    ];

    return (
        <Card>
            <AdminCardHeader title="판매자가이드 및 혜택" />
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {imageItems.map((item, index) => (
                        <div key={index} className="group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                            {/* 이미지 */}
                            <div className="mb-3 h-32 w-full overflow-hidden rounded-lg transition-transform duration-200 group-hover:scale-[1.02]">
                                <img src={item.imageSrc} alt={item.title} className="h-full w-full object-cover" />
                            </div>

                            {/* 텍스트 */}
                            <div className="space-y-1">
                                <h4 className="text-sm leading-tight font-semibold">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
