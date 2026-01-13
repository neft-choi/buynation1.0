
import { ShopButton, ShopIconButton } from '@/components/shop/shop-button'
import { ShopIcon } from '@/components/shop/shop-icon'
import { ProductComponent } from '@/components/shop/shop-product-item'
import { SliderType } from '@/components/shop/shop-slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import { cn, formatKRW } from '@/lib/utils'
import { Link } from '@inertiajs/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ShopSearch from '@/components/shop/shop-search'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface SearchProps {
    keyword: string;
    setKeyword: (e: string) => void;
    handleSearch: () => void;
    clickSerachBar: boolean;
    setClickSearchBar: (e: boolean) => void;
}

export default function Index() {
    const [keyword, setKeyword] = useState('');
    return (
        <ShopMypageLayout title='고객센터' bottomNavigation>
            <Tabs defaultValue='faq' className='mt-3'>
                <TabsList className='bg-white p-0 flex justify-start gap-5 items-end h-auto border-b border-b-fill-normal-subtle rounded-none mx-4 '>
                    <TabsTrigger
                        className='p-0 border-b-2 text-[15px] font-normal  data-[state=active]:font-semibold rounded-none pb-2 border-transparent data-[state=active]:border-label-solid-default text-label-solid-subtler'
                        value={'faq'}
                    // onClick={(e) => { setSelectFilter(filter) }}
                    >
                        FAQ
                    </TabsTrigger>
                    <TabsTrigger
                        className='p-0 border-b-2 text-[15px] font-normal  data-[state=active]:font-semibold rounded-none pb-2 border-transparent data-[state=active]:border-label-solid-default text-label-solid-subtler'
                        value={'inquiryHistory'}
                    // onClick={(e) => { setSelectFilter(filter) }}
                    >
                        문의내역
                    </TabsTrigger>
                    <TabsTrigger
                        className='p-0 border-b-2 text-[15px] font-normal  data-[state=active]:font-semibold rounded-none pb-2 border-transparent data-[state=active]:border-label-solid-default text-label-solid-subtler'
                        value={'contactUs'}
                    // onClick={(e) => { setSelectFilter(filter) }}
                    >
                        문의하기
                    </TabsTrigger>
                    <TabsTrigger
                        className='p-0 border-b-2 text-[15px] font-normal  data-[state=active]:font-semibold rounded-none pb-2 border-transparent data-[state=active]:border-label-solid-default text-label-solid-subtler'
                        value={'notice'}
                    // onClick={(e) => { setSelectFilter(filter) }}
                    >
                        공지사항
                    </TabsTrigger>
                </TabsList>
                <TabsContent className='w-full mt-5 flex flex-col gap-5' value='faq'>
                    <div className='w-full px-4'>
                        <InputGroup
                            className={cn(
                                "rounded-sm border-border-solid-strong w-full h-10 focus-visible:shadow-none focus-visible:!border-border-solid-strong transition-all duration-300 has-[[data-slot=input-group-control]:focus-visible]:border-border-solid-strong",
                            )}
                        >
                            <InputGroupInput
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        // handleSearch();
                                    }
                                }}
                                className="w-full p-0 text-start pl-4 placeholder:text-label-solid-subtler placeholder:text-[15px]"
                                value={keyword}
                                placeholder='궁금하신 내용을 검색해보세요.'
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            {keyword && <InputGroupAddon align={'inline-end'} className='py-0'>
                                <ShopIconButton onClick={(e) => setKeyword('')} className='p-0 size-4 border-none'>
                                    <ShopIcon name='X' className='w-4 h-4 p-0.5 text-white bg-fill-solid-stronger rounded-full' />
                                </ShopIconButton>
                            </InputGroupAddon>}

                            <InputGroupAddon align="inline-end">
                                <div
                                    // onClick={handleSearch}
                                    className="text-label-solid-subtle border-label-normal-subtler flex size-4 items-center justify-center rounded-full cursor-pointer"
                                >
                                    <Search className="stroke-label-solid-default cursor-pointer" />
                                </div>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <Tabs defaultValue='all' className=''>
                        <TabsList className='px-4 h-auto bg-white pb-6 w-full'>
                            <div className=' p-0 w-full h-auto grid grid-cols-3 grid-rows-4 rounded-sm border border-border-solid-default'>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'all'}
                                >
                                    전체
                                </TabsTrigger>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'order'}
                                >
                                    주문/결제
                                </TabsTrigger>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'refunds'}
                                >
                                    취소/교환/반품
                                </TabsTrigger>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'delivery'}
                                >
                                    배송
                                </TabsTrigger>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'member'}
                                >
                                    회원/멤버쉽
                                </TabsTrigger>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'point'}
                                >
                                    바이네이션 포인트
                                </TabsTrigger>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'promotion'}
                                >
                                    프로모션/이벤트
                                </TabsTrigger>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'community'}
                                >
                                    커뮤니티
                                </TabsTrigger>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'buycle'}
                                >
                                    바이클
                                </TabsTrigger>
                                <TabsTrigger
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                    value={'buygent'}
                                >
                                    바이전트
                                </TabsTrigger>
                                <div
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                >
                                </div>
                                <div
                                    className='
                                    border-border-solid-default
                                    text-sm
                                    font-medium
                                    text-label-solid-default
                                    data-[state=active]:font-semibold
                                    data-[state=active]:text-white
                                    data-[state=active]:bg-fill-solid-strongest
                                    data-[state=active]:rounded-sm
                                    border-r border-b py-3.5 rounded-none 
                                    [&:nth-child(1)]:rounded-tl-sm
                                    [&:nth-child(3)]:border-r-0
                                    [&:nth-child(6)]:border-r-0
                                    [&:nth-child(9)]:border-r-0
                                    [&:nth-child(12)]:border-r-0
                                    [&:nth-child(10)]:border-b-0
                                    [&:nth-child(11)]:border-b-0
                                    [&:nth-child(12)]:border-b-0'
                                >
                                </div>
                            </div>

                        </TabsList>
                        <TabsContent value='all' className='mt-0'>
                            <Separator className='bg-border-normal-subtle !h-3' />
                            <div className='px-4 py-6'>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1" className='border-none'>
                                        <AccordionTrigger className='text-label-solid-default text-base font-semibold pb-4 border-b border-border-normal-subtle'>
                                            <div className='flex flex-col items-start gap-1'>
                                                <div>
                                                    [취소/교환/반품]
                                                </div>
                                                <div className='text-label-solid-default text-[15px] font-normal'>반품 완료되었는데 카드 금액이 청구 되었어요.</div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-4 text-sm px-6 py-7 bg-fill-normal-subtler'>
                                                <div className='flex flex-col gap-5'>
                                                    <div>
                                                        불량 및 하자가 있는 상품의 경우, 교환 또는 반품이 가능합니다.
                                                    </div>
                                                    <div>
                                                        <div>
                                                            교환 신청 방법
                                                        </div>
                                                        <ol className='list-decimal list-inside'>
                                                            <li>마이페이지 &#62; 주문관리 &#62; 주문 내역으로 이동</li>
                                                            <li>교환을 원하는 주문을 확인하고 '교환 신청' 버튼 클릭</li>
                                                            <li>교환 사유 선택 및 기재</li>
                                                            <li>회수지/배송지 확인 (회수지/배송지 변경 필요시 변경 버튼 클릭)</li>
                                                            <li>교환 배송비 확인</li>
                                                            <li>주문 및 개인정보 수집/이용 동의</li>
                                                            <li>'교환 신청하기' 버튼 클릭</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        ▶주문 내역 바로 가기
                                                    </div>
                                                </div>
                                                <div className='w-full text-center mt-5 flex flex-col gap-1'>
                                                    <div className='text-label-solid-subtler text-[15px] font-medium'>
                                                        찾으시는 내용이 없나요?
                                                    </div>
                                                    <Link className='underline text-base text-label-solid-default'>1:1 문의 바로가기</Link>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1" className='border-none'>
                                        <AccordionTrigger className='text-label-solid-default text-base font-semibold pb-4 border-b border-border-normal-subtle'>
                                            <div className='flex flex-col items-start gap-1'>
                                                <div>
                                                    [주문/결제]
                                                </div>
                                                <div className='text-label-solid-default text-[15px] font-normal'>주문은 어떻게 하나요?</div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-4 text-sm px-6 py-7 bg-fill-normal-subtler'>
                                                <div className='flex flex-col gap-5'>
                                                    <div>
                                                        불량 및 하자가 있는 상품의 경우, 교환 또는 반품이 가능합니다.
                                                    </div>
                                                    <div>
                                                        <div>
                                                            교환 신청 방법
                                                        </div>
                                                        <ol className='list-decimal list-inside'>
                                                            <li>마이페이지 &#62; 주문관리 &#62; 주문 내역으로 이동</li>
                                                            <li>교환을 원하는 주문을 확인하고 '교환 신청' 버튼 클릭</li>
                                                            <li>교환 사유 선택 및 기재</li>
                                                            <li>회수지/배송지 확인 (회수지/배송지 변경 필요시 변경 버튼 클릭)</li>
                                                            <li>교환 배송비 확인</li>
                                                            <li>주문 및 개인정보 수집/이용 동의</li>
                                                            <li>'교환 신청하기' 버튼 클릭</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        ▶주문 내역 바로 가기
                                                    </div>
                                                </div>
                                                <div className='w-full text-center mt-5 flex flex-col gap-1'>
                                                    <div className='text-label-solid-subtler text-[15px] font-medium'>
                                                        찾으시는 내용이 없나요?
                                                    </div>
                                                    <Link className='underline text-base text-label-solid-default'>1:1 문의 바로가기</Link>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1" className='border-none'>
                                        <AccordionTrigger className='text-label-solid-default text-base font-semibold pb-4 border-b border-border-normal-subtle'>
                                            <div className='flex flex-col items-start gap-1'>
                                                <div>
                                                    [회원/멤버쉽]
                                                </div>
                                                <div className='text-label-solid-default text-[15px] font-normal'>회원가입 시 본인인증이 필요한가요?</div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-4 text-sm px-6 py-7 bg-fill-normal-subtler'>
                                                <div className='flex flex-col gap-5'>
                                                    <div>
                                                        불량 및 하자가 있는 상품의 경우, 교환 또는 반품이 가능합니다.
                                                    </div>
                                                    <div>
                                                        <div>
                                                            교환 신청 방법
                                                        </div>
                                                        <ol className='list-decimal list-inside'>
                                                            <li>마이페이지 &#62; 주문관리 &#62; 주문 내역으로 이동</li>
                                                            <li>교환을 원하는 주문을 확인하고 '교환 신청' 버튼 클릭</li>
                                                            <li>교환 사유 선택 및 기재</li>
                                                            <li>회수지/배송지 확인 (회수지/배송지 변경 필요시 변경 버튼 클릭)</li>
                                                            <li>교환 배송비 확인</li>
                                                            <li>주문 및 개인정보 수집/이용 동의</li>
                                                            <li>'교환 신청하기' 버튼 클릭</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        ▶주문 내역 바로 가기
                                                    </div>
                                                </div>
                                                <div className='w-full text-center mt-5 flex flex-col gap-1'>
                                                    <div className='text-label-solid-subtler text-[15px] font-medium'>
                                                        찾으시는 내용이 없나요?
                                                    </div>
                                                    <Link className='underline text-base text-label-solid-default'>1:1 문의 바로가기</Link>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1" className='border-none'>
                                        <AccordionTrigger className='text-label-solid-default text-base font-semibold pb-4 border-b border-border-normal-subtle'>
                                            <div className='flex flex-col items-start gap-1'>
                                                <div>
                                                    [배송]
                                                </div>
                                                <div className='text-label-solid-default text-[15px] font-normal'>기본 배송지를 변경하고 싶어요</div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-col gap-4 text-sm px-6 py-7 bg-fill-normal-subtler'>
                                                <div className='flex flex-col gap-5'>
                                                    <div>
                                                        불량 및 하자가 있는 상품의 경우, 교환 또는 반품이 가능합니다.
                                                    </div>
                                                    <div>
                                                        <div>
                                                            교환 신청 방법
                                                        </div>
                                                        <ol className='list-decimal list-inside'>
                                                            <li>마이페이지 &#62; 주문관리 &#62; 주문 내역으로 이동</li>
                                                            <li>교환을 원하는 주문을 확인하고 '교환 신청' 버튼 클릭</li>
                                                            <li>교환 사유 선택 및 기재</li>
                                                            <li>회수지/배송지 확인 (회수지/배송지 변경 필요시 변경 버튼 클릭)</li>
                                                            <li>교환 배송비 확인</li>
                                                            <li>주문 및 개인정보 수집/이용 동의</li>
                                                            <li>'교환 신청하기' 버튼 클릭</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        ▶주문 내역 바로 가기
                                                    </div>
                                                </div>
                                                <div className='w-full text-center mt-5 flex flex-col gap-1'>
                                                    <div className='text-label-solid-subtler text-[15px] font-medium'>
                                                        찾으시는 내용이 없나요?
                                                    </div>
                                                    <Link className='underline text-base text-label-solid-default'>1:1 문의 바로가기</Link>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <ShopButton className='w-full h-auto py-3 font-medium text-[15px]' variant={'outline'}>
                                    문의 전체보기
                                    <ShopIcon name='Chevron-Right' className='size-5' />
                                </ShopButton>
                            </div>
                        </TabsContent>
                    </Tabs>
                </TabsContent>
            </Tabs>
        </ShopMypageLayout>
    )
}