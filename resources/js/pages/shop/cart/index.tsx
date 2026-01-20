import { ShopIconButton } from '@/components/shop/shop-button'
import { ShopCheckbox } from '@/components/shop/shop-checkbox'
import { ShopHeading } from '@/components/shop/shop-heading'
import { ShopIcon } from '@/components/shop/shop-icon'
import ShopSlider from '@/components/shop/shop-slider'
import ShopStepper from '@/components/shop/shop-stepper'
import { Label } from '@/components/ui/label'
import ShopCartLayout from '@/layouts/shop/cart/shop-cart-layout'
import { formatKRW } from '@/lib/utils'
import ShopCartItemContainer from '@/components/shop/shop-cart-item-container'
import { Product } from '@/types/shop/public'
import ShopCartItem from '@/components/shop/shop-cart-item'
import { router } from '@inertiajs/react'
import { useMemo, useState } from 'react'

export interface CartProduct extends Product {
    quantity: number;
    subtotal: number;
    seller: string;
}

export interface CartData {
    data: {
        items: CartProduct[]
        totalPrice: number;
    }

}
export default function index({ cartData }: { cartData: CartData }) {
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

    const [checkedMap, setCheckedMap] = useState<Record<number, boolean>>(
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
    const handlePrepareOrder = () => {
        // console.log('올더~')
        // pg 연동시 API 준다고함
    }
    return (
        <ShopCartLayout handlePrepareOrder={handlePrepareOrder} cartData={cartData} title='장바구니'>
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
                        <div className='w-full h-[calc(100vh-110px)] flex flex-col items-center justify-center  text-base text-label-solid-subtle gap-3'>
                            <div>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.1001 4.10001H8.1001L13.4201 28.94C13.6153 29.8497 14.1214 30.663 14.8515 31.2397C15.5816 31.8165 16.4899 32.1207 17.4201 32.1H36.9801C37.8904 32.0985 38.7731 31.7866 39.4822 31.2157C40.1912 30.6448 40.6844 29.8491 40.8801 28.96L44.1801 14.1H10.2401M18.0001 42C18.0001 43.1046 17.1047 44 16.0001 44C14.8955 44 14.0001 43.1046 14.0001 42C14.0001 40.8954 14.8955 40 16.0001 40C17.1047 40 18.0001 40.8954 18.0001 42ZM40.0001 42C40.0001 43.1046 39.1047 44 38.0001 44C36.8955 44 36.0001 43.1046 36.0001 42C36.0001 40.8954 36.8955 40 38.0001 40C39.1047 40 40.0001 40.8954 40.0001 42Z" stroke="#393939" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                            </div>
                            장바구니에 담긴 상품이 없습니다
                        </div>
                    )}

                </div>

            </div>

        </ShopCartLayout>
    )
}
