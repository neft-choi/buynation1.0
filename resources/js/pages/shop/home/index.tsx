import ShopMainSlider from '@/components/shop/shop-main-slider'
import ShopVanillaSlider from '@/components/shop/shop-vanilla-slider'
import ShopHomeLayout from '@/layouts/shop/home/shop-home-layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { useEffect, useState } from 'react'
import { ShopIconButton } from '@/components/shop/shop-button'
import { IconName, KoIconName, ShopIcon } from '@/components/shop/shop-icon'
import { ShopHeading } from '@/components/shop/shop-heading'
import ShopSlider from '@/components/shop/shop-slider'
import ShopTimesale from '@/components/shop/shop-timesale'
import { Grid } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link, router, usePage } from '@inertiajs/react'
import { Separator } from '@/components/ui/separator'
import { ProductComponent } from '@/components/shop/shop-product-item'
import { Triangle } from 'lucide-react'
import { useUiStore } from '@/hooks/use-ui-store'
import { ItemsResponse, MainSliderType, MainSliderTypeResponse, ProductMeta, ProductMetaResponse } from '@/types/shop/home'

export interface CommonCategoryProps {
    label: string;
    value: string;
    icon: KoIconName;
    type?: 'line' | 'normal';
    href: string;
}

export const categories2: CommonCategoryProps[] = [
    { label: '추천', value: 'recommend', href: 'recommend', type: 'line', icon: '쿠폰(노랑)', },
    { label: '혜택', value: 'boon', href: 'boon', icon: '쿠폰(노랑)', type: 'line' },
    { label: '착한 챌린지', value: 'challenge', href: 'challenge', icon: '리빙', type: 'line' },
    { label: '베스트/인기', value: 'best', href: 'best', icon: '메달', type: 'line' },
    { label: '기부현황', value: 'donate', href: 'donate', icon: '하트 손', type: 'line' },
    { label: '선물하기', value: 'gift', href: 'gift', icon: '선물', type: 'line' },
]
// 임시방편

export default function Index({ metaData, filterData, sliderData, bestData, newData, pickData, bestCategoryData }: { metaData: ProductMetaResponse, filterData: any, sliderData: MainSliderTypeResponse, bestData: ItemsResponse, newData: ItemsResponse, pickData: ItemsResponse, bestCategoryData: ItemsResponse }) {

    const { setSearch } = useUiStore();

    const handleBestCategory = (value: string) => {
        router.get(
            route("shop.home.index"),
            { bestCategory: value },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };
    useEffect(() => {
        handleBestCategory(metaData.data.categories[0].label);
        setSearch('')
    }, [])

    return (
        <ShopHomeLayout>
            <ShopMainSlider sliders={sliderData.data} />
            <section className='py-8'>
                <ShopVanillaSlider sliderClassName='gap-4.5'>
                    {categories2.map((category, index) => (
                        <div className='flex flex-col items-center gap-2' key={category.value}>
                            <ShopIconButton className={`min-w-16 min-h-16 ${category.value === "recommend" ? 'bg-fill-solid-strongest' : 'bg-fill-solid-subtle'}`}>
                                {category.value === "recommend" ?
                                    <div className='font-black  '>
                                        <span className='text-primary-normal'>바이클</span>
                                        <br />
                                        <span className='text-white'>추천</span>
                                    </div>
                                    : <div >
                                        <ShopIcon type={category.type} name={category.icon!} className='size-6 ' />
                                    </div>}
                            </ShopIconButton>
                            <span className='text-[13px] text-label-solid-default'>
                                {category.label}
                            </span>
                        </div>

                    ))}
                </ShopVanillaSlider>
            </section>
            <section className='py-8 pl-4 grid grid-cols-1 gap-4'>
                <div className='grid gap-1'>
                    <h1 className='font-semibold text-primary-strong'>BUYNATION BEST ITEM</h1>
                    <ShopHeading>
                        지금 인기있는 상품을 만나보세요!
                    </ShopHeading>
                </div>
                <div className='col-span-1'>
                    <ShopSlider type='1' dot={false} sliders={bestData.data} >

                    </ShopSlider>
                </div>
            </section>
            <section className='py-8 pl-4 grid grid-cols-1 gap-4'>
                <div className='grid gap-1'>
                    <ShopHeading>
                        지금 올라온 따끈따끈한 신상
                    </ShopHeading>
                    <ShopHeading variant={'secondary'} size={'sm'} isIcon={false}>
                        새롭게 업데이트된 상품들을 만나보세요
                    </ShopHeading>
                </div>
                <div className='col-span-1'>
                    <ShopSlider type='1' dot={false} sliders={newData.data} >

                    </ShopSlider>
                </div>
            </section>
            <section className='py-8 pl-4 grid grid-cols-1 gap-4 bg-background-strong'>
                <div className='grid gap-1'>
                    <ShopHeading>
                        가치소비 <span className='text-primary-strong'>Pick</span>
                    </ShopHeading>
                    <ShopHeading variant={'secondary'} size={'sm'} isIcon={false}>
                        새롭게 업데이트된 상품들을 만나보세요
                    </ShopHeading>
                </div>
                <div className='col-span-1'>
                    <ShopSlider type='2' dot={false} sliders={pickData.data} >

                    </ShopSlider>
                </div>
            </section>
            <section className='py-8 px-4 grid grid-cols-1 gap-2 '>
                <div className='grid gap-1'>
                    <ShopHeading isIcon={false}>
                        특가 혜택 상품
                    </ShopHeading>
                    <ShopHeading variant={'secondary'} size={'sm'} isIcon={false}>
                        늦기전에 서두르세요!
                    </ShopHeading>
                </div>
                <div className='col-span-1'>
                    <ShopTimesale saleKey='test' initialTime={86400} items={newData.data} />
                </div>
            </section>

            <section className='py-8 px-4 grid grid-cols-1 '>
                <div className='grid gap-1 mb-4 w-full'>
                    <ShopHeading isIcon={false}>
                        카테고리별 BEST 상품
                    </ShopHeading>
                    <ShopHeading variant={'secondary'} size={'sm'} isIcon={false}>
                        최대 50% 까지 할인!
                    </ShopHeading>
                </div>
                <div className='col-span-1'>
                    <Tabs defaultValue={metaData.data.categories[0].label} className="w-full relative ">
                        <TabsList className='flex flex-row p-0 bg-white rounded-none w-full overflow-y-hidden overflow-x-scroll justify-start gap-1 text-label-solid-subtler mb-6 h-auto'>
                            {metaData.data.categories.map((category, index) => (
                                <TabsTrigger onClick={() => handleBestCategory(category.label)} className='data-[state=active]:bg-primary-normal data-[state=active]:shadow-none bg-fill-normal-default py-2 px-4 rounded-sm text-[14px]' value={category.label} key={category.label}>{category.label}</TabsTrigger>
                            ))}
                        </TabsList>
                        {metaData.data.categories.map((category, index) => (
                            <TabsContent key={category.label} value={category.label} className='mt-0 w-full' >
                                <ShopSlider dot={true} type='3' sliders={bestCategoryData.data ?? []} />
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>
            <section className='py-8 pl-4 grid grid-cols-1 gap-4'>
                <div className='grid gap-1'>
                    <ShopHeading>
                        바이클 추천 상품
                    </ShopHeading>
                    <ShopHeading variant={'secondary'} size={'sm'} isIcon={false}>
                        바이머를 위한 바이클 추천 상품!
                    </ShopHeading>
                </div>
                <div className='col-span-1'>
                    <ShopSlider type='1' dot={false} sliders={pickData.data} >

                    </ShopSlider>
                </div>
            </section>
            {/* 메인 최상단 탭 베스트임 */}
        </ShopHomeLayout >
    )
}
