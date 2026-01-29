import { AdminCardTitle } from '@/components/dashboard/AdminCardTitle';
import { AdminButton } from '@/components/dashboard/admin-button';
import { AdminInput } from '@/components/dashboard/admin-input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { MoreVertical } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '상품관리', href: '/seller/products' },
    { title: '상품 조회/수정', href: '/seller/products/show' },
];

interface Product {
    id: string;
    name: string;
    sku: string;
    price: string;
    image: string;
    status: string;
    updatedDate: string;
}

export default function Show() {
    const [products, setProducts] = useState<Product[]>([
        {
            id: '1',
            name: '랑벨 수분 장벽 크림',
            sku: '15136844791',
            price: '37,050원',
            image: 'https://placehold.co/80x80',
            status: '판매중지',
            updatedDate: '2024-09-04',
        },
        {
            id: '2',
            name: '랑벨 수분 장벽 토너',
            sku: '15136839303',
            price: '27,550원',
            image: 'https://placehold.co/80x80',
            status: '판매중지',
            updatedDate: '2024-09-04',
        },
    ]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col gap-4 p-4">
                {/* 검색/선택 탭 */}
                <section className="flex flex-col gap-2">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="상품상태" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="selling">판매중</SelectItem>
                            <SelectItem value="stopped">판매중지</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="grid grid-cols-2 gap-2">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="상품명" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">상품명 1</SelectItem>
                                <SelectItem value="2">상품명 2</SelectItem>
                            </SelectContent>
                        </Select>
                        <AdminInput placeholder="입력" />
                    </div>
                </section>

                {/* 필터 섹션 */}
                <section className="border-t-1 py-4">
                    <div className="flex">
                        <Select>
                            <SelectTrigger className="w-fit rounded-full">
                                <SelectValue placeholder="기간" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="week">1주일</SelectItem>
                                <SelectItem value="month">1개월</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-fit rounded-full">
                                <SelectValue placeholder="카테고리" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cat1">카테고리</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-fit rounded-full">
                                <SelectValue placeholder="재고수량" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="selling">여유</SelectItem>
                                <SelectItem value="soldout">품절</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-fit rounded-full">
                                <SelectValue placeholder="상품타입" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pending">대기중</SelectItem>
                                <SelectItem value="approved">승인</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>
                {/* 상품 목록 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title={`상품목록 (총 ${products.length}개)`} variant="small" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {products.map((product) => (
                                <div key={product.id} className="flex flex-col gap-4 rounded-lg border p-4 hover:bg-gray-50">
                                    {/* 상품 제목과 체크 박스 */}
                                    <div className="flex items-center gap-4">
                                        <Checkbox />
                                        <p className="font-semibold">{product.name}</p>
                                    </div>

                                    {/* 상품 이미지와 상품 정보 */}
                                    <div className="flex gap-4">
                                        <div className="h-20 w-20 flex-shrink-0 bg-gray-200">
                                            <img src={product.image} alt={product.name} className="h-full w-full rounded-md object-cover" />
                                        </div>

                                        <div className="flex-1 space-y-2">
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <p>등록상품 ID: {product.sku}</p>
                                                <p>
                                                    판매가: <span className="font-bold text-admin-primary-bg">{product.price}~</span>
                                                </p>
                                                <p>재고수량: 재고있음</p>
                                                <p>삼품타입: 판매자배송</p>
                                                <p>등록일: {product.updatedDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 상태 및 액션 */}
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm text-gray-500">승인완료</p>
                                        <span className={`text-sm ${product.status === '판매중지' ? 'text-red-700' : 'text-green-700'}`}>
                                            {product.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-end gap-2">
                                        <AdminButton variant={'adminSecondary'} className="rounded-sm py-1">
                                            가격/재고/판매상태
                                        </AdminButton>
                                        <button className="rounded-md p-2 hover:bg-gray-100">
                                            <MoreVertical className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
