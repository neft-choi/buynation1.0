// components/shop/shop-filter-sort.tsx
import React, { useState } from 'react';
import { ShopButton } from '@/components/shop/shop-button';
import { ShopIcon } from '@/components/shop/shop-icon';
import { ShopCheckbox } from '@/components/shop/shop-checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SortType } from '@/types/shop/public';

// Types
export type FilterType = '배송유형' | '혜택' | '가격범위';

export const filterCheckDatas: Record<FilterType, string[]> = {
    배송유형: ['오늘출발', '선물포장', '퀵배송'],
    혜택: ['이벤트', '쿠폰', '특가상품', '무료배송'],
    가격범위: ['~3만원', '3만원~5만원', '5만원~10만원', '10만원 이상'],
};

export const priceRangeMap = {
    '~3만원': { min: null, max: 30000 },
    '3만원~5만원': { min: 30000, max: 50000 },
    '5만원~10만원': { min: 50000, max: 100000 },
    '10만원 이상': { min: 100000, max: null },
} as const;

export type PriceRangeLabel = keyof typeof priceRangeMap;
export type PriceRangeValue = typeof priceRangeMap[PriceRangeLabel];

type FilterState = {
    배송유형: string[];
    혜택: string[];
    가격범위: string[];
};

export const filterDatas: FilterType[] = ['배송유형', '혜택', '가격범위'];

export const sortDatas: SortType[] = ['latest', 'price_asc', 'price_desc', 'popular', 'rating'];

const sortLabels: Record<SortType, string> = {
    latest: '최신순',
    price_asc: '낮은 가격순',
    price_desc: '높은 가격순',
    popular: '인기순',
    rating: '별점순',
};

// Sort Select Component
interface ShopSortSelectProps {
    defaultValue?: SortType;
    onSortChange: (value: SortType) => void;
}

export function ShopSortSelect({ defaultValue = 'latest', onSortChange }: ShopSortSelectProps) {
    return (
        <Select defaultValue={defaultValue} onValueChange={onSortChange}>
            <SelectTrigger className="w-auto p-2 rounded-[1px] h-auto text-[13px] font-medium border border-border-normal-default shadow-none bg-white">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {sortDatas.map((sort) => (
                    <SelectItem key={sort} value={sort}>
                        {sortLabels[sort]}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

// Filter Drawer Component
interface ShopFilterDrawerProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    filters: FilterState;
    onFilterChange: (type: FilterType, value: string) => void;
    priceRange: PriceRangeLabel | null;
    onPriceRangeChange: (value: PriceRangeLabel | null) => void;
    onApply: () => void;
    onReset: () => void;
}

export function ShopFilterDrawer({
    isOpen,
    onOpenChange,
    filters,
    onFilterChange,
    priceRange,
    onPriceRangeChange,
    onApply,
    onReset,
}: ShopFilterDrawerProps) {
    return (
        <Drawer open={isOpen} onOpenChange={onOpenChange}>
            <DrawerTrigger className='cursor-pointer w-auto p-2 rounded-[1px] h-auto text-[13px] font-medium border border-border-normal-default shadow-none bg-white flex gap-1'>
                필터
                <ShopIcon name='필터' className='size-4' />
            </DrawerTrigger>
            <DrawerContent>
                <div className='flex flex-col text-label-solid-default mx-4 mb-7 relative'>
                    <DrawerHeader className='p-0 text-start'>
                        <DrawerTitle className='text-xl font-bold'>필터</DrawerTitle>
                        <DrawerClose className='absolute right-0 top-0'>
                            <ShopIcon name='닫기' className='size-6' />
                        </DrawerClose>
                    </DrawerHeader>

                    <Tabs defaultValue={filterDatas[0]} className="mt-3 p-0 m-0">
                        <TabsList className='bg-white p-0 w-full justify-start gap-5 items-end h-auto border-b border-b-fill-normal-subtle rounded-none'>
                            {filterDatas.map((filter) => (
                                <TabsTrigger
                                    key={filter}
                                    className='p-0 border-b-2 text-[15px] font-normal data-[state=active]:font-semibold rounded-none pb-2 border-transparent data-[state=active]:border-label-solid-default text-label-solid-subtler'
                                    value={filter}
                                >
                                    {filter}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* 배송유형 */}
                        <TabsContent className='mt-6 flex flex-col gap-4' value='배송유형'>
                            {filterCheckDatas['배송유형'].map((select) => (
                                <div key={select} className="flex items-center gap-1.5">
                                    <ShopCheckbox
                                        id={select}
                                        checked={filters['배송유형'].includes(select)}
                                        onCheckedChange={() => onFilterChange('배송유형', select)}
                                    />
                                    <Label htmlFor={select}>{select}</Label>
                                </div>
                            ))}
                        </TabsContent>

                        {/* 혜택 */}
                        <TabsContent className='mt-6 flex flex-col gap-4' value='혜택'>
                            {filterCheckDatas['혜택'].map((select) => (
                                <div key={select} className="flex items-center gap-1.5">
                                    <ShopCheckbox
                                        id={select}
                                        checked={filters['혜택'].includes(select)}
                                        onCheckedChange={() => onFilterChange('혜택', select)}
                                    />
                                    <Label htmlFor={select}>{select}</Label>
                                </div>
                            ))}
                        </TabsContent>

                        {/* 가격범위 */}
                        <TabsContent className='mt-6 flex flex-col gap-4' value='가격범위'>
                            <RadioGroup
                                value={priceRange || undefined}
                                onValueChange={(value) => onPriceRangeChange(value as PriceRangeLabel)}
                            >
                                {filterCheckDatas['가격범위'].map((select) => (
                                    <div className='flex items-center gap-1.5' key={select}>
                                        <RadioGroupItem value={select} id={select} />
                                        <Label htmlFor={select}>{select}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </TabsContent>
                    </Tabs>

                    <DrawerFooter className='p-0 my-5 mt-12 flex-row gap-2'>
                        <ShopButton variant='outline' className='basis-1/2' onClick={onReset}>
                            <ShopIcon name='초기화' className='size-5' />
                            초기화
                        </ShopButton>
                        <ShopButton onClick={onApply} className='basis-1/2'>
                            적용하기
                        </ShopButton>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

// Combined Component (Sort + Filter)
interface ShopSortAndFilterProps {
    defaultSort?: SortType;
    onSortChange: (value: SortType) => void;
    filters: FilterState;
    onFilterChange: (type: FilterType, value: string) => void;
    priceRange: PriceRangeLabel | null;
    onPriceRangeChange: (value: PriceRangeLabel | null) => void;
    onApplyFilters: () => void;
    onResetFilters: () => void;
}

export function ShopSortAndFilter({
    defaultSort,
    onSortChange,
    filters,
    onFilterChange,
    priceRange,
    onPriceRangeChange,
    onApplyFilters,
    onResetFilters,
}: ShopSortAndFilterProps) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleApply = () => {
        onApplyFilters();
        setIsFilterOpen(false);
    };

    return (
        <div className='flex gap-1'>
            <ShopSortSelect defaultValue={defaultSort} onSortChange={onSortChange} />
            <ShopFilterDrawer
                isOpen={isFilterOpen}
                onOpenChange={setIsFilterOpen}
                filters={filters}
                onFilterChange={onFilterChange}
                priceRange={priceRange}
                onPriceRangeChange={onPriceRangeChange}
                onApply={handleApply}
                onReset={onResetFilters}
            />
        </div>
    );
}

// Helper hook for filter state management

export function useFilterState() {
    const initialFilters: FilterState = {
        배송유형: [],
        혜택: [],
        가격범위: [],
    };

    const [filters, setFilters] = useState<FilterState>(initialFilters);
    const [priceRange, setPriceRange] = useState<PriceRangeLabel | null>(null);

    const handleToggleFilter = (type: FilterType, value: string) => {
        setFilters((prev) => {
            const exists = prev[type].includes(value);
            return {
                ...prev,
                [type]: exists
                    ? prev[type].filter((v) => v !== value)
                    : [...prev[type], value],
            };
        });
    };

    const buildFilterQuery = () => {
        const price = priceRange ? priceRangeMap[priceRange] : null;

        return {
            shipping_types: filters['배송유형'],
            benefits: filters['혜택'],
            min_price: price?.min ?? undefined,
            max_price: price?.max ?? undefined,
        };
    };

    const resetFilters = () => {
        setFilters(initialFilters);
        setPriceRange(null);
    };
    return {
        filters,
        priceRange,
        setPriceRange,
        handleToggleFilter,
        buildFilterQuery,
        resetFilters,
    };
}