import { Link, router } from '@inertiajs/react';
import React, { forwardRef } from 'react'
import { IconName, KoIconName, ShopIcon } from './shop-icon';
import { ShopButton, ShopIconButton } from './shop-button';
import { cn, formatKRW } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { CartData } from '@/pages/shop/cart';

interface ShopNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    icon?: KoIconName | KoIconName[];
}

const handleOrder = () => {
    router.visit(route('shop.order.index'))
}

export const ShopCartBottomNavigation = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div ref={ref} className='w-full text-label-solid-default fixed bottom-0 bg-white z-50 shadow-2xl'>
                <div className='flex flex-col text-sm'>
                    <div className='px-4 pt-3 pb-2'>
                        <ShopButton onClick={handleOrder} className='w-full'>{formatKRW(41000)} 주문하기</ShopButton>
                    </div>
                    <div className='text-xs text-label-solid-subtler w-full text-center mb-3'>
                        결제 전 <span className='underline'>이용약관 및 정보제공</span> 동의를 확인해주세요.</div>
                </div>
            </div>
        )
    }
)

export const ShopBottomNavigation = forwardRef<HTMLDivElement, React.ComponentProps<'div'> & { cartData: CartData }>(
    ({ className, children, cartData, ...props }, ref) => {
        const { totalPrice, items } = cartData.data
        const totalSale = items.reduce(
            (sum, item) => sum + (item.price.price - item.price.sale) * item.quantity,
            0
        )
        return (
            <div ref={ref} className={cn(className, 'w-full text-label-solid-default sticky bottom-0 bg-white z-50 shadow-2xl')}>
                <div className='bg-fill-solid-subtler text-center text-[13px] font-medium py-2'>
                    11월 5일(월) 도착 예정
                </div>
                <div className=' flex flex-col gap-1 text-sm'>
                    <div className='flex justify-between px-3 pt-3'>
                        <div className='text-label-solid-subtler font-light'>총 할인금액</div>
                        <div className='font-medium text-label-solid-default'>{formatKRW(-totalSale)}</div>
                    </div>
                    <div className='flex justify-between px-3'>
                        <div className='text-label-solid-subtler font-light'>배송비</div>
                        <div className='font-medium text-label-solid-default'>{formatKRW(3000)}</div>
                    </div>
                    <div className='px-4 py-3'>
                        <ShopButton onClick={handleOrder} className='w-full'>{formatKRW(totalPrice)} 주문하기</ShopButton>
                    </div>
                </div>
            </div>
        )
    }
)

export function ShopNavigation({ title, icon, className }: ShopNavigationProps) {
    return (
        <div className={cn('w-full grid grid-cols-3 h-14 place-items-center content-center px-4 text-label-solid-default sticky top-0 bg-white shrink-0 z-50', className)}>
            <div className='w-full flex justify-start items-center cursor-pointer'>
                <ShopIconButton onClick={() => history.back()} className='size-6 border-none bg-transparent'>
                    <ShopIcon name={'펼침(왼쪽)'} className='size-6' />
                </ShopIconButton>
            </div>
            <div className='w-full flex justify-center items-center text-lg font-semibold'>
                {title && title}
            </div>
            {icon &&
                <div className='w-full flex justify-end items-center cursor-pointer gap-6'>
                    {Array.isArray(icon)
                        ? icon.map(
                            (icon) => (
                                <ShopIconButton key={icon} className='size-6 border-none bg-transparent rounded-none'>
                                    <ShopIcon name={icon} className='size-6' />
                                </ShopIconButton>)
                        ) : <ShopIconButton key={icon} className='size-6 border-none bg-transparent rounded-none'>
                            <ShopIcon name={icon} className='size-6' />
                        </ShopIconButton>

                    }
                </div>
            }
        </div>
    )
}
