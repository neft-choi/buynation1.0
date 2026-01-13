import { ShopIconButton } from '@/components/shop/shop-button';
import { ShopIcon } from '@/components/shop/shop-icon';
import { ShopMenuCategoryDrawer } from '@/components/shop/shop-menu-category-drawer';
import ShopVanillaSlider from '@/components/shop/shop-vanilla-slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useUiStore } from '@/hooks/use-ui-store';
import { cn } from '@/lib/utils'
import { categories2 } from '@/pages/shop/home';
import { Link } from '@inertiajs/react'
import React, { forwardRef, useEffect } from 'react'
import { categoryMenus } from './shop-home-layout';
import ShopHeaderLayout from './shop-header-layout';
type ShopFooterProps = React.HTMLAttributes<HTMLElement>;



export const ShopFooterTabsNavigation = () => {
    const { setCategoryDrawerOpen, setTopButtonVisible, topButtonVisible, categoryDrawerOpen } = useUiStore();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setTopButtonVisible(true);
            } else {
                setTopButtonVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='fixed left-0 bottom-0 w-full bg-white z-10' id="bottomNavigation">
            {
                topButtonVisible && !categoryDrawerOpen &&
                <ShopIconButton className='absolute bottom-26 right-4' variant={'black'} onClick={() => { window?.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99992 1L8.99992 15C8.99992 15.5523 8.55221 16 7.99993 16C7.44764 16 6.99993 15.5523 6.99993 15L6.99992 1C6.99992 0.447715 7.44764 4.82823e-08 7.99992 0C8.55221 -4.82823e-08 8.99992 0.447715 8.99992 1Z" fill="white" />
                        <path d="M1.70696 8.70703C1.31643 9.09756 0.683418 9.09756 0.292893 8.70703C-0.097631 8.31651 -0.0976311 7.68349 0.292893 7.29297L7.29289 0.292969C7.68342 -0.0975555 8.31643 -0.0975556 8.70695 0.292969L15.707 7.29297C16.0975 7.68349 16.0975 8.31651 15.707 8.70703C15.3164 9.09755 14.6834 9.09755 14.2929 8.70703L7.99992 2.41406L1.70696 8.70703Z" fill="white" />
                    </svg>
                </ShopIconButton>
            }

            <div className='h-11 my-1.5 px-3 grid grid-cols-5 place-items-center'>
                <div className='flex flex-col items-center cursor-pointer' onClick={() => {
                    setCategoryDrawerOpen((prev) => !prev)
                }}>
                    <ShopIconButton className='border-none shadow-none w-auto rounded-none flex-col h-auto !p-0 gap-0'>
                        <ShopIcon name='Mune' className='size-6 shrink-0' />
                        <p className='text-xs text-label-solid-default font-medium'>
                            카테고리
                        </p>
                    </ShopIconButton>
                </div>
                <div className='flex flex-col items-center  cursor-pointer'>
                    <ShopIconButton className='border-none shadow-none w-auto rounded-none flex-col h-auto !p-0 gap-0'>
                        <ShopIcon name='Search' className='size-6 shrink-0' />
                        <p className='text-xs text-label-solid-default font-medium'>
                            검색
                        </p>
                    </ShopIconButton>
                </div>
                <div className='flex flex-col items-center'>
                    <ShopIconButton href='/' className='bg-primary-normal font-bold text-2xl absolute -top-3 border-none shadow-md'>B</ShopIconButton>
                </div>
                <div className='flex flex-col items-center  cursor-pointer'>
                    <ShopIconButton className='border-none shadow-none w-auto rounded-none flex-col h-auto !p-0 gap-0'>
                        <ShopIcon name='Chat' className='size-6 shrink-0' />
                        <p className='text-xs text-label-solid-default font-medium'>
                            커뮤니티
                        </p>
                    </ShopIconButton>
                </div>
                <div className='flex flex-col items-center  cursor-pointer'>
                    <ShopIconButton href={route('shop.mypage.index')} className='border-none shadow-none w-auto rounded-none flex-col h-auto !p-0 gap-0'>
                        <ShopIcon name='Profile' className='size-6 shrink-0' />
                        <p className='text-xs text-label-solid-default font-medium '>
                            마이
                        </p>
                    </ShopIconButton>
                </div>
            </div>
        </div>
    )
}
const ShopFooterLayout = forwardRef<HTMLDivElement, ShopFooterProps>(
    ({ className, children, ...props }, ref) => {
        const footerRef = ref as React.RefObject<HTMLDivElement>;
        const {
            categoryDrawerOpen,
            topButtonVisible,
            setCategoryDrawerOpen,
        } = useUiStore();
        return (
            <footer className={cn('w-full bg-fill-solid-strongest px-4 py-8 text-white grid gap-8 pb-24 relative', className)} {...props}>
                {/* 푸터영역 */}
                <div className='grid gap-2'>
                    <p className='text-base font-medium'>
                        고객센터
                    </p>
                    <p className='text-2xl font-bold'>1234-5678</p>
                    <p className='font-light text-sm text-label-solid-subtler'>평일 09:00 ~ 18:00</p>
                </div>
                <div className='grid gap-4 text-sm text-white/60'>
                    <Link>회사소개</Link>
                    <Link>이용약관</Link>
                    <Link>개인정보처리방침</Link>
                    <Link>이용안내</Link>
                </div>
                <div className='w-full bg-border-normal-subtle h-0.5'></div>
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1" className='border-none'>
                            <AccordionTrigger className='p-0 pb-4 text-label-solid-subtler '>Buynation</AccordionTrigger>
                            <AccordionContent className="grid grid-cols-3 gap-2 text-label-solid-subtler text-sm ">
                                <div>법인명(상호)</div>
                                <div className='col-span-2'>주식회사 느프트</div>
                                <div>주소</div>
                                <div className='col-span-2'>경기도 성남시 분당구 서현로180번길 13 서현프라자 505호</div>
                                <div>대표자</div>
                                <div className='col-span-2'>황성인</div>
                                <div>전화</div>
                                <div className='col-span-2'>010-8997-6229</div>
                                <div>개인정보관리책임자</div>
                                <div className='col-span-2'>주식회사 느프트
                                    <div>
                                        (nike2001@neft.pics)
                                    </div>
                                </div>
                                <div>사업자등록번호</div>
                                <div className='col-span-2'>123-00-12345</div>
                                <div>통신판매업신고</div>
                                <div className='col-span-2'>제2025-성남분당-0000호</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className='text-center text-xs text-label-solid-subtler'>Copyright © neft. All rights reserved.</div>
                </div>

            </footer>
        )
    }
)

export default ShopFooterLayout
