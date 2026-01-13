import { ShopButton, ShopIconButton } from '@/components/shop/shop-button'
import { ShopIcon } from '@/components/shop/shop-icon'
import { BottomComponent } from '@/components/shop/shop-product-item'
import ShopSlider from '@/components/shop/shop-slider'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import ShopProductLayout from '@/layouts/shop/product/shop-product-layout'
import { formatKRW } from '@/lib/utils'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ShopProgress } from '@/components/shop/shop-progress'
import ShopChip from '@/components/shop/shop-chip'
import { DetailItemResponse } from '@/types/shop/product'

const sections = [
    { id: 'info', label: '상품정보' },
    { id: 'refund', label: '교환/반품' },
    { id: 'review', label: '리뷰' },
    { id: 'inquiry', label: '문의' },
]


export default function Show({ productDetailData }: { productDetailData: DetailItemResponse }) {
    const { product, detail } = productDetailData.data

    console.log(detail);
    const [activeId, setActiveId] = useState('info')
    const navRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    )

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id)
                }
                console.log()
            },
            {
                rootMargin: `-${navRef?.current?.clientHeight}px 0px -100% 0px`, // sticky nav 보정
                threshold: 0,
            }
        )

        sections.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <ShopProductLayout>
            <div className=''>
                <ShopSlider sliders={product} dot type='4' />
                {/* 배열로주면 그때함 */}
                <div className='px-4 py-6'>
                    <ShopIconButton className='w-auto h-auto border-none rounded-none gap-0.5 !p-0'>
                        <span className='font-semibold text-label-solid-subtler'>
                            과일나라
                        </span>
                        <ShopIcon name='펼침(오른쪽)' className='size-3 text-label-solid-subtler' />
                    </ShopIconButton>
                    <div className='mt-1 flex justify-between items-center'>
                        <div className='text-xl font-bold text-label-solid-default'>{product.title}</div>
                        <div>
                            <BottomComponent purchaseCount={product.purchaseCount} rating={product.rating} />
                        </div>
                    </div>
                    <div className='mt-2.5 flex items-center justify-start gap-1.5'>
                        <div className='text-[22px] font-bold text-label-solid-default'>{product.price.discountRate}%</div>
                        <div className='text-[22px] font-bold text-label-solid-default'>{formatKRW(product.price.sale)}</div>
                        <div className='text-sm font-medium text-label-solid-subtler line-through'>{formatKRW(product.price.price)}</div>
                    </div>
                    {/* 가입  축하? 일단 보류 */}
                    {/* <div className=' flex items-center justify-start gap-1.5'>
                        <div className='text-[22px] font-bold text-accent-strong'>52%</div>
                        <div className='text-[22px] font-bold text-accent-strong'>{formatKRW(6500)}</div>
                        <div className='text-[15px] font-semibold text-accent-strong'>가입 축하 할인가</div>
                    </div> */}
                    {/* 쿠폰 이미지 영역? */}
                    <div className='bg-amber-50 h-12 rounded-sm mt-2.5'></div>
                    {/* 쿠폰 이미지 영역? */}

                    <div className='mt-5 grid grid-cols-4 text-sm border-t border-border-normal-subtler pt-[14px]'>
                        <div className='text-label-solid-subtle'>
                            배송정보
                        </div>
                        <div className='col-span-3 flex flex-col gap-0.5'>
                            <div>
                                {detail.shippingInfo}
                            </div>
                            <div>
                                배송비 {formatKRW(detail.shippingFee)} ({detail.freeShippingPolicy})
                            </div>
                            <div className='text-label-solid-subtler'>
                                {detail.estimatedArrival}
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 grid grid-cols-4 text-sm  border-t border-border-normal-subtler pt-[14px]'>
                        <div className='text-label-solid-subtle'>
                            무이자
                        </div>
                        <div className='col-span-3 flex flex-col gap-0.5'>
                            <div>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1" className='border-none'>
                                        <AccordionTrigger className='p-0 text-label-solid-default'>카드사별 무이자 혜택</AccordionTrigger>
                                        <AccordionContent className="grid text-label-solid-subtler text-sm ">
                                            {detail.interestFreeBenefit}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                            </div>
                        </div>
                    </div>
                    <div className='mt-5 grid grid-cols-4 text-sm border-t border-border-normal-subtler pt-[14px]'>
                        <div className='text-label-solid-subtle'>
                            포인트
                        </div>
                        <div className='col-span-3 flex flex-col gap-0.5'>
                            <div>
                                {detail.pointRate}% 바이네이션 포인트 적립
                            </div>

                        </div>
                    </div>
                </div>
                <Separator className='bg-border-solid-subtle !h-3' />
                <div ref={navRef} className='sticky top-0 bg-white p-0 w-full items-center h-auto border-b border-b-fill-normal-subtle rounded-none grid grid-cols-4 text-center z-10'>

                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`p-0 border-b-2 text-[15px] font-normal py-[14px] rounded-none pb-2 border-transparent text-label-solid-subtler ${activeId === section.id ? '!font-semibold !border-label-solid-default !text-label-solid-default' : ''}`}
                            onClick={() => {
                                const el = document.getElementById(section.id)
                                if (!el) return

                                const y =
                                    el.getBoundingClientRect().top +
                                    window.scrollY -
                                    navRef.current?.clientHeight! // 네브바 높이 보정

                                window.scrollTo({
                                    top: y,
                                    // behavior: 'smooth',
                                })
                            }}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

                <div className='flex flex-col m-0 mb-2 p-0'
                >

                    <div
                        id='info'
                    >
                        <img className='mb-3' src="https://placehold.co/600x400" alt="" />
                        <img className='mb-3' src="https://placehold.co/600x400" alt="" />
                        <div className='w-full pt-0 p-4'>
                            <ShopButton className='w-full font-medium text-[15px]' variant={'outline'}>
                                상품설명 더보기
                                <ShopIcon name='펼침(아래)' className='size-5' />
                            </ShopButton>
                        </div>
                    </div>
                    <Separator className='bg-border-solid-subtle !h-3' />
                    {/* 상세페이지 */}
                    <div id='refund'>

                        <div className='w-full px-4 pt-6' >
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                                defaultValue='item-1'
                            >
                                <AccordionItem value="item-1" className='border-none' >
                                    <AccordionTrigger className='p-0 pb-2.5 text-label-solid-strong font-bold text-lg border-b border-border-solid-strong'>
                                        상품필수정보
                                    </AccordionTrigger>

                                    <div className='my-6'>
                                        <AccordionContent>
                                            <div className='grid grid-cols-4 text-sm p-0 pb-[14px] border-b border-border-normal-subtle'>
                                                <div className='text-label-solid-subtle'>
                                                    내용물의 용량 또는 중량
                                                </div>
                                                <div className='col-span-3 flex flex-col gap-0.5'>
                                                    <div>
                                                        {detail.weight}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                        <AccordionContent >
                                            <div className='grid grid-cols-4 text-sm p-0 pb-[14px] border-b border-border-normal-subtle'>
                                                <div className='text-label-solid-subtle'>
                                                    제품주요사양
                                                </div>
                                                <div className='col-span-3 flex flex-col gap-0.5'>
                                                    <div>
                                                        {detail.mainSpec}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                        <AccordionContent >
                                            <div className='grid grid-cols-4 text-sm p-0 pb-[14px] border-b border-border-normal-subtle'>
                                                <div className='text-label-solid-subtle'>
                                                    사용기한
                                                </div>
                                                <div className='col-span-3 flex flex-col gap-0.5'>
                                                    <div>
                                                        {detail.expirationDate}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                        <AccordionContent >
                                            <div className='grid grid-cols-4 text-sm p-0 pb-[14px] border-b border-border-normal-subtle'>
                                                <div className='text-label-solid-subtle'>
                                                    사용방법
                                                </div>
                                                <div className='col-span-3 flex flex-col gap-0.5'>
                                                    <div>
                                                        {detail.usageMethod}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                        <AccordionContent >
                                            <div className='grid grid-cols-4 text-sm p-0 pb-[14px] border-b border-border-normal-subtle'>
                                                <div className='text-label-solid-subtle'>
                                                    사용할때 <br /> 주의사항
                                                </div>
                                                <div className='col-span-3 flex flex-col gap-0.5'>
                                                    <div>
                                                        {detail.precautions}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                        <AccordionContent >
                                            <div className='grid grid-cols-4 text-sm p-0 pb-[14px] border-b border-border-normal-subtle'>
                                                <div className='text-label-solid-subtle'>
                                                    품질보증기준
                                                </div>
                                                <div className='col-span-3 flex flex-col gap-0.5'>
                                                    <div>
                                                        {detail.qualityGuarantee}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='px-4 py-3 mt-6 bg-fill-solid-subtle rounded-sm flex justify-between'>
                                                <div className='flex gap-1 items-center'>
                                                    <ShopIcon name='알림' className='text-label-solid-subtle' />
                                                    <div className='text-sm font-medium text-label-solid-default'>
                                                        상품 정보에 문제가 있나요?
                                                    </div>
                                                </div>
                                                <div className='text-label-solid-subtle flex gap-0.5 items-center'>
                                                    <div className='text-[13px] font-medium'>

                                                        신고하기
                                                    </div>
                                                    <ShopIcon name='펼침(오른쪽)' className='size-4 text-label-solid-subtle' />
                                                </div>
                                            </div>
                                        </AccordionContent>

                                    </div>

                                </AccordionItem>
                            </Accordion>
                        </div>
                        {/* 교환/반품안내 */}
                        <div className='w-full px-4 pt-6'>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                                defaultValue='item-1'

                            >
                                <AccordionItem value="item-1" className='border-none'>
                                    <AccordionTrigger className='p-0 pb-2.5 text-label-solid-strong font-bold text-lg border-b border-border-solid-strong'>
                                        교환/반품안내
                                    </AccordionTrigger>
                                    <div className='my-6'>
                                        <AccordionContent>
                                            <div className='grid grid-cols-4 gap-6 text-sm p-0 pb-[14px] border-b border-border-normal-subtle'>
                                                <div className='text-label-solid-subtle'>
                                                    교환/반품 신청 기간
                                                </div>
                                                <div className='col-span-3 flex flex-col gap-0.5'>
                                                    <div>
                                                        {detail.returnPeriod}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                        <AccordionContent >
                                            <div className='grid grid-cols-4 gap-6 text-sm p-0 pb-[14px] border-b border-border-normal-subtle'>
                                                <div className='text-label-solid-subtle'>
                                                    교환/반품 유의사항
                                                </div>
                                                <div className='col-span-3 flex flex-col gap-0.5'>
                                                    <div>
                                                        {detail.returnPolicy}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                        <AccordionContent >
                                            <div className='grid grid-cols-4 gap-6 text-sm p-0 pb-[14px] border-b border-border-normal-subtle'>
                                                <div className='text-label-solid-subtle'>
                                                    교환/반품이 불가한 경우
                                                </div>
                                                <div className='col-span-3 flex flex-col gap-0.5'>
                                                    <div>
                                                        {detail.nonReturnableCases}
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </div>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <Separator className='bg-border-solid-subtle !h-3' />
                    {/* 리뷰 */}

                    <div className='w-full px-4 py-6' id='review'>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue='item-1'

                        >
                            <AccordionItem value="item-1" className='border-none'>
                                <AccordionTrigger className='p-0 pb-2.5 text-label-solid-strong font-bold text-lg border-b border-border-solid-strong'>
                                    리뷰
                                </AccordionTrigger>

                                <AccordionContent className='p-0 pb-2.5 text-label-solid-strong font-bold text-lg '>

                                    <div className='mt-6 flex flex-col pt-4 pb-8 items-center gap-2'>
                                        <div className='flex gap-1 items-center'>
                                            <ShopIcon name='별' className='text-accent-strong size-6' />
                                            <ShopIcon name='별' className='text-accent-strong size-6' />
                                            <ShopIcon name='별' className='text-accent-strong size-6' />
                                            <ShopIcon name='별' className='text-accent-strong size-6' />
                                            <ShopIcon name='별'
                                                className='text-fill-solid-strong size-6' />
                                            <div className='pl-2 text-label-solid-default font-semibold text-2xl'>4.6</div>
                                        </div>
                                        <div className='text-sm font-normal text-label-solid-subtle'>총 312개의 리뷰</div>
                                    </div>

                                    <div className='flex flex-col gap-7'>
                                        <div className='flex items-start justify-between gap-4'>
                                            <div className='text-[13px] text-label-solid-default font-medium w-12 text-center py-1 bg-fill-solid-default rounded-xs shrink-0'>
                                                기능
                                            </div>
                                            <div className='w-full grid grid-cols-5 grid-rows-3 gap-1.5 items-center'>
                                                <div className='shrink-0 text-sm font-medium text-label-solid-default col-span-2'>아주 마음에 들어요</div>
                                                <ShopProgress indicatorColor='bg-accent-strong' className='bg-border-normal-subtle h-1 w-full rounded-full col-span-2' value={72} />
                                                <div className='font-semibold text-sm text-end'>72%</div>
                                                <div className='shrink-0 text-sm font-medium text-label-solid-subtle col-span-2'>마음에 들어요</div>
                                                <ShopProgress indicatorColor='bg-border-solid-strong' className='bg-border-normal-subtle h-1 w-full rounded-full col-span-2' value={31} />
                                                <div className='font-semibold text-sm text-end'>31%</div>
                                                <div className='shrink-0 text-sm font-medium text-label-solid-subtle col-span-2'>마음에 들지 않아요</div>
                                                <ShopProgress indicatorColor='bg-border-solid-strong' className='bg-border-normal-subtle h-1 w-full rounded-full col-span-2' value={6} />
                                                <div className='font-semibold text-sm text-end'>6%</div>
                                            </div>
                                        </div>
                                        <div className='flex items-start justify-between gap-4'>
                                            <div className='text-[13px] text-label-solid-default font-medium w-12 text-center py-1 bg-fill-solid-default rounded-xs shrink-0'>
                                                디자인
                                            </div>
                                            <div className='w-full grid grid-cols-5 grid-rows-3 gap-1.5 items-center'>
                                                <div className='shrink-0 text-sm font-medium text-label-solid-default col-span-2'>아주 마음에 들어요</div>
                                                <ShopProgress indicatorColor='bg-accent-strong' className='bg-border-normal-subtle h-1 w-full rounded-full col-span-2' value={72} />
                                                <div className='font-semibold text-sm text-end'>72%</div>
                                                <div className='shrink-0 text-sm font-medium text-label-solid-subtle col-span-2'>마음에 들어요</div>
                                                <ShopProgress indicatorColor='bg-border-solid-strong' className='bg-border-normal-subtle h-1 w-full rounded-full col-span-2' value={31} />
                                                <div className='font-semibold text-sm text-end'>31%</div>
                                                <div className='shrink-0 text-sm font-medium text-label-solid-subtle col-span-2'>마음에 들지 않아요</div>
                                                <ShopProgress indicatorColor='bg-border-solid-strong' className='bg-border-normal-subtle h-1 w-full rounded-full col-span-2' value={6} />
                                                <div className='font-semibold text-sm text-end'>6%</div>
                                            </div>
                                        </div>
                                        <div className='flex items-start justify-between gap-4'>
                                            <div className='text-[13px] text-label-solid-default font-medium w-12 text-center py-1 bg-fill-solid-default rounded-xs shrink-0'>
                                                색상
                                            </div>
                                            <div className='w-full grid grid-cols-5 grid-rows-3 gap-1.5 items-center'>
                                                <div className='shrink-0 text-sm font-medium text-label-solid-default col-span-2'>화면과 같아요</div>
                                                <ShopProgress indicatorColor='bg-accent-strong' className='bg-border-normal-subtle h-1 w-full rounded-full col-span-2' value={72} />
                                                <div className='font-semibold text-sm text-end'>72%</div>
                                                <div className='shrink-0 text-sm font-medium text-label-solid-subtle col-span-2'>화면과 비슷해요</div>
                                                <ShopProgress indicatorColor='bg-border-solid-strong' className='bg-border-normal-subtle h-1 w-full rounded-full col-span-2' value={31} />
                                                <div className='font-semibold text-sm text-end'>31%</div>
                                                <div className='shrink-0 text-sm font-medium text-label-solid-subtle col-span-2'>화면과 달라요</div>
                                                <ShopProgress indicatorColor='bg-border-solid-strong' className='bg-border-normal-subtle h-1 w-full rounded-full col-span-2' value={6} />
                                                <div className='font-semibold text-sm text-end'>6%</div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='w-full mt-9'>
                                        <div className='w-full'>
                                            <div className='text-base font-semibold text-label-solid-default'>
                                                사진&동영상
                                            </div>
                                            <div className='mt-3 flex gap-0.5 h-20'>
                                                <div className='bg-gray-900 basis-1/4 first:rounded-tl-xs first:rounded-bl-xs'></div>
                                                <div className='bg-gray-900  basis-1/4'></div>
                                                <div className='bg-gray-900  basis-1/4'></div>
                                                <div className='bg-gray-900  basis-1/4 last:rounded-tr-xs last:rounded-br-xs'></div>
                                            </div>
                                        </div>
                                        <div className='mt-9 w-full'>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    <span className='text-sm font-semibold text-accent-strong'>
                                                        67개
                                                    </span>
                                                    <span className='text-sm font-normal text-label-solid-default'>
                                                        의 리뷰가 있습니다
                                                    </span>
                                                </div>
                                                <div className='text-sm flex gap-1'>
                                                    <span className='font-semibold'>추천순</span><span className='text-border-solid-default'>|</span><span className='font-medium text-label-solid-subtler'>최신순</span>
                                                </div>
                                            </div>
                                            <Separator className='mt-3 mb-5 bg-border-solid-strong' />
                                            <div className='flex flex-col gap-4'>
                                                <div className=' w-full flex flex-col gap-3 border-b border-border-normal-subtle pb-4'>
                                                    <div className='flex w-full justify-between'>
                                                        <div className='flex items-center  gap-2'>
                                                            <ShopChip className='px-2 py-1 !text-xs font-semibold' variant={'tag'} size={'sm'}>BEST</ShopChip>
                                                            <span className='text-sm font-semibold'>
                                                                홍길동

                                                            </span>
                                                        </div>
                                                        <div className='flex gap-0.5 items-center'>
                                                            <ShopIcon name='별' className='text-accent-strong size-4' />
                                                            <ShopIcon name='별' className='text-accent-strong size-4' />
                                                            <ShopIcon name='별' className='text-accent-strong size-4' />
                                                            <ShopIcon name='별' className='text-accent-strong size-4' />
                                                            <ShopIcon name='별'
                                                                className='text-fill-solid-strong size-4' />
                                                        </div>
                                                    </div>
                                                    <div className='font-semibold text-[15px] text-label-solid-subtler'>
                                                        퀸 니나 포도 1송이
                                                    </div>
                                                    <div className='text-[15px] font-normal'>
                                                        색이 너무 너무 이뻐서 구매했어요 포도 한알 한알 보석 같은 색을 기대 하였어요 화면에 보여지는 색 (화면 속 요즘 퀸 니나 포도 같은색 )연구를 하고 있어서 구매하였습니다.솔직히 개봉 하면서 색이 너무 진해서 살짝 실망떨어져 있는 한 알을 맛 보았는데 와 ~ 달고 맛있어요 중요한 것은 깔끔한 깨끗한 단맛 역시 틀리구나!!!알도 크고요 싱싱하고 껍질까지 먹어도 아주 거슬리지 않고요 제가 색 연구하려다 떨어트려서 ㅜㅜ포도가 작아졌어요 “아마도 화면의 퀸 니나 포도 사진은 아주 공들여 찍은 사진 인 것 같아요”우선 색 공부는 살짝 실패 조만간 다시 시도 핑계로 재구매 하려고 하고 있어요😋
                                                    </div>
                                                    <div className='flex gap-0.5 h-20'>
                                                        <div className='bg-gray-900 basis-1/4 first:rounded-tl-xs first:rounded-bl-xs'></div>
                                                        <div className='bg-gray-900  basis-1/4'></div>
                                                        <div className='bg-gray-900  basis-1/4'></div>
                                                        <div className='bg-gray-900  basis-1/4 last:rounded-tr-xs last:rounded-br-xs'></div>
                                                    </div>
                                                    <div className='flex flex-wrap gap-2 justify-start'>
                                                        <ShopChip className='px-2 py-1 text-xs font-semibold'>기능 - 아주 마음에 들어요</ShopChip>
                                                        <ShopChip className='px-2 py-1 text-xs font-semibold'>디자인 - 아주 마음에 들어요</ShopChip>
                                                        <ShopChip className='px-2 py-1 text-xs font-semibold'>색상 - 화면과 같아요</ShopChip>
                                                    </div>
                                                    <div className='flex items-center justify-between'>
                                                        <span className='text-label-solid-subtler font-normal text-[13px]'>2025.11.12</span>
                                                        <ShopIconButton className='w-auto text-[13px] font-medium h-auto px-4 py-2.5 text-label-solid-subtle'>
                                                            <ShopIcon name='좋아요' className='size-4 text-label-solid-subtle' />도움돼요 6
                                                        </ShopIconButton>
                                                    </div>
                                                </div>
                                                <div className=' w-full flex flex-col gap-3 border-b border-border-normal-subtle pb-4'>
                                                    <div className='flex w-full justify-between'>
                                                        <div className='flex items-center  gap-2'>

                                                            <span className='text-sm font-semibold'>
                                                                홍길동

                                                            </span>
                                                        </div>
                                                        <div className='flex gap-0.5 items-center'>
                                                            <ShopIcon name='별' className='text-accent-strong size-4' />
                                                            <ShopIcon name='별' className='text-accent-strong size-4' />
                                                            <ShopIcon name='별' className='text-accent-strong size-4' />
                                                            <ShopIcon name='별' className='text-accent-strong size-4' />
                                                            <ShopIcon name='별'
                                                                className='text-fill-solid-strong size-4' />
                                                        </div>
                                                    </div>
                                                    <div className='font-semibold text-[15px] text-label-solid-subtler'>
                                                        퀸 니나 포도 1송이
                                                    </div>
                                                    <div className='text-[15px] font-normal'>
                                                        색이 너무 너무 이뻐서 구매했어요 포도 한알 한알 보석 같은 색을 기대 하였어요 화면에 보여지는 색 (화면 속 요즘 퀸 니나 포도 같은색 )연구를 하고 있어서 구매하였습니다.솔직히 개봉 하면서 색이 너무 진해서 살짝 실망떨어져 있는 한 알을 맛 보았는데 와 ~ 달고 맛있어요 중요한 것은 깔끔한 깨끗한 단맛 역시 틀리구나!!!알도 크고요 싱싱하고 껍질까지 먹어도 아주 거슬리지 않고요 제가 색 연구하려다 떨어트려서 ㅜㅜ포도가 작아졌어요 “아마도 화면의 퀸 니나 포도 사진은 아주 공들여 찍은 사진 인 것 같아요”우선 색 공부는 살짝 실패 조만간 다시 시도 핑계로 재구매 하려고 하고 있어요😋
                                                    </div>
                                                    <div className='flex gap-0.5 h-20'>
                                                        <div className='bg-gray-900 basis-1/4 first:rounded-tl-xs first:rounded-bl-xs'></div>
                                                        <div className='bg-gray-900  basis-1/4'></div>
                                                        <div className='bg-gray-900  basis-1/4'></div>
                                                        <div className='bg-gray-900  basis-1/4 last:rounded-tr-xs last:rounded-br-xs'></div>
                                                    </div>
                                                    <div className='flex flex-wrap gap-2 justify-start'>
                                                        <ShopChip className='px-2 py-1 text-xs font-semibold'>기능 - 아주 마음에 들어요</ShopChip>
                                                        <ShopChip className='px-2 py-1 text-xs font-semibold'>디자인 - 아주 마음에 들어요</ShopChip>
                                                        <ShopChip className='px-2 py-1 text-xs font-semibold'>색상 - 화면과 같아요</ShopChip>
                                                    </div>
                                                    <div className='flex items-center justify-between'>
                                                        <span className='text-label-solid-subtler font-normal text-[13px]'>2025.11.12</span>
                                                        <ShopIconButton className='w-auto text-[13px] font-medium h-auto px-4 py-2.5 text-label-solid-subtle'>
                                                            <ShopIcon name='좋아요' className='size-4 text-label-solid-subtle' />도움돼요 6
                                                        </ShopIconButton>
                                                    </div>
                                                </div>
                                            </div>
                                            <ShopButton className='w-full h-auto font-medium text-[15px]' variant={'outline'}>
                                                67개 리뷰 전체보기
                                                <ShopIcon name='펼침(오른쪽)' className='size-5' />
                                            </ShopButton>

                                        </div>
                                    </div>
                                </AccordionContent>

                            </AccordionItem>
                        </Accordion>
                    </div>
                    <Separator className='bg-border-solid-subtle !h-3' />
                    {/* 문의 */}
                    <div className='w-full px-4 pt-6 mb-6' id='inquiry'>
                        <div className='flex justify-between items-center mb-8'>
                            <div className='text-label-solid-strong font-bold text-lg '>
                                상품 문의
                            </div>
                            <ShopButton variant={'secondary'} className='w-auto text-sm font-semibold h-auto'>문의하기</ShopButton>
                        </div>
                        <div className='flex flex-col gap-3 mb-6'>
                            <div className='py-4 flex flex-col gap-1 border-b border-border-normal-subtle'>
                                <div>
                                    포도에 스크래치가 너무 많아요.
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span className='font-semibold text-sm text-status-good'>답변완료</span>
                                    <Separator orientation='vertical' className='!w-[1px] !h-3 bg-border-solid-default' />
                                    <span className='text-sm font-medium text-label-solid-subtler'>홍길동</span>
                                    <Separator orientation='vertical' className='!w-[1px] !h-3 bg-border-solid-default' />
                                    <span className='text-sm font-medium text-label-solid-subtler'>2025.11.10</span>
                                </div>
                            </div>
                            <div className='py-4 flex flex-col gap-1 border-b border-border-normal-subtle'>
                                <div className='text-label-solid-subtler flex items-center text-[15px]'>
                                    <span>
                                        비밀글입니다.
                                    </span>

                                    <ShopIcon name='잠금' className='size-4 ml-1 text-label-normal-subtler' />
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <span className='font-semibold text-sm text-status-good'>답변완료</span>
                                    <Separator orientation='vertical' className='!w-[1px] !h-3 bg-border-solid-default' />
                                    <span className='text-sm font-medium text-label-solid-subtler'>홍길동</span>
                                    <Separator orientation='vertical' className='!w-[1px] !h-3 bg-border-solid-default' />
                                    <span className='text-sm font-medium text-label-solid-subtler'>2025.11.10</span>
                                </div>
                            </div>
                        </div>
                        <ShopButton className='w-full h-auto font-medium text-[15px]' variant={'outline'}>
                            문의 전체보기
                            <ShopIcon name='펼침(오른쪽)' className='size-5' />
                        </ShopButton>
                    </div>
                </div>
            </div>
        </ShopProductLayout>
    )
}
