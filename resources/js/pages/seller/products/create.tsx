import { AdminButton } from '@/components/dashboard/admin-button';
import { AdminInput } from '@/components/dashboard/admin-input';
import { AdminCardTitle } from '@/components/dashboard/AdminCardTitle';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Combobox, ComboboxContent, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox';
import { Field, FieldLabel } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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

export default function Create() {
    const [copiedProductId, setCopiedProductId] = useState<string | null>('');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flex flex-col justify-center gap-4 p-4">
                {/* 복사등록 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="복사등록" collapsible />
                    </CardHeader>
                    <CardContent>
                        <Combobox value={copiedProductId} onValueChange={setCopiedProductId}>
                            <ComboboxInput placeholder="최근 등록한 상품을 선택해주세요." />
                            <ComboboxContent>
                                <ComboboxList>
                                    {existingProducts.map((product) => (
                                        <ComboboxItem key={product.value} value={product.value}>
                                            {product.label}
                                        </ComboboxItem>
                                    ))}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
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
                                <div>카테고리명 선택</div>
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
                                <div>옵션별 상품 등록</div>
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
                                <div>기본 등록</div>
                            </TabsContent>

                            <TabsContent value="optional">
                                <div>옵션별 등록</div>
                            </TabsContent>
                        </Tabs>
                        <AdminCardTitle title="대표이미지" required={true} question="대표이미지" />
                        <div>+</div>
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
                                <div>기본 등록</div>
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
                            <AdminButton className="ml-1 rounded-xl" variant="adminSecondary">
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
                            <CircleAlert className="h-5 w-5 fill-orange-400 text-white rotate-180" />
                            <span>아직 등록된 상품 카테고리가 없습니다. 맨 위에서 카테고리를 선택해주세요.</span>
                        </div>
                    </CardContent>
                </Card>

                {/* 배송 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="배송" required={true} rightContent="출고지(품고 파주센터)" collapsible={true} />
                    </CardHeader>
                </Card>

                {/* 반품/교환 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="반품/교환" required={true} rightContent="반품지(주식회사 랑벨)" collapsible={true} />
                    </CardHeader>
                </Card>

                {/* 구비서류 카드 */}
                <Card>
                    <CardHeader>
                        <AdminCardTitle title="구비서류" collapsible={true} />
                    </CardHeader>
                </Card>
            </div>
        </AppLayout>
    );
}
