import { ShopButton } from '@/components/shop/shop-button';
import { ShopHeading } from '@/components/shop/shop-heading';
import { IconName } from '@/components/shop/shop-icon'
import { ShopBottomNavigation, ShopCartBottomNavigation, ShopNavigation } from '@/components/shop/shop-navigation'
import ShopSlider from '@/components/shop/shop-slider';
import { useCartStore } from '@/hooks/use-cart-store';
import { cn, formatKRW } from '@/lib/utils'
import React, { ReactNode, useEffect, useRef } from 'react'


export default function ShopOrderLayout({ children, className, title, icon, ...props }: React.ComponentProps<'div'> & { title?: string; icon?: IconName }) {
    const { items, addItem } = useCartStore();
    const bottomSheetHeight = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (bottomSheetHeight.current && bodyRef.current) {
            const offsetHeight = bottomSheetHeight.current.offsetHeight;
            bodyRef.current.style.marginBottom = offsetHeight + 'px'
        }
    }, []);
    return (
        <div className={cn('w-full', className)} {...props}>
            <ShopNavigation title={title} icon={icon} />
            <div ref={bodyRef} className='w-full' >
                {children}
            </div>
            <ShopCartBottomNavigation ref={bottomSheetHeight} />
        </div>
    )
}
