import { KoIconName } from "@/components/shop/shop-icon";

export interface Product extends BottomType {
  id: number;
  title: string;
  category: string;
  price: ProductPrice;
  donationPercent: number;
  imageUrl: string[];
  benefits: string[];
  tags: string[];
  displayAreas: string[];
  shippingTypes: string[];

}

export type BottomType = {
    displayTags?: string[];
    rating: number;
    purchaseCount: number;
}

export interface ProductPrice {
  price: number;
  sale: number;
  discountRate: number;
}


export type LabelType = {
  label: string;
  value: string;
};
export interface ShopResponse<T> {
  data: T;
}
export interface CategoryMenusProps {
    title: string;
    value: string;
    url: string;
    iconName?: KoIconName;
    type?: 'line' | 'normal';
    children?: CategoryMenusProps[]
}
export type SortType = 'latest' | 'price_asc' | 'price_desc' | 'popular' | 'rating'

export interface ReusableDrawerProps<T> {
    triggerTitle?: string;
    triggerAlign?: Align;
    isFilterOpen: boolean;
    setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export type FilterType = '배송유형' | '혜택' | '가격범위';

export type PriceRangeLabel = keyof typeof priceRangeMap;
export type PriceRangeValue = typeof priceRangeMap[PriceRangeLabel];