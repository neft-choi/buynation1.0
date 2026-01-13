import { LabelType, Product, ShopResponse } from "../public";


export interface ProductMeta {
  categories: LabelType[];
  tags: LabelType[];
  displayTags: LabelType[];
  displayAreas: LabelType[];
}
export type ProductMetaResponse = ShopResponse<ProductMeta>;

export type MainSliderType = {
  title: string;
  imageUrl: string;
  linkUrl: string;
  bannerId: number;
}

export type MainSliderTypeResponse = ShopResponse<MainSliderType[]>;
export type ItemsResponse = ShopResponse<Product[]>;

export type ShopSliderProps =|{
    dot: boolean;
    type: '1' | '2' | '3' ;
    sliders: Product[]
} |{
      type: '4';
      sliders: Product ;
      dot?: boolean;
    }