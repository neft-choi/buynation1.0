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
import { ShopCartItemProps } from '@/components/shop/shop-cart-item'
const cartItems: ShopCartItemProps[] = [
    {
        shop: '김정환홈삼',
        title: '[김정환홍삼] 홍삼으로 에너지타임 플러스',
        img: 'https://placehold.co/600x400',
        price: 249000,
        url: 'test',
        discountRate: 75
    },
    {
        shop: '과일나라',
        title: '[과일나라] 토마토',
        img: 'https://placehold.co/600x400',
        price: 249000,
        url: 'test',
        discountRate: 75
    },
    {
        shop: '과일나라',
        title: '[과일나라] 토마토1',
        img: 'https://placehold.co/600x400',
        price: 249000,
        url: 'test',
        discountRate: 75
    },
]
// store에서 주입해야함
export default function index() {
    return (
        <ShopCartLayout title='장바구니'>
            <ShopCartItemContainer cartItems={cartItems} />
        </ShopCartLayout>
    )
}
