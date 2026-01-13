import { ProductComponent } from '@/components/shop/shop-product-item';
import ShopVanillaSlider from '@/components/shop/shop-vanilla-slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUiStore } from '@/hooks/use-ui-store';
import ShopHomeLayout from '@/layouts/shop/home/shop-home-layout';
import ShopSearchAfterLayout from '@/layouts/shop/search/shop-search-after-layout'
import { Link, router, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'
import { ShopCheckbox } from '@/components/shop/shop-checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DrawerFooter } from '@/components/ui/drawer';
import { ShopButton } from '@/components/shop/shop-button';
import { ShopIcon } from '@/components/shop/shop-icon';
import { ShopHeading } from '@/components/shop/shop-heading';
import { ItemsResponse } from '@/types/shop/home';
import { SharedData } from '@/types';
import { ShopSortAndFilter, useFilterState } from '@/hooks/shop/useSortFilter';
import { SortType } from '@/types/shop/public';

const relariveItems = [
    {
        label: '귤',
        value: 'mandarin1'
    },
    {
        label: '사과',
        value: 'mandarin2'
    }, {
        label: '배',
        value: 'mandarin3'
    }
    , {
        label: '바나나',
        value: 'mandarin4'
    },
    {
        label: '복숭아',
        value: 'mandarin5'
    }, {
        label: '포도',
        value: 'mandarin6'
    },
]
const EmptyComponent = ({ keyword }: { keyword: string }) => {
    return (
        <div className='px-4 h-64 flex justify-center items-center'>
            <div className='flex flex-col items-center gap-1'>
                <div className='font-bold text-lg'>
                    '{relariveItems.find((key => key.value === keyword))?.label ?? keyword}' <span className='text-label-solid-subtle font-normal'> 에 대한 검색결과</span>
                </div>
                <div className='font-normal text-sm text-label-solid-subtle'>검색어를 다시 확인해보세요</div>
            </div>
        </div>
    )
}

export default function Index({ searchData, keyword }: { searchData: ItemsResponse, keyword: string }) {
    const { setClickSearchBar, } = useUiStore();
    const data = usePage<SharedData>();
    const params = new URLSearchParams(data.url.split("?")[1]);
    const sort = params.get("sort") as SortType ?? 'latest';
    const currentParams = Object.fromEntries(
        new URLSearchParams(params || '').entries()
    );
    // 필터 상태 관리
    const {
        filters,
        priceRange,
        setPriceRange,
        handleToggleFilter,
        buildFilterQuery,
        resetFilters,
    } = useFilterState();
    useEffect(() => {
        setClickSearchBar(false)
    }, [])

    // 정렬 변경
    const handleSort = (value: SortType) => {

        router.get(
            route("shop.search.index", { keyword }),
            { ...currentParams, sort: value },
            { preserveState: true, preserveScroll: true }
        );
    };

    // 필터 적용
    const handleApplyFilters = () => {

        router.get(
            route('shop.search.index', { keyword }),
            { ...buildFilterQuery(), sort },
            {
                preserveScroll: true,
                replace: true,
            }
        );
    };
    console.log(data)
    return (
        <ShopHomeLayout >
            {/* 엘라스틱 서치 붙이면함 */}
            {/* <div className='w-full bg-border-solid-subtle py-2'>
                <ShopVanillaSlider sliderClassName='px-4' wrapperClassName='px-0'>
                    <div className='py-3 shrink-0 font-semibold text-base text-label-solid-strong'>연관</div>
                    {relariveItems.map((item) => (
                        <Link
                            key={item.value}
                            href={route('shop.search.index', { keyword: item.value })
                            }
                            className='text-base shrink-0 text-normal text-label-solid-default py-3'
                        >
                            {item.label}
                        </Link>
                    ))}
                </ShopVanillaSlider>
            </div> */}
            {searchData.data.length > 1 ? (<Tabs defaultValue='products' className='px-4 py-6 mt-3'>
                <TabsList className='bg-white p-0 w-full justify-start gap-5 items-end h-auto border-b border-b-fill-normal-subtle rounded-none'>
                    <TabsTrigger
                        className='p-0 border-b-2 text-[15px] font-normal  data-[state=active]:font-semibold rounded-none pb-2 border-transparent data-[state=active]:border-label-solid-default text-label-solid-subtler'
                        value={'products'}
                    // onClick={(e) => { setSelectFilter(filter) }}
                    >
                        상품
                    </TabsTrigger>
                    <TabsTrigger
                        className='p-0 border-b-2 text-[15px] font-normal  data-[state=active]:font-semibold rounded-none pb-2 border-transparent data-[state=active]:border-label-solid-default text-label-solid-subtler'
                        value={'community'}
                    // onClick={(e) => { setSelectFilter(filter) }}
                    >
                        커뮤니티
                    </TabsTrigger>
                </TabsList>
                <TabsContent className='py-6 w-full' value='products'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <span className='text-accent-strong text-[15px] font-semibold'>
                                {searchData.data.length}개
                            </span>
                            의 상품
                        </div>
                        <ShopSortAndFilter
                            defaultSort={sort}
                            onSortChange={handleSort}
                            filters={filters}
                            onFilterChange={handleToggleFilter}
                            priceRange={priceRange}
                            onPriceRangeChange={setPriceRange}
                            onApplyFilters={handleApplyFilters}
                            onResetFilters={resetFilters}
                        />
                    </div>
                    <div className='grid grid-cols-2 items-start gap-2 mt-4'>
                        {searchData.data.map((product) => (
                            <ProductComponent key={product.title} type='1'{...product} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>) : (<EmptyComponent keyword={data.props.keyword!} />)}
            {
                data.props.recommandProducts.data.length !== 0 && <div className='w-full bg-border-solid-subtle pt-2'>
                    <div className='px-4 bg-white pt-6'>
                        <ShopHeading isIcon={false}>
                            지금 인기있는 상품
                        </ShopHeading>
                    </div>
                    <div className='grid grid-cols-2 items-start gap-2 pt-4 bg-white px-4'>
                        {data.props.recommandProducts.data.map((product) => (
                            <ProductComponent key={product.title} type='1'{...product} />
                        ))}
                    </div>
                </div>
            }
        </ShopHomeLayout>
    )
}
