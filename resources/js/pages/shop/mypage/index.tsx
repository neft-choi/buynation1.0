import { ShopIconButton } from '@/components/shop/shop-button'
import { ShopIcon } from '@/components/shop/shop-icon'
import ShopLatestItemContainer from '@/components/shop/shop-latest-item-container'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import { Link } from '@inertiajs/react'
import { latestItems } from './latest'
import { ShopHeading } from '@/components/shop/shop-heading'
import ShopSlider from '@/components/shop/shop-slider'
import ShopBanner from '@/components/shop/shop-banner'
import { Separator } from '@/components/ui/separator'

export default function Index() {
    return (
        <ShopMypageLayout title='마이페이지' bottomNavigation icon='Cart'>
            <div className='px-4 py-3.5 flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <div className='font-bold text-[22px] text-label-solid-strong'>홍길동님</div>
                    <div className='text-[13px] text-label-solid-subtle'>바이네이션에서 구매와 기부를 함께해보세요.</div>
                </div>
                <div className='bg-primary-normal rounded-md px-4 py-3.5 cursor-pointer  flex gap-2 items-center'>
                    <ShopIcon name='Coupon' className='text-white' /> <span className='text-label-solid-default text-[15px] font-semibold'>가입 축하 쿠폰 받기</span> <ShopIcon className='ml-auto' name='Chevron-Right' />
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='basis-1/2 px-5 py-4 border-border-normal-default border rounded-sm shadow-md'>
                        <div className='flex gap-1.5 items-center'>
                            <ShopIcon name='Coupon-Yellow' /> <span className='text-label-solid-default font-medium text-sm'>쿠폰</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='text-[22px] font-bold text-accent-strong'>2</span><span className='text-base text-label-solid-strong'>장</span>
                        </div>
                    </div>
                    <div className='basis-1/2 px-5 py-4 border-border-normal-default border rounded-sm shadow-md'>
                        <div className='flex gap-1.5 items-center'>
                            <ShopIcon name='Point-Yellow' /> <span className='text-label-solid-default font-medium text-sm'>포인트</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='text-[22px] font-bold text-accent-strong'>100</span><span className='text-base text-label-solid-strong'>P</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 py-6 flex flex-col gap-10'>
                <div className='flex justify-between px-5'>
                    <Link href={route('shop.mypage.order.index')} className='flex flex-col gap-2 justify-center items-center'>
                        <ShopIcon name='Document-Yellow' className='size-8' />
                        <div className='text-label-solid-default text-[13px] font-normal'>
                            주문내역
                        </div>
                    </Link>
                    <Link href={route('shop.mypage.like.index')} className='flex flex-col gap-2 justify-center items-center'>
                        <ShopIcon name='Heart-Yellow' className='size-8' />
                        <div className='text-label-solid-default text-[13px] font-normal'>
                            좋아요
                        </div>
                    </Link>
                    <Link href={route('shop.home.index')} className='flex flex-col gap-2 justify-center items-center'>
                        <ShopIcon name='Message-Square-Heart-Yellow' className='size-8' />
                        <div className='text-label-solid-default text-[13px] font-normal'>
                            리뷰
                        </div>
                    </Link>
                    <Link href={route('shop.mypage.latest.index')} className='flex flex-col gap-2 justify-center items-center'>
                        <ShopIcon name='Clock-Fading' className='size-8' />
                        <div className='text-label-solid-default text-[13px] font-normal'>
                            최근 본 상품
                        </div>
                    </Link>
                </div>
                <section className='grid grid-cols-1 gap-4'>
                    <div className='grid gap-1'>
                        <ShopHeading>
                            최근 본 상품
                        </ShopHeading>
                    </div>
                    <div className='col-span-1'>
                        {/* <ShopSlider type='1' dot={false} sliders={cateDatas} >

                        </ShopSlider> */}
                    </div>
                </section>
                <ShopBanner href='/shop/home' imgUrl='https://placehold.co/375x66' />
            </div>
            <Separator className='bg-border-solid-subtle !h-3' />
            <div className='px-4 py-6 flex flex-col gap-6'>
                <div className='border-b border-border-normal-subtle'>
                    <div className='text-label-solid-strong text-lg font-bold'>
                        주문관리
                    </div>
                    <div className='pt-5 pb-6 flex flex-col gap-6 '>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto '>
                            <ShopIcon name='Truck' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>주문/배송 조회</span>
                        </ShopIconButton>
                        <ShopIconButton href={route('shop.mypage.order.index')} className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Document' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>주문내역</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Box-Return' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>취소/교환/반품 내역</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Shoppingbag' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>자주구매 상품</span>
                        </ShopIconButton>
                    </div>
                </div>
                <div className='border-b border-border-normal-subtle'>
                    <div className='text-label-solid-strong text-lg font-bold'>
                        나의 활동 관리
                    </div>
                    <div className='pt-5 pb-6 flex flex-col gap-6'>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Message-Square-Heart' className='size-6 text-label-normal-default ' /> <span className='text-label-solid-default font-normal'>상품 리뷰</span>
                        </ShopIconButton>
                        <ShopIconButton href={route('shop.mypage.like.index')} className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Heart' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>좋아요</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Confetti' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>이벤트 참여 내역</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Bell-Plus' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>입고알림 내역</span>
                        </ShopIconButton>
                    </div>
                </div>
                <div className='border-b border-border-normal-subtle'>
                    <div className='text-label-solid-strong text-lg font-bold'>
                        나의 혜택 관리
                    </div>
                    <div className='pt-5 pb-6 flex flex-col gap-6'>
                        <ShopIconButton href={route('shop.mypage.coupon.index')} className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Coupon-Solid' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>쿠폰</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Point' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>바이네이션 포인트</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Heart-Handshake' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>기부 포인트</span>
                        </ShopIconButton>

                    </div>
                </div>
                <div className='border-b border-border-normal-subtle'>
                    <div className='text-label-solid-strong text-lg font-bold'>
                        나의 정보 관리
                    </div>
                    <div className='pt-5 pb-6 flex flex-col gap-6'>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Profile' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>회원정보 설정</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Pin' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>배송지 관리</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Bell-Dot' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>알림 목록</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Profile-X' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>회원 탈퇴</span>
                        </ShopIconButton>
                    </div>
                </div>
                <div className='border-b border-border-normal-subtle'>
                    <div className='text-label-solid-strong text-lg font-bold'>
                        고객센터
                    </div>
                    <div className='pt-5 pb-6 flex flex-col gap-6'>
                        <ShopIconButton href={route('shop.mypage.faq.index')} className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Message-Square-Warning' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>FAQ</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Pin' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>문의내역</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Square-Pen' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>문의하기</span>
                        </ShopIconButton>
                        <ShopIconButton className='w-full border-none !p-0 rounded-none justify-start h-auto'>
                            <ShopIcon name='Megaphone' className='size-6 text-label-normal-default' /> <span className='text-label-solid-default font-normal'>공지사항</span>
                        </ShopIconButton>
                    </div>
                </div>
                <div className=''>
                    <Link method='post' href={route('logout')} className='text-label-solid-subtle text-base font-medium'>로그아웃</Link>
                </div>
            </div>
        </ShopMypageLayout>
    )
}
