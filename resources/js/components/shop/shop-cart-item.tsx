import { formatKRW } from '@/lib/utils';
import { Label } from '../ui/label';
import React, { useState } from 'react'
import { ShopButton, ShopIconButton } from './shop-button';
import { ShopCheckbox } from './shop-checkbox';
import { ShopIcon } from './shop-icon';
import ShopStepper from './shop-stepper';
import { CartProduct } from '@/pages/shop/cart';
import { router } from '@inertiajs/react';
import { handleAddCart } from './shop-product-item';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
function EditCartModal({
    id,
    initialQuantity,
    onClose,
    open,

}: {
    id: number
    initialQuantity: number
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean

}) {
    const [qty, setQty] = useState(initialQuantity)
    const [loading, setLoading] = useState(false)



    return (
        <Drawer open={open} onOpenChange={onClose}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>주문수정</DrawerTitle>
                    <div className='py-4 flex flex-col gap-2'>
                        <div>상품 주문 수량</div>
                        <ShopStepper
                            value={qty}
                            onChange={setQty}
                            className='w-[100px]'
                        />
                    </div>
                </DrawerHeader>
                <DrawerFooter className='flex-row '>
                    <DrawerClose className='basis-1/2'>
                        <ShopButton variant="outline">취소</ShopButton>
                    </DrawerClose>
                    <ShopButton className='basis-1/2' onClick={() => handleAddCart(id, qty, { onSuccess: () => onClose(false) })}>수정</ShopButton>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}
export default function ShopCartItem({ title, price, imageUrl, isLast, id, isChecked, quantity, onToggle, }: CartProduct & { isLast: boolean, isChecked: boolean, onToggle: () => void }) {
    const handleDeleteSelected = () => {

        router.delete(route('shop.cart.bulk-destroy'), {
            data: {
                ids: [id],
            },
            preserveScroll: true,
        })
    }
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full'>
            {/* 아이템영역 */}
            <div className='bg-white'>
                <div className={`border border-b-0 border-border-normal-default  `}>
                    <div className='w-full'>
                        <div className='flex items-start gap-2 px-3 pt-4 pb-4'>
                            <ShopCheckbox size='medium' id='test' checked={isChecked} onCheckedChange={onToggle} />
                            <img src={imageUrl[0]} alt="" className='aspect-[8/10] rounded-sm object-cover max-w-[80px]' />
                            <div className='w-full'>{title}</div>
                            <div>
                                <ShopIconButton onClick={handleDeleteSelected} className='p-0 size-5 border-none stroke-label-solid-subtler'>
                                    <ShopIcon name='닫기' />
                                </ShopIconButton>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 justify-between px-3 pb-5'>
                            <div className='pl-[30px]'>
                                <div className=''>
                                    상품 주문 수량 : {quantity}
                                </div>
                                <ShopButton variant={'secondary'} size={'sm'} onClick={() => setOpen(true)}>주문수정</ShopButton>
                                <EditCartModal open={open} id={id} onClose={setOpen} initialQuantity={quantity} />
                            </div>
                            {/* <div className='text-[18px] font-bold text-label-solid-default'>
                                {formatKRW(price.sale)}
                            </div> */}
                            <div>

                                <div className='line-through font-light text-base w-full text-right text-label-normal-subtler '>
                                    {formatKRW(price.price)}
                                </div>
                                <div className='w-full text-left text-lg font-bold text-label-solid-default'>
                                    {
                                        price.discountRate !== 0 ? <span className='text-status-negative mr-1'>
                                            {price.discountRate + '%'}
                                        </span> : <span></span>
                                    }
                                    {formatKRW(price.sale)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* 아이템영역 */}
        </div>
    )
}
