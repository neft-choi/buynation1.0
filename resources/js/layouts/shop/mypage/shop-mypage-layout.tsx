import { IconName, ShopIcon } from '@/components/shop/shop-icon'

import { cn } from '@/lib/utils'
import React, { useEffect, useRef } from 'react'
import { ShopBottomNavigation, ShopNavigation } from '@/components/shop/shop-navigation'
import { Head, Link } from '@inertiajs/react';
import ShopFooterLayout, { ShopFooterTabsNavigation } from '../home/shop-footer-layout';
import { useUiStore } from '@/hooks/use-ui-store';
import ShopVanillaSlider from '@/components/shop/shop-vanilla-slider';
import { categories2 } from '@/pages/shop/home';
import { ShopIconButton } from '@/components/shop/shop-button';
import { ShopMenuCategoryDrawer } from '@/components/shop/shop-menu-category-drawer';
import { categoryMenus } from '../home/shop-home-layout';
import ShopHeaderLayout, { ShopCategoryOpenLayout } from '../home/shop-header-layout';
import { Toaster } from '@/components/ui/sonner';

export default function ShopMypageLayout({ children, className, title, icon, bottomNavigation = false, ...props }: React.ComponentProps<'div'> & { title?: string; icon?: IconName; bottomNavigation?: boolean; }) {

    const { categoryDrawerOpen } = useUiStore();
    return (
        <main className={cn('w-full flex flex-col min-h-screen overflow-auto', className)} {...props}>
            <div className='py-2 grid place-items-center w-full shrink-0'>
                {/* 검색창바 구역 */}
                {/* <ShopSearchLayout /> */}
                {
                    categoryDrawerOpen && <ShopCategoryOpenLayout />
                }
                {/* <ShopSearch /> */}
            </div>
            <ShopNavigation title={title} icon={icon} />
            <div className='w-full' id='mypageBody'>
                {children}
            </div>

            <ShopFooterLayout className='bg-fill-solid-strongest px-4 py-8 text-white grid gap-8 pb-24 relative'>
            </ShopFooterLayout >
            <ShopFooterTabsNavigation />
        </main>
    )
}
