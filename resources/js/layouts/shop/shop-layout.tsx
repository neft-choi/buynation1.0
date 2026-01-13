import { Toaster } from '@/components/ui/sonner'
import { useUiStore } from '@/hooks/use-ui-store';
import React, { useEffect, useRef } from 'react'
import ShopHeaderLayout from './home/shop-header-layout';
import ShopFooterLayout, { ShopFooterTabsNavigation } from './home/shop-footer-layout';

export default function ShopLayout({ children, isHeader = true, isFooter = true }: { children: React.ReactNode, isHeader?: boolean, isFooter?: boolean }) {
    const {
        categoryDrawerOpen,
        clickSearchBar,
        topButtonVisible,
        setCategoryDrawerOpen,
        lockMainScroll,
        unlockMainScroll,
        setTopButtonVisible,
    } = useUiStore();


    useEffect(() => {
        if (categoryDrawerOpen) {
            setCategoryDrawerOpen(false);
        }
        if (clickSearchBar) {
            lockMainScroll();
        } else {
            unlockMainScroll();
        }
    }, [clickSearchBar])

    return (
        <main>
            <Toaster position="top-right" />
            {isHeader &&
                <ShopHeaderLayout />
            }
            <div className='w-full min-h-screen bg-white'>{children}</div>
            <ShopFooterLayout />
            {isFooter &&
                <ShopFooterTabsNavigation />
            }
        </main>
    )
}
