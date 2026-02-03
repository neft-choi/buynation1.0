import { AdminCardTitle } from '@/components/dashboard/AdminCardTitle';
import { AdminButton } from '@/components/dashboard/admin-button';
import { AdminInput } from '@/components/dashboard/admin-input';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { ChevronDown, MoreVertical } from 'lucide-react';
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
//상품조회수정
export default function Index() {
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
                        {/* 기간 Drawer */}
                        <Drawer>
                            <DrawerTrigger asChild>
                                <button className="flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm">
                                    기간
                                    <ChevronDown className="size-4" />
                                </button>
                            </DrawerTrigger>

                            <DrawerContent className="pb-6">
                                <div className="mx-auto w-full max-w-md">
                                    <DrawerHeader className="relative px-4">
                                        <DrawerTitle className="text-left text-lg font-semibold">기간</DrawerTitle>

                                        <DrawerClose asChild>
                                            <button
                                                type="button"
                                                className="absolute top-3 right-4 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted"
                                                aria-label="닫기"
                                            >
                                                <span className="text-2xl leading-none">×</span>
                                            </button>
                                        </DrawerClose>
                                    </DrawerHeader>

                                    <div className="space-y-4 px-4">
                                        <Select defaultValue="createdAt">
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="상품등록일" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="createdAt">상품등록일</SelectItem>
                                                <SelectItem value="updatedAt">상품수정일</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <div className="grid grid-cols-3 overflow-hidden rounded-md border text-sm font-medium">
                                            <button type="button" className="h-12 border-r border-b hover:bg-muted/40">
                                                오늘
                                            </button>
                                            <button type="button" className="h-12 border-r border-b hover:bg-muted/40">
                                                7일
                                            </button>
                                            <button type="button" className="h-12 border-b hover:bg-muted/40">
                                                30일
                                            </button>

                                            <button type="button" className="h-12 border-r border-b hover:bg-muted/40">
                                                90일
                                            </button>
                                            <button type="button" className="h-12 border-r border-b hover:bg-muted/40">
                                                180일
                                            </button>
                                            <button type="button" className="h-12 border-b hover:bg-muted/40">
                                                1년
                                            </button>

                                            <button type="button" className="h-12 border-t border-r bg-blue-50 font-bold text-blue-600">
                                                전체
                                            </button>
                                            <div className="h-12 border-t" />
                                            <div className="h-12 border-t" />
                                        </div>

                                        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                                            {/* 시작일 - Dialog */}
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button
                                                        type="button"
                                                        className="flex h-12 w-full items-center justify-between rounded-md border px-3 text-sm"
                                                    >
                                                        <span>2000.01.01.</span>
                                                    </button>
                                                </DialogTrigger>

                                                <DialogContent className="w-[calc(100%-2rem)] max-w-md p-0">
                                                    <div className="p-4">
                                                        <div className="text-base font-semibold">시작일 선택</div>
                                                    </div>
                                                    <Calendar mode="single" className="w-full" selected={undefined} onSelect={() => { }} />
                                                    <div className="grid grid-cols-2 gap-3 p-4">
                                                        <DialogClose asChild>
                                                            <AdminButton variant="adminSecondary" className="h-12 w-full rounded">
                                                                취소
                                                            </AdminButton>
                                                        </DialogClose>
                                                        <DialogClose asChild>
                                                            <AdminButton variant="adminPrimary" className="h-12 w-full rounded">
                                                                설정
                                                            </AdminButton>
                                                        </DialogClose>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>

                                            <span className="text-sm text-muted-foreground">~</span>

                                            {/* 종료일 - Dialog */}
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <button
                                                        type="button"
                                                        className="flex h-12 w-full items-center justify-between rounded-md border px-3 text-sm"
                                                    >
                                                        <span>2099.12.31.</span>
                                                    </button>
                                                </DialogTrigger>

                                                <DialogContent className="w-[calc(100%-2rem)] max-w-md p-0">
                                                    <div className="p-4">
                                                        <div className="text-base font-semibold">종료일 선택</div>
                                                    </div>
                                                    <Calendar mode="single" className="w-full" selected={undefined} onSelect={() => { }} />
                                                    <div className="grid grid-cols-2 gap-3 p-4">
                                                        <DialogClose asChild>
                                                            <AdminButton variant="adminSecondary" className="h-12 w-full rounded">
                                                                취소
                                                            </AdminButton>
                                                        </DialogClose>
                                                        <DialogClose asChild>
                                                            <AdminButton variant="adminPrimary" className="h-12 w-full rounded">
                                                                설정
                                                            </AdminButton>
                                                        </DialogClose>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </div>

                                    <DrawerFooter className="px-4 pt-6">
                                        <div className="grid grid-cols-2 gap-3">
                                            <DrawerClose asChild>
                                                <AdminButton variant="adminSecondary" className="h-12 w-full rounded">
                                                    취소
                                                </AdminButton>
                                            </DrawerClose>

                                            <DrawerClose asChild>
                                                <AdminButton variant="adminPrimary" className="h-12 w-full rounded">
                                                    확인
                                                </AdminButton>
                                            </DrawerClose>
                                        </div>
                                    </DrawerFooter>
                                </div>
                            </DrawerContent>
                        </Drawer>

                        {/* 카테고리 Drawer */}
                        <Drawer>
                            <DrawerTrigger asChild>
                                <button className="flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm">
                                    카테고리
                                    <ChevronDown className="size-4" />
                                </button>
                            </DrawerTrigger>

                            <DrawerContent className="pb-6">
                                <div className="mx-auto w-full max-w-md">
                                    <DrawerHeader className="relative px-4">
                                        <DrawerTitle className="text-left text-lg font-semibold">카테고리</DrawerTitle>

                                        <DrawerClose asChild>
                                            <button
                                                type="button"
                                                className="absolute top-3 right-4 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted"
                                                aria-label="닫기"
                                            >
                                                <span className="text-2xl leading-none">×</span>
                                            </button>
                                        </DrawerClose>
                                    </DrawerHeader>
                                    <div className="space-y-2">
                                        <Select>
                                            <SelectTrigger className="h-8">
                                                <SelectValue placeholder="1차" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="category1">패션의류잡화</SelectItem>
                                                <SelectItem value="category2">뷰티</SelectItem>
                                                <SelectItem value="category3">출산/유아동</SelectItem>
                                                <SelectItem value="category4">식품</SelectItem>
                                                <SelectItem value="category5">주방용품</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <Select>
                                            <SelectTrigger className="h-8">
                                                <SelectValue placeholder="2차" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="category1">가공/즉석식품</SelectItem>
                                                <SelectItem value="category2">가루/조미료/향신료</SelectItem>
                                                <SelectItem value="category3">건강식품</SelectItem>
                                                <SelectItem value="category4">냉장/냉동식품</SelectItem>
                                                <SelectItem value="category5">생수/음료</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <Select>
                                            <SelectTrigger className="h-8">
                                                <SelectValue placeholder="3차" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="category1">김밥/도시락/샐러드</SelectItem>
                                                <SelectItem value="category2">김치/반찬/젓갈</SelectItem>
                                                <SelectItem value="category3">냉장냉동 간편조리</SelectItem>
                                                <SelectItem value="category4">냉장면류</SelectItem>
                                                <SelectItem value="category5">연식품</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <Select>
                                            <SelectTrigger className="h-8">
                                                <SelectValue placeholder="4차" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="category1">기타 냉장면류</SelectItem>
                                                <SelectItem value="category2">냉장 냉면/메밀</SelectItem>
                                                <SelectItem value="category3">냉장 스파게티/파스타</SelectItem>
                                                <SelectItem value="category4">냉장 우동/생면</SelectItem>
                                                <SelectItem value="category5">냉장 짜장면/짬뽕</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <Select>
                                            <SelectTrigger className="h-8" disabled>
                                                <SelectValue placeholder="5차" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="category1">패션의류잡화</SelectItem>
                                                <SelectItem value="category2">뷰티</SelectItem>
                                                <SelectItem value="category3">출산/유아동</SelectItem>
                                                <SelectItem value="category4">식품</SelectItem>
                                                <SelectItem value="category5">주방용품</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <DrawerFooter className="px-4 pt-6">
                                        <div className="grid grid-cols-2 gap-3">
                                            <DrawerClose asChild>
                                                <AdminButton variant="adminSecondary" className="h-12 w-full rounded">
                                                    취소
                                                </AdminButton>
                                            </DrawerClose>

                                            <DrawerClose asChild>
                                                <AdminButton variant="adminPrimary" className="h-12 w-full rounded">
                                                    확인
                                                </AdminButton>
                                            </DrawerClose>
                                        </div>
                                    </DrawerFooter>
                                </div>
                            </DrawerContent>
                        </Drawer>

                        {/* 재고 수량 Drawer */}
                        <Drawer>
                            <DrawerTrigger asChild>
                                <button className="flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm">
                                    재고수량
                                    <ChevronDown className="size-4" />
                                </button>
                            </DrawerTrigger>

                            <DrawerContent className="pb-6">
                                <div className="mx-auto w-full max-w-md">
                                    <DrawerHeader className="relative px-4">
                                        <DrawerTitle className="text-left text-lg font-semibold">재고수량</DrawerTitle>

                                        <DrawerClose asChild>
                                            <button
                                                type="button"
                                                className="absolute top-3 right-4 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted"
                                                aria-label="닫기"
                                            >
                                                <span className="text-2xl leading-none">×</span>
                                            </button>
                                        </DrawerClose>
                                    </DrawerHeader>

                                    <div className="px-4">
                                        <div className="grid grid-cols-2 overflow-hidden rounded-md border text-sm font-medium">
                                            <button type="button" className="h-12 border-r border-b bg-blue-50 font-bold text-blue-600">
                                                선택안함
                                            </button>

                                            <button type="button" className="h-12 border-b hover:bg-muted/40">
                                                재고 있음
                                            </button>

                                            <button type="button" className="h-12 border-r border-b hover:bg-muted/40">
                                                재고 없음(품절)
                                            </button>

                                            <button type="button" className="h-12 border-b hover:bg-muted/40">
                                                재고 10개 이하
                                            </button>

                                            <button type="button" className="h-12 border-r hover:bg-muted/40">
                                                재고 30개 이하
                                            </button>

                                            <button type="button" className="h-12 hover:bg-muted/40">
                                                재고 50개 이하
                                            </button>
                                        </div>
                                    </div>

                                    <DrawerFooter className="px-4 pt-6">
                                        <div className="grid grid-cols-2 gap-3">
                                            <DrawerClose asChild>
                                                <AdminButton variant="adminSecondary" className="h-12 w-full rounded">
                                                    취소
                                                </AdminButton>
                                            </DrawerClose>

                                            <DrawerClose asChild>
                                                <AdminButton variant="adminPrimary" className="h-12 w-full rounded">
                                                    확인
                                                </AdminButton>
                                            </DrawerClose>
                                        </div>
                                    </DrawerFooter>
                                </div>
                            </DrawerContent>
                        </Drawer>

                        {/* 상품타입 Drawer */}
                        <Drawer>
                            <DrawerTrigger asChild>
                                <button className="flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm">
                                    상품타입
                                    <ChevronDown className="size-4" />
                                </button>
                            </DrawerTrigger>

                            <DrawerContent className="pb-6">
                                <div className="mx-auto w-full max-w-md">
                                    <DrawerHeader className="relative px-4">
                                        <DrawerTitle className="text-left text-lg font-semibold">상품타입</DrawerTitle>

                                        <DrawerClose asChild>
                                            <button
                                                type="button"
                                                className="absolute top-3 right-4 inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted"
                                                aria-label="닫기"
                                            >
                                                <span className="text-2xl leading-none">×</span>
                                            </button>
                                        </DrawerClose>
                                    </DrawerHeader>

                                    <div className="px-4">
                                        <div className="grid grid-cols-2 overflow-hidden rounded-md border text-sm font-medium">
                                            <button type="button" className="h-12 border-r border-b bg-blue-50 font-bold text-blue-600">
                                                전체
                                            </button>

                                            <button type="button" className="h-12 border-b hover:bg-muted/40">
                                                판매자배송
                                            </button>

                                            <button type="button" className="h-12 border-r border-b hover:bg-muted/40">
                                                로켓그로스
                                            </button>

                                            <button type="button" className="h-12 border-b hover:bg-muted/40">
                                                로켓그로스 가능 상품
                                            </button>
                                        </div>
                                    </div>

                                    <DrawerFooter className="px-4 pt-6">
                                        <div className="grid grid-cols-2 gap-3">
                                            <DrawerClose asChild>
                                                <AdminButton variant="adminSecondary" className="h-12 w-full rounded">
                                                    취소
                                                </AdminButton>
                                            </DrawerClose>

                                            <DrawerClose asChild>
                                                <AdminButton variant="adminPrimary" className="h-12 w-full rounded">
                                                    확인
                                                </AdminButton>
                                            </DrawerClose>
                                        </div>
                                    </DrawerFooter>
                                </div>
                            </DrawerContent>
                        </Drawer>
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
