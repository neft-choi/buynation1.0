import React, { useMemo, useState } from 'react'
import ShopCartItem from './shop-cart-item'
import { formatKRW } from '@/lib/utils'

import { ShopIconButton } from './shop-button'
import { ShopCheckbox } from './shop-checkbox'
import { ShopIcon } from './shop-icon'
import ShopStepper from './shop-stepper'
import { Label } from '../ui/label'
import { CartData, CartProduct } from '@/pages/shop/cart'
import { Link, router, useForm } from '@inertiajs/react'
import { ShopEmpty } from './shop-empty'

export default function ShopCartItemContainer({ cartData }: { cartData: CartData }) {

    const groupedItems = cartData.data.items && cartData.data.items.length > 0
        ? cartData.data.items.reduce((acc, item) => {
            const shop = item.seller
            if (!acc[shop]) acc[shop] = []
            acc[shop].push(item)
            return acc
        }, {} as Record<string, CartProduct[]>)
        : {}

    const sortedShop = Object.keys(groupedItems).sort((a, b) => (a > b ? 1 : -1))



    const toggleItem = (id: number) => {
        setCheckedMap(prev => ({
            ...prev,
            [id]: !prev[id],
        }))
    }


    const toggleAll = () => {
        const next = !allChecked

        setCheckedMap(
            cartData.data.items.reduce((acc, item) => {
                acc[item.id] = next
                return acc
            }, {} as Record<number, boolean>)
        )
    }
    const toggleShop = (shop: string) => {
        const shopItemIds = groupedItems[shop].map(item => item.id)

        const allCheckedInShop = shopItemIds.every(id => checkedMap[id])

        setCheckedMap(prev => {
            const next = { ...prev }
            shopItemIds.forEach(id => {
                next[id] = !allCheckedInShop
            })
            return next
        })
    }

    const [checkedMap, setCheckedMap] = React.useState<Record<number, boolean>>(
        () =>
            cartData.data.items.reduce((acc, item) => {
                acc[item.id] = false
                return acc
            }, {} as Record<number, boolean>)
    )
    const selectedIds = useMemo(
        () =>
            Object.entries(checkedMap)
                .filter(([, checked]) => checked)
                .map(([id]) => Number(id)),
        [checkedMap]
    )

    const allChecked = Object.values(checkedMap).every(Boolean)
    const checkedCount = useMemo(
        () => Object.values(checkedMap).filter(Boolean).length,
        [checkedMap]
    )

    const totalCount = cartData.data.items.length
    const getShopSummary = (shop: string) => {
        const items = groupedItems[shop]

        const selectedItems = items.filter(item => checkedMap[item.id])

        const targetItems =
            selectedItems.length > 0 ? selectedItems : items

        const priceOrigin = targetItems.reduce(

            (sum, item) => sum + item.price.price * item.quantity,
            0
        )

        const discountTotal = targetItems.reduce(
            (sum, item) => sum + (item.price.price - item.price.sale) * item.quantity,
            0
        )

        const productTotal = targetItems.reduce((acc, item) => acc + item.subtotal, 0)
        return {
            priceOrigin,
            productTotal,
            discountTotal,
            count: targetItems.length,
        }
    }
    const handleDeleteSelected = () => {
        if (selectedIds.length === 0) {
            alert('삭제할 상품을 선택해주세요.')
            return
        }

        router.delete(route('shop.cart.bulk-destroy'), {
            data: {
                ids: selectedIds,
            },
            preserveScroll: true,
        })
    }

    return (
        <div className='px-4 py-6 w-full bg-background-strong text-label-normal-default '>
            <div className='w-full flex flex-col gap-3'>
                {/* 전체선택 영역 */}
                {cartData.data.items.length > 0 && <div className='flex justify-between items-center gap-2 text-sm'>
                    <div className='flex items-center gap-1'>
                        <ShopCheckbox
                            size="medium"
                            id="all"
                            checked={allChecked}
                            onCheckedChange={toggleAll}
                        />
                        <Label htmlFor='all' >전체 선택</Label>
                        <span className='font-bold tracking-widest'>{checkedCount}/{totalCount}</span>
                    </div>
                    <div
                        className='text-label-solid-subtle font-medium'
                        role='button'
                        onClick={handleDeleteSelected}>

                        선택삭제
                    </div>
                </div>}

                {/* 전체선택 영역 */}
                {sortedShop && sortedShop.length > 0 ? sortedShop.map((shop) => (
                    <div className='bg-white shadow rounded-md' key={shop}>
                        <div className='border border-border-normal-default border-b-0 rounded-tl-md rounded-tr-md  px-3 py-2.5'>
                            <div className='flex items-center gap-2 '>
                                <ShopCheckbox size='medium' checked={groupedItems[shop].every(item => checkedMap[item.id])}
                                    onCheckedChange={() => toggleShop(shop)}
                                />
                                <Label className='text-base font-bold text-label-solid-default'>{shop}</Label>
                            </div>
                        </div>
                        {groupedItems[shop].map((cart, idx, arr) => (
                            <ShopCartItem
                                key={cart.id}
                                {...cart}
                                isLast={idx === arr.length - 1}
                                isChecked={checkedMap[cart.id]}
                                onToggle={() => toggleItem(cart.id)}
                            />
                        ))}
                        {(() => {
                            const summary = getShopSummary(shop)



                            return (
                                <div className='bg-fill-normal-subtler px-3 py-3.5 flex flex-col text-sm gap-1 rounded-bl-md rounded-br-md border'>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='text-label-solid-subtler'>상품금액</div>
                                        <div className='text-[15px] font-medium text-label-solid-default'>
                                            {formatKRW(summary.priceOrigin)}
                                        </div>
                                    </div>

                                    <div className='w-full flex justify-between items-center'>
                                        <div className='text-label-solid-subtler'>할인금액</div>
                                        <div className='text-[15px] font-medium text-status-negative'>
                                            {formatKRW(-summary.discountTotal)}
                                        </div>
                                    </div>

                                    <div className='w-full flex justify-between items-center'>
                                        <div className='text-label-solid-default'>주문금액</div>
                                        <div className='font-bold text-xl text-label-solid-default'>
                                            {formatKRW(summary.productTotal)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })()}


                    </div>
                )) : (
                    <ShopEmpty icon={'장바구니'} text='장바구니에 담긴 상품이 없습니다' />
                )}

            </div>

        </div>
    )
}
