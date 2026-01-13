// pages/shop/category/index.tsx

import { Link, router, usePage } from '@inertiajs/react';
import { SortType } from '@/types/shop/public';
import { ProductComponent } from '@/components/shop/shop-product-item';
import ShopCategoryLayout from '@/layouts/shop/category/shop-category-layout';
import { SharedData } from '@/types';
import { ItemsResponse } from '@/types/shop/home';
import { ShopSortAndFilter, useFilterState } from '@/hooks/shop/useSortFilter';
import { Separator } from '@/components/ui/separator';
import ShopVanillaSlider from '@/components/shop/shop-vanilla-slider';
import { ShopIconButton } from '@/components/shop/shop-button';
import { ShopIcon, KoIconName } from '@/components/shop/shop-icon';

export default function Index({ categoryData, category_slug }: { categoryData: ItemsResponse, category_slug: string }) {
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

    // 정렬 변경
    const handleSort = (value: SortType) => {

        router.get(
            route("shop.category.index", { category_slug }),
            { ...currentParams, sort: value },
            { preserveState: true, preserveScroll: true }
        );
    };

    // 필터 적용
    const handleApplyFilters = () => {

        router.get(
            route('shop.category.index', { category_slug }),
            { ...buildFilterQuery(), sort },
            {
                preserveScroll: true,
                replace: true,
            }
        );
    };

    return (
        <ShopCategoryLayout>
            <div className='px-4 py-3  w-full'>
                <ShopVanillaSlider sliderClassName='gap-4.5 p-0'>
                    {/* 카테고리 슬라이더 역역임 */}
                    {data.props.metaData.data.categories.map((category, index) => {

                        return (
                            <div key={category.label}>
                                <div className='flex flex-col items-center gap-2' key={category.label}>
                                    <ShopIconButton
                                        href={route('shop.category.index', {
                                            category_slug: category.label,

                                        })}
                                        className={`min-w-16 min-h-16 ${category.label === '바이클' ? 'bg-fill-solid-strongest' : 'bg-fill-solid-subtle'} ${data.url.includes(encodeURIComponent(category.label)) ? 'bg-white border-primary-normal' : ''}`}>
                                        <div >
                                            <ShopIcon type='line' name={category.label as KoIconName} className='size-6' />
                                        </div>
                                    </ShopIconButton>
                                    <Link
                                        href={route('shop.category.index', {
                                            category_slug: category.label,

                                        })}
                                        className='text-[13px] text-label-solid-default'>
                                        {category.label}
                                    </Link>

                                </div>

                            </div>

                        )
                    })}
                </ShopVanillaSlider>

            </div>
            {/* <div>
                {category &&
                    commonCategories.find(c => c.href === category)?.items && (
                        <div>
                            <ShopVanillaSlider sliderClassName='gap-4.5 bg-fill-solid-strongest px-4 py-3'>
                                {commonCategories
                                    .find(c => c.href === category)!
                                    .items!
                                    .map(sub => (
                                        <div className='flex flex-col items-center gap-2' key={sub.value}>
                                            <Link
                                                href={route('shop.category.index', {
                                                    category_slug: category,
                                                    subcategory_slug: sub.href,
                                                    child_slug: getFirstChild(sub)?.href
                                                })}
                                                className={`text-sm font-medium ${subcategory === sub.href ? 'text-white' : 'text-label-solid-subtler'
                                                    }`}
                                            >
                                                {sub.label}
                                            </Link>
                                        </div>
                                    ))}
                            </ShopVanillaSlider>
                        </div>
                    )}
            </div> */}
            {/* <div>
                {subcategory && commonCategories.find(c => c.href === category)?.items?.find(s => s.href === subcategory)?.items && (
                    <div>
                        <ShopVanillaSlider sliderClassName='gap-2 bg-white p-4'>
                            {commonCategories.find(c => c.href === category)!.items!.find(s => s.href === subcategory)!.items!.map(childItem => {
                                const isActive = child === childItem.href || (!child && childItem === getFirstChild(commonCategories.find(c => c.href === category)!.items!.find(s => s.href === subcategory)!))
                                return (
                                    <div className='flex flex-col items-center gap-2' key={childItem.value}>
                                        <Link
                                            href={route('shop.category.index', { category_slug: category, subcategory_slug: subcategory, child_slug: childItem.href })}
                                            className={`text-sm font-normal px-2.5 py-1.5 bg-fill-solid-subtle text-label-solid-subtle rounded-[2px] ${isActive && '!bg-fill-solid-strongest text-white'}`}
                                        >
                                            {childItem.label}
                                        </Link>
                                    </div>
                                )
                            })}
                        </ShopVanillaSlider>
                    </div>
                )}
            </div> */}
            <Separator className='bg-border-normal-subtler' />

            <div className='px-4 py-6 w-full'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='text-accent-strong text-[15px] font-semibold'>
                            {categoryData.data.length}개
                        </span>
                        의 상품
                    </div>

                    {/* 정렬 + 필터 통합 컴포넌트 */}
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

                {/* 상품 그리드 */}
                <div className='grid grid-cols-2 items-start gap-2 mt-4'>
                    {categoryData.data.map((data) => (
                        <ProductComponent key={data.title} type='1' {...data} />
                    ))}
                </div>
            </div>
        </ShopCategoryLayout>
    );
}

