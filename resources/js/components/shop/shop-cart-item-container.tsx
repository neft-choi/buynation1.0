import React from 'react'
import ShopCartItem, { ShopCartItemProps } from './shop-cart-item'
import { formatKRW } from '@/lib/utils'

import { ShopIconButton } from './shop-button'
import { ShopCheckbox } from './shop-checkbox'
import { ShopIcon } from './shop-icon'
import ShopStepper from './shop-stepper'
import { Label } from '../ui/label'
interface ShopCartItemContainerProps {
    cartItems: ShopCartItemProps[] | []
}
export default function ShopCartItemContainer({ cartItems }: ShopCartItemContainerProps) {
    const groupedItems = cartItems && cartItems.length > 0
        ? cartItems.reduce((acc, item) => {
            const shop = item.shop
            if (!acc[shop]) acc[shop] = []
            acc[shop].push(item)
            return acc
        }, {} as Record<string, ShopCartItemProps[]>)
        : {}
    const sortedShop = Object.keys(groupedItems).sort((a, b) => (a > b ? 1 : -1))
    return (
        <div className='px-4 py-6 w-full bg-background-strong text-label-normal-default '>
            <div className='w-full flex flex-col gap-3'>
                {/* 전체선택 영역 */}
                {cartItems.length > 0 && <div className='flex justify-between items-center gap-2 text-sm'>
                    <div className='flex items-center gap-1'>
                        <ShopCheckbox size='medium' id='test' />
                        <Label htmlFor='test'>전체 선택</Label>
                        <span className='font-bold tracking-widest'>3/4</span>
                    </div>
                    <div className='text-label-solid-subtle font-medium'>
                        선택삭제
                    </div>
                </div>}

                {/* 전체선택 영역 */}
                {sortedShop && sortedShop.length > 0 ? sortedShop.map((shop) => (
                    <div className='bg-white shadow rounded-md' key={shop}>
                        <div className='border border-border-normal-default border-b-0 rounded-tl-md rounded-tr-md  px-3 py-2.5'>
                            <div className='flex items-center gap-2 '>
                                <ShopCheckbox size='medium' id='test' />
                                <Label htmlFor='test' className='text-base font-bold text-label-solid-default'>{shop}</Label>
                            </div>
                        </div>
                        {groupedItems[shop].map((cart, idx, arr) => (
                            <ShopCartItem key={cart.title} {...cart} isLast={idx === arr.length - 1} />
                        ))}
                        <div className='bg-fill-normal-subtler px-3 py-3.5 flex flex-col text-sm gap-1 rounded-bl-md rounded-br-md border'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-label-solid-subtler'>상품금액</div>
                                <div className='text-[15px] font-medium text-label-solid-default'>
                                    {/* store에서 받아와야함 */}
                                    {formatKRW(13500)}
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-label-solid-subtler'>할인금액</div>
                                <div className='text-[15px] font-medium text-status-negative'>
                                    {/* store에서 받아와야함 */}
                                    {formatKRW(-13500)}
                                </div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-label-solid-subtler'>배송비</div>
                                <div className='text-[15px] font-medium text-status-good'>무료배송</div>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-label-solid-default'>주문금액</div>
                                <div className='font-bold text-xl text-label-solid-default'>{formatKRW(10000)}</div>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className='w-full h-[calc(100vh-110px)] flex flex-col items-center justify-center  text-base text-label-solid-subtle gap-3'>
                        <div>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.1001 4.10001H8.1001L13.4201 28.94C13.6153 29.8497 14.1214 30.663 14.8515 31.2397C15.5816 31.8165 16.4899 32.1207 17.4201 32.1H36.9801C37.8904 32.0985 38.7731 31.7866 39.4822 31.2157C40.1912 30.6448 40.6844 29.8491 40.8801 28.96L44.1801 14.1H10.2401M18.0001 42C18.0001 43.1046 17.1047 44 16.0001 44C14.8955 44 14.0001 43.1046 14.0001 42C14.0001 40.8954 14.8955 40 16.0001 40C17.1047 40 18.0001 40.8954 18.0001 42ZM40.0001 42C40.0001 43.1046 39.1047 44 38.0001 44C36.8955 44 36.0001 43.1046 36.0001 42C36.0001 40.8954 36.8955 40 38.0001 40C39.1047 40 40.0001 40.8954 40.0001 42Z" stroke="#393939" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </div>
                        장바구니에 담긴 상품이 없습니다
                    </div>
                )}

            </div>
        </div>
    )
}
