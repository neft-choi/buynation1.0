import { formatKRW } from '@/lib/utils';
import { Label } from '../ui/label';
import React from 'react'
import { ShopIconButton } from './shop-button';
import { ShopCheckbox } from './shop-checkbox';
import { ShopIcon } from './shop-icon';
import ShopStepper from './shop-stepper';
export interface ShopCartItemProps {
    shop: string;
    title: string;
    price: number;
    discountRate?: number;
    url: string;
    img: string;
}

export default function ShopCartItem({ title, price, discountRate, url, img, shop, isLast }: ShopCartItemProps & { isLast: boolean }) {
    return (
        <div className='w-full'>
            {/* 아이템영역 */}
            <div className='bg-white'>
                <div className={`border border-b-0 border-border-normal-default  `}>
                    <div className='w-full'>
                        <div className='flex items-start gap-2 px-3 pt-4 pb-4'>
                            <ShopCheckbox size='medium' id='test' />
                            <img src="https://placehold.co/80x100" alt="" className=' aspect-[8/10] rounded-sm object-cover' />
                            <div className='w-full'>{title}</div>
                            <div>
                                <ShopIconButton className='p-0 size-5 border-none stroke-label-solid-subtler'>
                                    <ShopIcon name='X' />
                                </ShopIconButton>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 justify-between px-3 pb-5'>
                            <div className='pl-[30px]'>
                                <ShopStepper className='w-[100px]' />
                            </div>
                            <div className='text-[18px] font-bold text-label-solid-default'>
                                {formatKRW(price)}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* 아이템영역 */}
        </div>
    )
}
