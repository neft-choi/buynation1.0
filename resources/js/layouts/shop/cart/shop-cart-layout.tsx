import { ShopButton } from '@/components/shop/shop-button';
import { ShopHeading } from '@/components/shop/shop-heading';
import { IconName } from '@/components/shop/shop-icon'
import { ShopBottomNavigation, ShopNavigation } from '@/components/shop/shop-navigation'
import ShopSlider from '@/components/shop/shop-slider';
import { Toaster } from '@/components/ui/sonner';
import { useCartStore } from '@/hooks/use-cart-store';
import { cn, formatKRW } from '@/lib/utils'
import { usePage } from '@inertiajs/react';
import React, { ReactNode, useEffect, useRef } from 'react'



export default function ShopCartLayout({ children, className, title, icon, ...props }: React.ComponentProps<'div'> & { title?: string; icon?: IconName }) {
    const { items, addItem } = useCartStore();
    const cartData = usePage().props;
    console.log('cartData', cartData);
    const bottomSheetHeight = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (bottomSheetHeight.current && bodyRef.current) {
            const offsetHeight = bottomSheetHeight.current.offsetHeight;
            const offsetWidth = bottomSheetHeight.current.offsetWidth;
            bodyRef.current.style.marginBottom = offsetHeight + 'px'
        }
    }, []);
    return (
        <div className={cn('w-full', className)} {...props}>
            <Toaster position="top-right" />
            <ShopNavigation title={title} icon={icon} />
            <div ref={bodyRef} className='w-full bg-background-strong' >
                {children}
                <div className='px-4 py-5  border-t flex flex-col gap-5'>
                    <div className='text-label-solid-default font-semibold text-base'>장바구니 안내</div>
                    <ul className="list-disc text-sm text-label-solid-subtle pl-4">
                        <li>
                            장바구니에는 최근 6개월 동안 담은 상품이 100개까지 보관됩니다.
                        </li>
                        <li>
                            한 번에 최대 20가지 종류의 상품을 주문하실 수 있습니다.
                        </li>

                    </ul>
                    <div className='w-full rounded-sm bg-gray-400 h-16'>

                    </div>
                </div>
                <section className='py-8 px-4 grid grid-cols-1 gap-4'>
                    <div className='grid gap-1'>
                        <ShopHeading>
                            이런 상품은 어때요?
                        </ShopHeading>
                    </div>
                    <div className='col-span-1'>
                        <ShopSlider type='1' dot={false} sliders={cartData.cartData.data} >

                        </ShopSlider>
                    </div>
                </section>
            </div>
            <ShopBottomNavigation ref={bottomSheetHeight} />
        </div>
    )
}
