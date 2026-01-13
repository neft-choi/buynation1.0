
import { ShopButton, ShopIconButton } from '@/components/shop/shop-button'
import { ShopIcon } from '@/components/shop/shop-icon'
import { ProductComponent } from '@/components/shop/shop-product-item'
import { SliderType } from '@/components/shop/shop-slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import { formatKRW } from '@/lib/utils'
import { Link } from '@inertiajs/react'
interface LikeProps {
    keyword: string;
    sort: string;
    // 나중에 솔트 값 정해야함
    products: SliderType[]
}
export default function Index({ keyword, sort, products }: LikeProps) {
    return (
        <ShopMypageLayout title='좋아요' bottomNavigation className='min-h-screen'>
            <div className='flex justify-between items-center px-4 pt-5 pb-3'>
                <div className='text-[15px] font-semibold '>
                    <span className='text-accent-strong'>총 8</span> <span className='font-normal text-label-solid-default'> / 200</span>
                </div>
                <div className='text-sm font-medium text-label-solid-subtler'>
                    편집
                </div>
            </div>
            <div className='grid grid-cols-2 items-start gap-2 px-4'>
                {products.map((product) => (
                    <ProductComponent key={product.title} type='1'{...product} />
                ))}
            </div>
        </ShopMypageLayout>
    )
}
