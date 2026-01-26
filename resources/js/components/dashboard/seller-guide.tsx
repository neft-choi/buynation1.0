import { Card, CardContent } from '@/components/ui/card';
import { AdminCardHeader } from './AdminCardHeader';
interface ImageItem {
    imageSrc: string;
    title: string;
}

export function SellerGuide() {
    const imageItems: ImageItem[] = [
        {
            imageSrc: 'https://placehold.co/400x300',
            title: '쿠팡 교육 오픈',
        },
        {
            imageSrc: 'https://placehold.co/400x300',
            title: '판매자자동가격조정',
        },
    ];

    return (
        <Card>
            <AdminCardHeader title="판매자가이드 및 혜택" />
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {imageItems.map((item, index) => (
                        <div key={index} className="cursor-pointer">
                            {/* 이미지 */}
                            <div className="mb-3 h-32 w-full">
                                <img src={item.imageSrc} alt={item.title} className="h-full w-full object-cover" />
                            </div>

                            {/* 텍스트 */}
                            <div className="space-y-1">
                                <h4 className="text-md leading-tight font-semibold hover:underline">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
