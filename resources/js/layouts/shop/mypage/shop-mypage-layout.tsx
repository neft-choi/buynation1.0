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
import ShopLayout from '../shop-layout';

export default function ShopMypageLayout({ children, className, title, icon, bottomNavigation = false, ...props }: React.ComponentProps<'div'> & { title?: string; icon?: IconName; bottomNavigation?: boolean; }) {

    const { categoryDrawerOpen } = useUiStore();
    return (
        <ShopLayout>
            {children}
        </ShopLayout>
    )
}
