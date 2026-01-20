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
    return (
        <ShopCartLayout cartData={cartData} title='장바구니'>
            <ShopCartItemContainer cartData={cartData} />
        </ShopCartLayout>
    )
}
