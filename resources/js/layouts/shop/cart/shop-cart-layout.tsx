import { ShopButton } from '@/components/shop/shop-button';
import { ShopHeading } from '@/components/shop/shop-heading';
import { IconName } from '@/components/shop/shop-icon'
import { ShopBottomNavigation, ShopNavigation } from '@/components/shop/shop-navigation'
import ShopSlider from '@/components/shop/shop-slider';
import { Toaster } from '@/components/ui/sonner';
import { useCartStore } from '@/hooks/use-cart-store';
import { cn, formatKRW } from '@/lib/utils'
import { Product } from '@/types/shop/public';
import { usePage } from '@inertiajs/react';
import React, { ReactNode, useEffect, useRef } from 'react'
import ShopLayout from '../shop-layout';
import { SharedData } from '@/types';
import { CartData } from '@/pages/shop/cart';



export default function ShopCartLayout({ children, className, cartData, handlePrepareOrder, ...props }: React.ComponentProps<'div'> & { cartData: CartData; handlePrepareOrder: () => void; }) {
    const { recommandProducts } = usePage<SharedData>().props;
    return (
        <>
            <ShopLayout>
                <div className='w-full bg-background-strong' >
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
                            <ShopSlider type='1' dot={false} sliders={recommandProducts.data} >
                            </ShopSlider>
                        </div>
                    </section>
                </div>
            </ShopLayout>
            {cartData.data.items.length > 0 && (
                <ShopBottomNavigation handlePrepareOrder={handlePrepareOrder} cartData={cartData} />
            )}
        </>
    )
}
