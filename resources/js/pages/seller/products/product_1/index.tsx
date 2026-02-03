import { AdminButton } from '@/components/dashboard/admin-button';
import { AdminInput } from '@/components/dashboard/admin-input';
import { AdminCardTitle } from '@/components/dashboard/AdminCardTitle';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldLabel } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { CircleAlert } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: '상품관리', href: '/seller/products' },
    { title: '상품 등록', href: '/seller/products/create' },
];

const existingProducts = [
    { value: '아이폰', label: '아이폰' },
    { value: '갤럭시', label: '갤럭시' },
    { value: '맥북 프로', label: '맥북 프로' },
];
//상품 등록
export default function Create() {
    const [copiedProductId, setCopiedProductId] = useState<string>('');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4">
                {/* 복사등록 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="복사등록" collapsible />
                    </CardHeader>
                    <CardContent>
                        <Select value={copiedProductId} onValueChange={setCopiedProductId}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="최근 등록한 상품을 선택해주세요." />
                            </SelectTrigger>
                            <SelectContent>
                                {existingProducts.map((product) => (
                                    <SelectItem key={product.value} value={product.value}>
                                        {product.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>

                {/* 상품명 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="상품명" required={true} />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <AdminInput placeholder="상품명 입력(브랜드명 + 제품명)" showCharCount={true} />
                        <div className="text-xs">실제 판매 페이지에 노출되는 상품명입니다. 쿠팡 기준에 맞게 변경될 수 있습니다.</div>
                    </CardContent>
                    <CardFooter className="text-sm">
                        <AdminCardTitle
                            title="등록상품명(판매자관리용)"
                            variant="small"
                            question="발주서에 사용되는 상품명으로, 고객에게 보이지 않습니다. 관리하기 편한 이름으로 설정해주세요."
                        />
                    </CardFooter>
                </Card>

                {/* 카테고리 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="카테고리" required={true} help={true} />
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="search">
                            <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 text-admin-secondary-text">
                                <TabsTrigger
                                    value="search"
                                    className="border-color-admin-border rounded-l-md rounded-r-none border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                >
                                    카테고리명 검색
                                </TabsTrigger>
                                <TabsTrigger
                                    value="select"
                                    className="border-color-admin-border rounded-l-none rounded-r-md border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                >
                                    카테고리명 선택
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="search">
                                <AdminInput placeholder="카테고리명 입력" />
                            </TabsContent>

                            <TabsContent value="select">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="선택하세요" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="category1">패션의류잡화</SelectItem>
                                        <SelectItem value="category2">뷰티</SelectItem>
                                        <SelectItem value="category3">출산/유아동</SelectItem>
                                        <SelectItem value="category4">식품</SelectItem>
                                        <SelectItem value="category5">주방용품</SelectItem>
                                    </SelectContent>
                                </Select>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                    <CardFooter className="text-sm">
                        상품과 맞지 않는 카테고리에 등록할 경우, 적정 카테고리로 이동될 수 있습니다. 단, 카테고리 수수료는 변경되지 않으니 유의해
                        주세요.
                    </CardFooter>
                </Card>

                {/* 옵션 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="옵션" required={true} help={true} collapsible={true} />
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="option">
                            <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 text-admin-secondary-text">
                                <TabsTrigger
                                    value="option"
                                    className="border-color-admin-border rounded-l-md rounded-r-none border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                >
                                    옵션별 상품 등록
                                </TabsTrigger>
                                <TabsTrigger
                                    value="single"
                                    className="border-color-admin-border rounded-l-none rounded-r-md border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                >
                                    단일 상품 등록
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="option">
                                <div>
                                    <span className="text-sm">구매옵션은 고객이 주문할 때 선택하는 옵션입니다.</span>
                                    <div className="flex h-30 w-full items-center justify-center bg-gray-50">
                                        <button className="cursor-pointer border">상품 옵션 등록</button>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="single">
                                <div>단일 상품 등록</div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* 상품이미지 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="상품이미지" required={true} help={true} collapsible={true} />
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="default">
                            <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 text-admin-secondary-text">
                                <TabsTrigger
                                    value="default"
                                    className="border-color-admin-border rounded-l-md rounded-r-none border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                >
                                    기본 등록
                                </TabsTrigger>
                                <TabsTrigger
                                    value="optional"
                                    className="border-color-admin-border rounded-l-none rounded-r-md border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                >
                                    옵션별 등록
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="default">
                                <div>
                                    <div className="text-sm">이미지가 옵션별로 다른 경우에는 '옵션별 등록'을 선택해주세요.</div>
                                </div>
                            </TabsContent>

                            <TabsContent value="optional">
                                <div>옵션별 등록</div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                    <CardHeader>
                        <AdminCardTitle title="대표이미지" required={true} question="대표이미지" />
                    </CardHeader>
                    <CardContent>
                        <div className="flex h-20 w-20 items-center justify-center border">+</div>

                        <div className="flex justify-end">
                            <span className="text-blue-600">추가이미지</span>
                            <span>(0/9)</span>
                        </div>
                    </CardContent>
                </Card>

                {/* 상세설명 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="상세설명" required={true} help={true} collapsible={true} />
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="default">
                            <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 text-admin-secondary-text">
                                <TabsTrigger
                                    value="default"
                                    className="border-color-admin-border rounded-l-md rounded-r-none border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                >
                                    기본 등록
                                </TabsTrigger>
                                <TabsTrigger
                                    value="optional"
                                    className="border-color-admin-border rounded-l-none rounded-r-md border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                >
                                    옵션별 등록
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="default">
                                <div>
                                    <span className="text-sm">구매옵션은 고객이 주문할 때 선택하는 옵션입니다.</span>
                                    <div className="flex h-30 w-full flex-col items-center justify-center bg-gray-50">
                                        <span>작성된 내용이 없습니다.</span>
                                        <button className="cursor-pointer border">작성하기</button>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="optional">
                                <div>옵션별 등록</div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* 상품 주요정보 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="상품 주요정보" required={true} help={true} collapsible={true} />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="space-y-2">
                            <AdminCardTitle title="브랜드" required={true} question="브랜드" variant="small" />
                            <AdminInput placeholder="브랜드를 입력해주세요" />
                            <Field orientation="horizontal">
                                <Checkbox id="brand-checkbox" name="brand-checkbox" />
                                <FieldLabel htmlFor="brand-checkbox">브랜드 없음 (또는 자체 제작)</FieldLabel>
                            </Field>
                        </div>
                        <div className="space-y-2">
                            <AdminCardTitle title="상품 유형" required={true} question="상품 유형" variant="small" />
                            <RadioGroup>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="single" id="single" />
                                    <Label htmlFor="single">한 가지로만 구성된 상품</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="multiple" id="multiple" />
                                    <Label htmlFor="multiple">두 가지 이상 함께 구성된 상품</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </CardContent>
                    <CardFooter className="text-xs">
                        <span>미성년자 구매, 부가세, 제조사, 인증정보, 병행수입, 인당 최대구매수량, 판매기간...</span>
                        <div className="pl-1 text-admin-primary-bg">입력 더보기</div>
                    </CardFooter>
                </Card>

                {/* 검색어 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="검색어" help={true} collapsible={true} />
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <AdminCardTitle title="태그" variant="small" question="태그" />
                        <div className="flex">
                            <AdminInput placeholder="쉼표(,)로 구분, 최대 20개" />
                            <AdminButton className="ml-1 rounded" variant="adminSecondary">
                                추가
                            </AdminButton>
                        </div>
                    </CardContent>
                </Card>

                {/* 상품정보제공고시 카드*/}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="상품정보제공고시" required={true} help={true} collapsible={true} />
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2 text-sm">
                            <CircleAlert className="h-5 w-5 rotate-180 fill-orange-400 text-white" />
                            <span>아직 등록된 상품 카테고리가 없습니다. 맨 위에서 카테고리를 선택해주세요.</span>
                        </div>
                    </CardContent>
                </Card>

                {/* 배송 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="배송" required={true} rightContent="출고지(품고 파주센터)" collapsible={true} />
                    </CardHeader>

                    <CardContent className="space-y-8">
                        {/* 배송 - 출고지 */}
                        <div className="space-y-2">
                            <AdminCardTitle title="출고지" variant="small" required={true} />
                            <div className="h-30 w-full bg-gray-50 p-4 text-admin-primary-bg">
                                <h3 className="font-bold">상품출고지</h3>
                                <div>(우 : 10844) 경기도 파주시 월롱면 월롱초교길 64-30 품고 파주센터</div>
                                <button className="border">판매자 주소록</button>
                            </div>
                        </div>

                        {/* 배송 - 배송방법 */}
                        <div className="space-y-2">
                            <AdminCardTitle title="배송방법" variant="small" required={true} />
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="일반배송" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="category1">일반배송</SelectItem>
                                    <SelectItem value="category2">특별배송</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* 배송 - 묶음배송 */}
                        <div className="space-y-2">
                            <AdminCardTitle title="묶음배송" variant="small" required={true} />
                            <RadioGroup>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="available" id="available" />
                                    <Label htmlFor="available">가능</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="unavailable" id="unavailable" />
                                    <Label htmlFor="unavailable">불가능</Label>
                                </div>
                            </RadioGroup>
                            <div className="text-sm">출고 정보가 같은 상품만 묶음배송할 수 있습니다. (착불배송 선택 불가)</div>
                        </div>

                        {/* 배송 - 제주/도서산간 배송여부 */}
                        <div className="space-y-2">
                            <AdminCardTitle title="제주/도서산간 배송여부" variant="small" required={true} />
                            <RadioGroup>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="available" id="available" />
                                    <Label htmlFor="available">가능</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem value="unavailable" id="unavailable" />
                                    <Label htmlFor="unavailable">불가능</Label>
                                </div>
                            </RadioGroup>
                            <div className="text-sm">도서산간지역 배송 시 출고지에 등록된 택배사만 선택할 수 있습니다.</div>
                        </div>

                        {/* 배송 - 택배사 */}
                        <div className="space-y-2">
                            <AdminCardTitle title="택배사" variant="small" required={true} />
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="* 한진택배" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="category1">대한통운</SelectItem>
                                    <SelectItem value="category2">한진택배</SelectItem>
                                    <SelectItem value="category3">우체국택배</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="text-sm">도서산간지역 배송 시 출고지에 등록된 택배사만 선택할 수 있습니다.</div>
                            <div className="text-sm">한진택배 도서산간추가배송비: 제주지역: 3000원 / 제주외지역: 3000원</div>
                        </div>

                        {/* 배송 - 배송비 종류 */}
                        <div className="space-y-2">
                            <AdminCardTitle title="배송비 종류" variant="small" required={true} />
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="무료배송" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="category1">무료배송</SelectItem>
                                    <SelectItem value="category2">배송비 3000원</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* 배송 - 출고 소요일 */}
                        <div className="space-y-2">
                            <AdminCardTitle title="출고 소요일" variant="small" required={true} />
                            <Tabs defaultValue="defalut">
                                <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 text-admin-secondary-text">
                                    <TabsTrigger
                                        value="defalut"
                                        className="border-color-admin-border rounded-l-md rounded-r-none border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                    >
                                        기본 등록
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="optional"
                                        className="border-color-admin-border rounded-l-none rounded-r-md border-1 transition-none data-[state=active]:border-admin-primary-bg data-[state=active]:bg-admin-primary-bg data-[state=active]:text-admin-primary-text"
                                    >
                                        옵션별 등록
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="defalut">
                                    <div>출고 소요일 - 기본 등록</div>
                                </TabsContent>

                                <TabsContent value="optional">
                                    <div>출고 소요일 - 옵션별 등록</div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </CardContent>
                </Card>

                {/* 반품/교환 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="반품/교환" required={true} rightContent="반품지(주식회사 랑벨)" collapsible={true} />
                    </CardHeader>
                    <CardContent className="space-y-8">
                        {/* 반품/교환 - 반품/교환지 */}
                        <div className="space-y-2">
                            <AdminCardTitle title="반품/교환지" variant="small" required={true} />
                            <div className="h-30 w-full bg-gray-50 p-4 text-admin-primary-bg">
                                <h3 className="font-bold">반품/교환지</h3>
                                <div>(우 : 13487) 경기도 성남시 분당구 판교로228번길 15 3동 405호 랑벨</div>
                                <button className="border">판매자 주소록</button>
                            </div>
                        </div>

                        {/* 반품/교환 - 초도배송비(편도) */}
                        <div className="space-y-2">
                            <AdminCardTitle title="초도배송비(편도)" variant="small" required={true} />
                            <AdminInput placeholder="초도배송비(편도)" />
                            <span className="text-sm">과도한 반품배송비는 청약철회 사유가 될 수 있습니다.</span>
                        </div>

                        {/* 반품/교환 - 반품배송비(편도) */}
                        <div className="space-y-2">
                            <AdminCardTitle title="반품배송비(편도)" variant="small" required={true} />
                            <AdminInput placeholder="반품배송비(편도)" />
                            <span className="text-sm">
                                고객사유로 인한 반품 시, 왕복 반품/배송비는 초도배송비+반품배송비의 합계인 3,000원이 청구됩니다.
                            </span>
                        </div>
                    </CardContent>
                </Card>

                {/* 구비서류 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="구비서류" collapsible={true} />
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="text-sm">5MB 이하 파일을 업로드하세요. (PDF, HWP, DOC, DOCX, TXT, PNG, JPG, JPEG 파일 형식만 가능)</div>

                        {/* 구비서류 - 기타인증서류 */}
                        <div className="space-y-2">
                            <AdminCardTitle title="기타인증서류" variant="small" />
                            <AdminButton>파일선택</AdminButton>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
