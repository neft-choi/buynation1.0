import { ShopNavigation } from '@/components/shop/shop-navigation'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import ShopHeaderLayout from '../home/shop-header-layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import ShopSlider from '@/components/shop/shop-slider';
import { ShopButton, ShopIconButton } from '@/components/shop/shop-button';
import { ShopIcon } from '@/components/shop/shop-icon';
import { BottomComponent, handleAddCart } from '@/components/shop/shop-product-item';
import { formatKRW } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ShopLayout from '../shop-layout';
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
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';
import { DetailItemResponse } from '@/types/shop/product';
import ShopStepper from '@/components/shop/shop-stepper';
import { Product } from '@/types/shop/public';
import { ShopHeading } from '@/components/shop/shop-heading';

interface ProductDetailPageProps extends SharedData {
    productDetailData: DetailItemResponse; // optional 제거
}

const ProductFooterComponent = () => {
    return (
        <div className='w-full border-t border-b-fill-normal-subtler fixed bottom-0 left-0 bg-white z-50 py-5 px-4'>
            <div className='flex gap-3'>
                <ShopIconButton className='size-14 rounded-sm shrink-0'>
                    <ShopIcon name='하트' className='size-6' />
                </ShopIconButton>
                <ShopIconButton className='size-14 rounded-sm shrink-0'>
                    <ShopIcon name='업로드' className='size-6' />
                </ShopIconButton>
                <AddCartModal />
            </div>

        </div>
    )
}
const AfterAddToCartLayout = ({ product, recommandProduct }: { product: Product, recommandProduct: Product[] }) => {
    const [successAddToCart, setSuccessAddToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);
    if (successAddToCart) {
        return (
            <DrawerContent className='p-0'>
                <DrawerHeader className='flex gap-3 justify-start items-center p-4 py-3 border-b border-border-normal-subtler'>
                    <img src={product.imageUrl[0]} alt="" className='aspect-square object-cover size-14' />
                    <DrawerTitle className='text-label-solid-default text-[15px] font-normal'>장바구니에 상품을 담았습니다.</DrawerTitle>
                    <ShopButton href={route('shop.cart.index')} variant={'secondary'} size={'sm'} className='w-auto'>바로가기</ShopButton>
                </DrawerHeader>
                <section className='py-8 pl-4 grid grid-cols-1 gap-4'>
                    <div className='grid gap-1'>
                        <ShopHeading>
                            함께 구매하면 좋을 상품
                        </ShopHeading>
                    </div>
                    <div className='col-span-1'>
                        <ShopSlider type='1' dot={false} sliders={recommandProduct} >
                        </ShopSlider>
                    </div>
                </section>
            </DrawerContent>
        )
    } else {
        return (

            <DrawerContent className='p-0'>
                <DrawerHeader className='flex gap-3 justify-start items-center p-4 py-3 border-b border-border-normal-subtler'>
                    <img src={product.imageUrl[0]} alt="" className='aspect-square object-cover size-14' />
                    <DrawerTitle className='text-label-solid-default text-[15px] font-normal'>{product.title}</DrawerTitle>
                </DrawerHeader>

                <div className='mx-4 my-3 bg-fill-normal-strong/50'>
                    <div className='px-5 py-4 flex flex-col gap-3'>
                        <div className='text-label-solid-subtle'>
                            {product.title}
                        </div>
                        <div className='flex justify-between'>

                            <ShopStepper
                                value={quantity}
                                onChange={setQuantity}
                            />
                            <div className='text-label-solid-default font-semibold text-lg'>{formatKRW(product.price.sale)}</div>
                        </div>
                    </div>
                </div>
                {successAddToCart &&
                    '담겼어요~'}
                <DrawerFooter>
                    <ShopButton onClick={() => handleAddCart(product.id, quantity, {
                        onSuccess: () => {
                            setSuccessAddToCart(true)
                        }
                    })}>{formatKRW(product.price.sale)} 장바구니 담기</ShopButton>
                </DrawerFooter>
            </DrawerContent>
        )

    }
}
const AddCartModal = () => {
    const { props } = usePage<ProductDetailPageProps>();
    const product = props.productDetailData.data.product
    const recommandProduct = props.recommandProducts.data
    console.log(props)
    return (
        <Drawer>
            <DrawerTrigger className='w-full bg-primary-normal rounded-sm text-label-solid-default text-base font-semibold'>장바구니담기</DrawerTrigger>
            <AfterAddToCartLayout product={product} recommandProduct={recommandProduct} />
        </Drawer>
    )
}
export default function ShopProductLayout({ className, children, ...props }: { className?: string, children: ReactNode }) {

    return (
        <ShopLayout isFooter={false}>
            {children}
            <ProductFooterComponent />
        </ShopLayout>
    )
}
