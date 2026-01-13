import ShopVanillaSlider from '@/components/shop/shop-vanilla-slider'
import ShopHomeLayout from '@/layouts/shop/home/shop-home-layout'
import React, { useEffect, useState } from 'react'
import { IconName, ShopIcon } from '@/components/shop/shop-icon'
import { Link, router, usePage } from '@inertiajs/react'
import { Separator } from '@/components/ui/separator'
import { ProductComponent } from '@/components/shop/shop-product-item'
import { useUiStore } from '@/hooks/use-ui-store'
import { ItemsResponse, ProductMetaResponse } from '@/types/shop/home'
import { SortType } from '@/types/shop/public'

const sortDatas: SortType[] = ['latest', 'price_asc', 'price_desc', 'popular', 'rating'];

const sortLabels: Record<SortType, string> = {
    latest: '최신순',
    price_asc: '낮은 가격순',
    price_desc: '높은 가격순',
    popular: '인기순',
    rating: '별점순',

};

export default function Index({ metaData, bestCategoryData }: { metaData: ProductMetaResponse, bestCategoryData: ItemsResponse }) {
    const url = usePage().url;
    const params = new URLSearchParams(url.split("?")[1]);
    const category = params.get("category");
    const sort = params.get("sort");

    const { setSearch } = useUiStore();
    const navigate = (query: {
        category?: string;
        sort?: string;
    }) => {
        router.get(
            route("shop.best.index"),
            {
                ...getQuery(),
                ...query,
            },
            {
                preserveState: true,
                preserveScroll: true,

            }
        );
    };
    const getQuery = () => ({
        category: params.get("category") ?? undefined,
        sort: params.get("sort") ?? undefined,
    });

    const handleBestCategory = (value: string) => {
        router.get(
            route("shop.best.index"),
            {
                ...getQuery(),
                bestCategory: value
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };
    const handleSort = (value: string) => {
        router.get(
            route("shop.best.index"),
            {
                ...getQuery(),
                sort: value
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    }
    useEffect(() => {
        navigate({
            category: metaData.data.categories[0].label,
            sort: sortDatas[0],
        });
        setSearch('')
    }, [])

    return (
        <ShopHomeLayout>
            <section className='main-slider'>
                <div>
                    <ShopVanillaSlider sliderClassName='gap-2 bg-white p-4 flex-wrap'>
                        {metaData.data.categories.map((best) => (
                            <div className='flex flex-col shrink-0 items-center gap-2' key={best.value}>
                                <Link
                                    href={route("shop.best.index",
                                        { ...getQuery(), category: best.label },
                                    )}
                                    preserveScroll
                                    preserveState
                                    className={`text-sm font-normal px-2.5 py-1.5 bg-fill-solid-subtle text-label-solid-subtle rounded-[2px] ${category === best.label && '!bg-fill-solid-strongest text-white'}`}
                                >
                                    {best.label}
                                </Link>
                            </div>
                        ))
                        }
                    </ShopVanillaSlider>
                    <Separator className='bg-border-normal-subtler' />
                    <div className='w-full flex items-center justify-end h-5 text-sm text-label-solid-subtle font-normal mt-6 px-4'>
                        <div className='flex h-5 gap-2'>
                            {
                                sortDatas.map((item, idx) => (
                                    <div key={item} className='flex gap-2'>
                                        <Separator orientation='vertical' className={`${idx === 0 && 'hidden'}`} />
                                        <div onClick={() => handleSort(item)} className={` ${sort === item && 'font-semibold text-label-solid-default'}`}>
                                            {sortLabels[item]}
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className='mt-3 px-4 mb-8 grid grid-cols-2 items-start gap-2 '>
                        {
                            bestCategoryData.data.map((item, idx) => (
                                <div key={item.title}>
                                    <div className={`${idx + 1 === 1 && 'text-status-negative'} text-[22px] font-semibold flex gap-1 mb-1 items-center`}>
                                        <span>
                                            {idx + 1}
                                        </span>
                                        <ShopIcon name={'순위 상승'} className='size-3' />
                                    </div>
                                    <ProductComponent className='' key={item.title} type='1'{...item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </ShopHomeLayout>
    )
}
