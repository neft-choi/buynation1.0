
import { ShopIconButton } from '@/components/shop/shop-button'
import ShopChip from '@/components/shop/shop-chip'
import { ShopIcon } from '@/components/shop/shop-icon'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import { formatKRW } from '@/lib/utils'

export default function Index() {
    return (
        <ShopMypageLayout title='쿠폰' bottomNavigation className='bg-background-strong min-h-screen h-screen'>
            <div className='flex justify-between items-center px-4 pt-5 pb-3'>
                <div className='text-[15px] font-semibold '>
                    <span className='font-normal text-label-solid-default'>전체</span>
                    <span className='text-accent-strong'> 4개</span>
                </div>
                <ShopIconButton className='w-auto border-none items-center h-auto bg-transparent !p-0 gap-0'>
                    <ShopIcon name='Plus' className='size-4 place-self-center' />
                    <div className='text-[15px] font-medium text-label-solid-default'>
                        쿠폰 등록
                    </div>
                </ShopIconButton>
            </div>
            <div className='flex flex-col gap-3 px-4'>
                <div className='w-full flex'>
                    <div className='flex flex-col gap-5 w-full bg-white border border-primary-normal rounded-tr-lg rounded-br-lg px-6 py-5'>
                        <div className='w-full'>
                            <div>가입 축하 쿠폰</div>
                            <div>전상품 50% 쿠폰</div>
                            <div>{formatKRW(50000)} 이하 상품 구매 시 적용</div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex gap-1.5'>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2'>D-7</ShopChip>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2 text-label-solid-subtle bg-fill-solid-subtle'>앱전용</ShopChip>
                            </div>
                            <div className='text-label-solid-subtle text-sm'>2025.11.20까지</div>
                        </div>
                    </div>
                    <div className='w-auto bg-primary-normal px-6 rounded-tl-lg rounded-bl-lg flex items-center font-bold text-base text-label-solid-default break-keep'>1장</div>
                </div>
                <div className='w-full flex'>
                    <div className='flex flex-col gap-5 w-full bg-white border border-primary-normal rounded-tr-lg rounded-br-lg px-6 py-5'>
                        <div className='w-full'>
                            <div>가입 축하 쿠폰</div>
                            <div>전상품 50% 쿠폰</div>
                            <div>{formatKRW(50000)} 이하 상품 구매 시 적용</div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex gap-1.5'>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2'>D-7</ShopChip>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2 text-label-solid-subtle bg-fill-solid-subtle'>앱전용</ShopChip>
                            </div>
                            <div className='text-label-solid-subtle text-sm'>기간제한 없음</div>
                        </div>
                    </div>
                    <div className='w-auto bg-primary-normal px-6 rounded-tl-lg rounded-bl-lg flex items-center font-bold text-base text-label-solid-default break-keep'>1장</div>
                </div>
                <div className='w-full flex'>
                    <div className='flex flex-col gap-5 w-full bg-white border border-primary-normal rounded-tr-lg rounded-br-lg px-6 py-5'>
                        <div className='w-full'>
                            <div>가입 축하 쿠폰</div>
                            <div>전상품 50% 쿠폰</div>
                            <div>{formatKRW(50000)} 이하 상품 구매 시 적용</div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex gap-1.5'>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2'>D-7</ShopChip>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2 text-label-solid-subtle bg-fill-solid-subtle'>앱전용</ShopChip>
                            </div>
                            <div className='text-label-solid-subtle text-sm'>2025.11.20까지</div>
                        </div>
                    </div>
                    <div className='w-auto bg-primary-normal px-6 rounded-tl-lg rounded-bl-lg flex items-center font-bold text-base text-label-solid-default break-keep'>1장</div>
                </div>
                <div className='w-full flex'>
                    <div className='flex flex-col gap-5 w-full bg-white border border-primary-normal rounded-tr-lg rounded-br-lg px-6 py-5'>
                        <div className='w-full'>
                            <div>가입 축하 쿠폰</div>
                            <div>전상품 50% 쿠폰</div>
                            <div>{formatKRW(50000)} 이하 상품 구매 시 적용</div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex gap-1.5'>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2'>D-7</ShopChip>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2 text-label-solid-subtle bg-fill-solid-subtle'>앱전용</ShopChip>
                            </div>
                            <div className='text-label-solid-subtle text-sm'>2025.11.20까지</div>
                        </div>
                    </div>
                    <div className='w-auto bg-primary-normal px-6 rounded-tl-lg rounded-bl-lg flex items-center font-bold text-base text-label-solid-default break-keep'>1장</div>
                </div>
                <div className='w-full flex'>
                    <div className='flex flex-col gap-5 w-full bg-white border border-primary-normal rounded-tr-lg rounded-br-lg px-6 py-5'>
                        <div className='w-full'>
                            <div>가입 축하 쿠폰</div>
                            <div>전상품 50% 쿠폰</div>
                            <div>{formatKRW(50000)} 이하 상품 구매 시 적용</div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex gap-1.5'>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2'>D-7</ShopChip>
                                <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2 text-label-solid-subtle bg-fill-solid-subtle'>앱전용</ShopChip>
                            </div>
                            <div className='text-label-solid-subtle text-sm'>2025.11.20까지</div>
                        </div>
                    </div>
                    <div className='w-auto bg-primary-normal px-6 rounded-tl-lg rounded-bl-lg flex items-center font-bold text-base text-label-solid-default break-keep'>1장</div>
                </div>
            </div>
        </ShopMypageLayout>
    )
}
