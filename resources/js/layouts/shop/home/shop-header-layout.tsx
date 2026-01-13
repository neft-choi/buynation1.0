import { ShopIconButton } from '@/components/shop/shop-button'
import { ShopIcon } from '@/components/shop/shop-icon'
import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import React, { forwardRef, use } from 'react'
import ShopSearchLayout from '../search/shop-search-layout'
import { useUiStore } from '@/hooks/use-ui-store'
import { ShopMenuCategoryDrawer } from '@/components/shop/shop-menu-category-drawer'
import ShopVanillaSlider from '@/components/shop/shop-vanilla-slider'
import { categories2, } from '@/pages/shop/home'
import { categoryMenus } from './shop-home-layout'
import { ShopFooterTabsNavigation } from './shop-footer-layout'
import { SharedData } from '@/types'
import ShopChip from '@/components/shop/shop-chip'
import { ShopNavigation } from '@/components/shop/shop-navigation'


export const ShopCategoryOpenLayout = (data: any) => {
    const {
        categoryDrawerOpen,
        topButtonVisible,
    } = useUiStore();
    return (
        <>
            <div className=' py-6 overflow-auto w-full bg-white h-screen'>
                <ShopVanillaSlider sliderClassName='gap-4.5'>
                    {categories2.map((category, index) => (
                        <div className='flex flex-col items-center gap-2' key={category.value}>
                            <ShopIconButton href={route('shop.category.index', { category_slug: category.href })} className={`min-w-16 min-h-16 ${category.value === 'recommend' ? 'bg-fill-solid-strongest' : 'bg-fill-solid-subtle'}`}>
                                {category.value === 'recommend' ?
                                    <div className='font-black  '>
                                        <span className='text-primary-normal'>바이클</span>
                                        <br />
                                        <span className='text-white'>추천</span>
                                    </div>
                                    : <div >
                                        <ShopIcon type='line' name={category.icon} className='size-6' />
                                    </div>}
                            </ShopIconButton>
                            <Link href={route('shop.category.index', { category_slug: category.href })} className='text-[13px] text-label-solid-default'>
                                {category.label}
                            </Link>
                        </div>

                    ))}
                </ShopVanillaSlider>
                <ShopMenuCategoryDrawer data={data.data.props.metaData.data.categories} />
                <ShopFooterTabsNavigation />
            </div>
        </>

    );
}
export const CategorySvgComponent = () => {
    return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.59623 0.709868C8.88318 -0.23663 10.2233 -0.236628 10.5102 0.70987L12.1897 6.24984C12.2867 6.56957 12.5369 6.81977 12.8566 6.9167L18.3966 8.59623C19.3431 8.88318 19.3431 10.2233 18.3966 10.5102L12.8566 12.1897C12.5369 12.2867 12.2867 12.5369 12.1897 12.8566L10.5102 18.3966C10.2233 19.3431 8.88318 19.3431 8.59623 18.3966L6.9167 12.8566C6.81977 12.5369 6.56957 12.2867 6.24984 12.1897L0.709868 10.5102C-0.23663 10.2233 -0.236628 8.88318 0.70987 8.59623L6.24984 6.9167C6.56957 6.81977 6.81977 6.56957 6.9167 6.24984L8.59623 0.709868Z" fill="url(#paint0_linear_5179_1796)" />
        <defs>
            <linearGradient id="paint0_linear_5179_1796" x1="9.55322" y1="-2.44678" x2="9.55322" y2="21.5532" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFDB62" />
                <stop offset="1" stopColor="#EFB800" />
            </linearGradient>
        </defs>
    </svg>)
}
const ShopHeaderLayout = forwardRef<HTMLDivElement, React.ComponentProps<'header'>>(
    ({ className, children, ...props }, ref) => {

        const { setClickSearchBar, clickSearchBar, categoryDrawerOpen, topButtonVisible, } = useUiStore();

        const data = usePage<SharedData>();
        return (
            <header className={cn('w-full z-50 bg-white grid gap-1.5', className, categoryDrawerOpen && 'fixed top-0 left-0 ', clickSearchBar && 'fixed top-0 left-0')} {...props}>
                <div className='text-2xl font-bold w-full flex pt-2 px-4 '>
                    {/* 로고구역 */}
                    <div className='w-full'>
                        <Link href={'/'} onClick={() => setClickSearchBar(false)}>
                            Buynation
                        </Link>
                    </div>
                    <div className='flex items-center gap-4 w-full justify-end relative'>
                        <ShopIconButton className='rounded-none border-none shadow-none size-6'>
                            <ShopIcon type='normal' name='알림' className='size-6' />

                        </ShopIconButton>
                        <ShopIconButton href={route('shop.cart.index')} className='rounded-none border-none shadow-none size-6 '>
                            <ShopIcon name='장바구니' className='size-6' /><ShopChip variant={'tag'} className='absolute size-[18px] -right-2 top-0 rounded-full p-0 font-bold text-xs'>{data.props.cart.count}</ShopChip>
                        </ShopIconButton>
                    </div>
                </div>
                <div className='py-2 grid place-items-center w-full shrink-0'>
                    {/* 검색창바 구역 */}
                    <ShopSearchLayout />
                    {
                        categoryDrawerOpen && <ShopCategoryOpenLayout data={data} />
                    }
                </div>
                <div className='flex flex-row px-4 bg-white rounded-none w-full overflow-y-hidden overflow-x-auto justify-start gap-6 text-label-solid-subtler h-auto '>
                    {data.props.metaData?.data.tags.map((category, index) => (
                        <Link className={`${data.url.startsWith('/shop/' + category.value) && ' border-b-2 border-label-solid-strong text-label-solid-strong font-semibold'}  rounded-none px-0 whitespace-nowrap text-[14px] inline-flex text-center items-center justify-center shrink-0`} href={'/shop/' + category.value} key={category.label} preserveState preserveScroll >
                            {category.value === 'value_pick' && <CategorySvgComponent />}
                            <span className=''>
                                {category.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </header>
        )
    }
)

export default ShopHeaderLayout
