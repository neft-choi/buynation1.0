
import { ShopButton, ShopIconButton } from '@/components/shop/shop-button'
import { ShopIcon } from '@/components/shop/shop-icon'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import { formatKRW } from '@/lib/utils'
import { Link } from '@inertiajs/react'

export default function Index() {
    return (
        <ShopMypageLayout title='주문내역' bottomNavigation>
            <div className='w-full flex gap-2 px-4 py-3.5'>
                <div className='bg-fill-solid-subtle px-2.5 py-1.5 rounded-xs text-label-solid-subtle'>1개월</div>
                <div className='bg-fill-solid-strongest px-2.5 py-1.5 rounded-xs text-white'>3개월</div>
                <div className='bg-fill-solid-subtle px-2.5 py-1.5 rounded-xs text-label-solid-subtle'>6개월</div>
                <div className='bg-fill-solid-subtle px-2.5 py-1.5 rounded-xs text-label-solid-subtle'>1년</div>
                <Select>
                    <SelectTrigger className="w-auto p-2 rounded-xs h-auto text-[13px] font-medium border border-border-normal-default shadow-none bg-white">
                        <SelectValue placeholder="직접입력" className='' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='w-full flex flex-col px-4'>
                <div className='w-full border-b pt-5'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='text-base text-label-solid-default font-semibold'>2025.11.01</div>
                        <Link className='flex items-center '>
                            <span className='text-sm text-label-solid-default font-normal'>
                                주문 상세보기
                            </span>
                            <ShopIcon name='Chevron-Right' className='size-4' /></Link>
                    </div>
                    <div className='mt-2 px-4 py-2.5 bg-fill-solid-subtle rounded-sm text-[15px] text-label-solid-default font-semibold'>
                        결제완료
                    </div>
                    <div>
                        <div className='flex items-start gap-4 py-3'>
                            <img src="https://placehold.co/80x100" alt="" className=' aspect-[8/10] rounded-sm object-cover' />
                            <div className='flex flex-col items-start justify-center gap-1.5'>
                                <div className='text-[15px] font-normal text-label-solid-default'>[선물세트] 마음담은 배 세트 7.5kg</div>
                                <div className='flex font-bold text-base text-label-solid-default gap-2 items-center'>
                                    <div>{formatKRW(54900)}</div>
                                    <Separator className='bg-border-normal-default w-[1px] !h-3' orientation='vertical' />

                                    <div>1건</div>
                                </div>
                            </div>
                            <ShopIconButton className='p-3 rounded-sm h-auto shrink-0 size-11'>
                                <ShopIcon name='Cart' className='size-5' />
                            </ShopIconButton>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 justify-between mt-2 mb-5'>
                        <ShopButton className='w-full py-2.5 text-sm font-medium ' variant={'outline'}>주문취소</ShopButton>
                        <ShopButton className='w-full py-2.5 text-sm font-medium ' variant={'outline'}>주문취소</ShopButton>
                    </div>
                </div>
                <div className='w-full border-b pt-5'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='text-base text-label-solid-default font-semibold'>2025.11.01</div>
                        <Link className='flex items-center '>
                            <span className='text-sm text-label-solid-default font-normal'>
                                주문 상세보기
                            </span>
                            <ShopIcon name='Chevron-Right' className='size-4' /></Link>
                    </div>
                    <div className='mt-2 px-4 py-2.5 bg-fill-solid-subtle rounded-sm text-[15px] text-label-solid-default font-semibold'>
                        <span className='text-label-solid-subtle'>
                            배송완료
                        </span>
                        <span className='ml-3 text-[13px] font-normal text-label-solid-subtle'>10/15(목) 도착</span>
                    </div>
                    <div>
                        <div className='flex items-start gap-4 py-3 border-b bordering-border-solid-subtle last:border-none'>
                            <img src="https://placehold.co/80x100" alt="" className=' aspect-[8/10] rounded-sm object-cover' />
                            <div className='flex flex-col items-start justify-center gap-1.5'>
                                <div className='text-[15px] font-normal text-label-solid-default'>[선물세트] 마음담은 배 세트 7.5kg</div>
                                <div className='flex font-bold text-base text-label-solid-default gap-2 items-center'>
                                    <div>{formatKRW(54900)}</div>
                                    <Separator className='bg-border-normal-default w-[1px] !h-3' orientation='vertical' />

                                    <div>1건</div>
                                </div>
                            </div>
                            <ShopIconButton className='p-3 rounded-sm h-auto shrink-0 size-11'>
                                <ShopIcon name='Cart' className='size-5' />
                            </ShopIconButton>
                        </div>
                        <div className='flex items-start gap-4 py-3 border-b bordering-border-solid-subtle last:border-none'>
                            <img src="https://placehold.co/80x100" alt="" className=' aspect-[8/10] rounded-sm object-cover' />
                            <div className='flex flex-col items-start justify-center gap-1.5'>
                                <div className='text-[15px] font-normal text-label-solid-default'>[선물세트] 마음담은 배 세트 7.5kg</div>
                                <div className='flex font-bold text-base text-label-solid-default gap-2 items-center'>
                                    <div>{formatKRW(54900)}</div>
                                    <Separator className='bg-border-normal-default w-[1px] !h-3' orientation='vertical' />

                                    <div>1건</div>
                                </div>
                            </div>
                            <ShopIconButton className='p-3 rounded-sm h-auto shrink-0 size-11'>
                                <ShopIcon name='Cart' className='size-5' />
                            </ShopIconButton>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 justify-between mt-2 mb-5'>
                        <ShopButton className='w-full py-2.5 text-sm font-medium ' variant={'outline'}>배송조회</ShopButton>
                        <ShopButton className='w-full py-2.5 text-sm font-medium ' variant={'outline'}>교환/반품</ShopButton>
                        <ShopButton className='w-full py-2.5 text-sm font-medium ' variant={'outline'}>리뷰 작성</ShopButton>
                    </div>
                </div>
            </div>
        </ShopMypageLayout>
    )
}
