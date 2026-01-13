import { ShopButton, ShopIconButton } from '@/components/shop/shop-button'
import ShopChip from '@/components/shop/shop-chip'
import { ShopIcon } from '@/components/shop/shop-icon'
import ShopInput from '@/components/shop/shop-input'
import ShopToggle from '@/components/shop/shop-toggle'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ShopOrderLayout from '@/layouts/shop/order/shop-order-layout'
import { formatKRW } from '@/lib/utils'
import { Link } from '@inertiajs/react'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'

export default function Index() {
    return (
        <ShopOrderLayout title='주문하기'>
            <section className='w-full '>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue='item-1'
                >
                    <AccordionItem value="item-1" className='border-none'>
                        <AccordionTrigger className='px-4 py-5 text-label-solid-strong font-bold text-lg'>
                            주문자 정보
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col gap-4 text-sm px-4'>
                                <div className='grid grid-cols-3'>
                                    <div className='font-medium text-label-solid-subtle'>
                                        보내는 분
                                    </div>
                                    <div className='font-medium text-[15px] text-label-solid-default col-span-2'>
                                        홍길동
                                    </div>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <div className='font-medium text-label-solid-subtle'>
                                        휴대폰번호
                                    </div>
                                    <div className='font-medium text-[15px] text-label-solid-default col-span-2'>
                                        010-1234-5678
                                    </div>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <div className='font-medium text-label-solid-subtle'>
                                        이메일
                                    </div>
                                    <div className='font-medium text-[15px] text-label-solid-default col-span-2'>
                                        picnic@naver.com
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Separator className='bg-border-normal-subtle !h-3' />
                <div className='w-full flex flex-col gap-5 px-4 py-5'>
                    <div className='flex justify-between items-center  '>
                        <div className='text-label-solid-strong font-bold text-lg'>배송지</div>
                        <div>
                            <ShopIconButton className='w-auto py-2 px-3 h-auto border-border-solid-strong'>
                                <ShopIcon name='Arrow-Right-Left' className='size-4' />
                                <span>변경</span>
                            </ShopIconButton>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-[15px] font-semibold text-label-solid-default'>회사 (기본)</div>
                        <div className='text-label-solid-default text-[15px] font-normal'>경기도 성남시 분당구 서현로 180번지 13 서현프라자 505호</div>
                    </div>
                    <Separator className='!h-[1px] bg-border-solid-subtle' />
                    <div className='flex flex-col gap-2'>
                        <div className='text-[15px] font-semibold text-label-solid-default'>배송요청사항</div>
                        <Select>
                            <SelectTrigger className="w-full rounded-sm px-4 py-3 !text-[15px] !text-label-solid-default !h-auto border-border-solid-strong">
                                <SelectValue placeholder="부재 시 문 앞에 놓아주세요" className='' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Separator className='bg-border-normal-subtle !h-3' />
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue='item-1'

                >
                    <AccordionItem value="item-1" className='border-none'>
                        <AccordionTrigger className='mx-4 py-5 pb-4 text-label-solid-strong font-bold text-lg border-border-normal-subtle border-b'>
                            <div className='w-full flex justify-between items-center pr-0.5'>
                                <span className='flex gap-3 items-center'>
                                    <span>주문상품</span>
                                    <span className='text-sm font-medium text-label-solid-subtler'>내일 11/10(월) 도착예정</span>
                                </span>
                                <span className='text-base font-semibold text-label-solid-default'>2건</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col gap-4 text-sm px-4 py-5'>
                                <div className='grid grid-cols-4'>
                                    <div className=''>
                                        <img src="https://placehold.co/81x104" className='rounded-sm aspect-[81/104] object-cover w-full' alt="" />
                                    </div>
                                    <div className='col-span-3 pl-4 flex flex-col items-start justify-center gap-1.5'>
                                        <div className='text-[15px] font-normal text-label-solid-default'>[선물세트] 마음담은 배 세트 7.5kg</div>
                                        <div className='flex font-bold text-base text-label-solid-default gap-2 items-center'>
                                            <div>{formatKRW(54900)}</div>
                                            <Separator className='bg-border-normal-default w-[1px] !h-3' orientation='vertical' />

                                            <div>1건</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-4'>
                                    <div className=''>
                                        <img src="https://placehold.co/81x104" className='rounded-sm aspect-[81/104] object-cover w-full' alt="" />
                                    </div>
                                    <div className='col-span-3 pl-4 flex flex-col items-start justify-center gap-1.5'>
                                        <div className='text-[15px] font-normal text-label-solid-default'>[선물세트] 마음담은 배 세트 7.5kg</div>
                                        <div className='flex font-bold text-base text-label-solid-default gap-2 items-center'>
                                            <div>{formatKRW(54900)}</div>
                                            <Separator className='bg-border-normal-default w-[1px] !h-3' orientation='vertical' />

                                            <div>1건</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-1 mx-4 bg-fill-normal-default rounded-sm px-4 py-5'>
                                <div className='font-semibold text-[15px] text-label-solid-default'>확인해주세요</div>
                                <div className='mt-1'>
                                    <ul className="list-disc text-sm text-label-solid-subtle pl-4">
                                        <li>
                                            동시 주문이 많은 상품은 결제 후에도 품절될 수 있습니다.
                                        </li>
                                        <li>
                                            품절 상품만 부분 취소되며, 나머지 상품은 정상 배송됩니다.
                                        </li>
                                        <li>
                                            품절로 인한 전체 주문 취소는 불가 합니다.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Separator className='bg-border-normal-subtle !h-3' />
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue='item-1'

                >
                    <AccordionItem value="item-1" className='border-none'>
                        <AccordionTrigger className='px-4 py-5 text-label-solid-strong font-bold text-lg'>
                            <div className='w-full flex justify-between items-center pr-0.5'>
                                <span className='flex gap-3 items-center'>
                                    <span>쿠폰 적용</span>

                                </span>
                                <span className='text-base font-semibold text-label-solid-default'>보유 1개</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='px-4 w-full flex flex-col gap-3'>
                                <ShopIconButton className='w-full h-auto rounded-sm px-4 py-3 justify-between'>
                                    <span className='text-[15px] font-medium text-label-solid-default '>
                                        쿠폰 할인
                                    </span>
                                    <div className='flex gap-2 items-center'>
                                        <ShopChip className='bg-red-50 rounded-full text-xs font-semibold text-accent-strong py-1.5 px-2.5'>최대적용중</ShopChip>
                                        <div className='flex gap-0.5 items-center'>
                                            <span className='text-accent-strong text-[15px] font-semibold '>
                                                {formatKRW(8000)}
                                            </span>
                                            <ShopIcon name='Chevron-Right' className='size-4' />
                                        </div>
                                    </div>
                                </ShopIconButton>
                                <div className='flex justify-end'>
                                    <span className='font-medium text-[15px] text-label-solid-default mr-2'>최대 할인 적용</span>
                                    <ShopToggle />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Separator className='bg-border-normal-subtle !h-3' />
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue='item-1'
                >
                    <AccordionItem value="item-1" className='border-none'>
                        <AccordionTrigger className='px-4 py-5 text-label-solid-strong font-bold text-lg'>
                            <div className='w-full flex justify-between items-center pr-0.5'>
                                <span className='flex gap-3 items-center'>
                                    <span>포인트</span>
                                </span>
                                <span className='text-base font-semibold text-label-solid-default'>0원</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='px-4 w-full flex flex-col gap-3'>
                                <div className='w-full flex justify-between'>
                                    <div className='font-medium text-[15px] text-label-solid-default'>바이네이션 포인트</div>
                                    <div className='flex gap-1'>
                                        <div className='font-medium text-[15px] text-label-solid-default'>
                                            보유
                                        </div>
                                        <div className='font-semibold text-label-solid-subtler text-[15px]'>
                                            0P
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex justify-between gap-2'>
                                    <InputGroup className='h-auto shrink rounded-sm bg-fill-normal-strong has-[[data-slot=input-group-control]:focus-visible]:border-border-solid-strong'>
                                        <InputGroupInput className='placeholder:text-label-normal-subtler text-label-normal-subtler' placeholder='0' />
                                        <InputGroupAddon align="inline-end">
                                            <div
                                                className="text-label-solid-subtle border-label-normal-subtler flex size-4 items-center justify-center rounded-full cursor-pointer"
                                            >
                                                P
                                            </div>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <ShopButton className='w-auto py-3.5 px-4 bg-fill-solid-default text-label-solid-subtler font-medium text-base'>
                                        전액사용
                                    </ShopButton>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Separator className='bg-border-normal-subtle !h-3' />
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue='item-1'

                >
                    <AccordionItem value="item-1" className='border-none'>
                        <AccordionTrigger className='px-4 py-5 text-label-solid-strong font-bold text-lg'>
                            결제 예정 금액
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col gap-4 text-sm px-4'>
                                <div className='flex justify-between items-center'>
                                    <div className='font-medium text-label-solid-subtle'>
                                        상품수
                                    </div>
                                    <div className='font-medium text-[15px] text-label-solid-default col-span-2'>
                                        3개
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='font-medium text-label-solid-subtle'>
                                        상품금액
                                    </div>
                                    <div className='font-medium text-[15px] text-label-solid-default col-span-2'>
                                        {formatKRW(95800)}
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='font-medium text-label-solid-subtle'>
                                        배송비
                                    </div>
                                    <div className='font-medium text-[15px] text-label-solid-default col-span-2'>
                                        {formatKRW(95800)}

                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='font-medium text-label-solid-subtle'>
                                        할인금액
                                    </div>
                                    <div className='font-medium text-[15px] text-label-solid-default col-span-2'>
                                        {formatKRW(-95800)}

                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='font-medium text-label-solid-subtle'>
                                        할인금액
                                    </div>
                                    <div className='font-medium text-[15px] col-span-2 text-accent-strong'>
                                        {formatKRW(-95800)}

                                    </div>
                                </div>
                            </div>
                            <Separator className='!h-[1px] bg-border-solid-subtle my-5 mx-4' />
                            <div className=' px-4 flex justify-between items-center'>
                                <div className='text-label-solid-default font-medium text-base'>총 결제 금액</div>
                                <div className='text-[22px] font-bold text-label-solid-default'>
                                    {formatKRW(83400)}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Separator className='bg-border-normal-subtle !h-3' />
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue='item-1'

                >
                    <AccordionItem value="item-1" className='border-none'>
                        <AccordionTrigger className='px-4 py-5 text-label-solid-strong font-bold text-base'>
                            위 내용을 확인했으며, 결제에 동의합니다.
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col gap-4 text-sm p-4 bg-background-strong'>
                                <div className='text-label-solid-default flex justify-between'>
                                    <div>
                                        개인정보 수집, 이용 및 처리 동의
                                    </div>
                                    <div className='text-label-solid-subtler'>
                                        <Link className='underline'>보기</Link>
                                    </div>
                                </div>
                                <div className='text-label-solid-default flex justify-between'>
                                    <div>
                                        전자지급 결제대행 서비스 이용약관 동의
                                    </div>
                                    <div className='text-label-solid-subtler'>
                                        <Link className='underline'>보기</Link>
                                    </div>
                                </div>
                                <div className='text-label-solid-default flex justify-between'>
                                    <div>
                                        선불전자지급수단 이용약관 동의
                                    </div>
                                    <div className='text-label-solid-subtler'>
                                        <Link className='underline'>보기</Link>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </ShopOrderLayout>
    )
}
