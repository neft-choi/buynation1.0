import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="font-semibold">판매자가이드 및 혜택</div>
                </div>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {imageItems.map((item, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                        >
                            {/* 이미지 */}
                            <div className="w-full h-32 rounded-lg overflow-hidden mb-3 group-hover:scale-[1.02] transition-transform duration-200">
                                <img
                                    src={item.imageSrc}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* 텍스트 */}
                            <div className="space-y-1">
                                <h4 className="font-semibold text-sm leading-tight">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
