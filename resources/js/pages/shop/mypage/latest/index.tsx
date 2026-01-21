
import { ShopIconButton } from '@/components/shop/shop-button'
import { ShopEmpty } from '@/components/shop/shop-empty'
import { ShopIcon } from '@/components/shop/shop-icon'
import { handleAddCart, ProductComponent } from '@/components/shop/shop-product-item'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import { formatDiscountedKRW, formatKRW } from '@/lib/utils'
import { Product } from '@/types/shop/public'
import { Link } from '@inertiajs/react'

interface LatestData {
    data: Product[]
}

function ShopLatestItem({ title, price, imageUrl, viewed_at, id }: Product) {
    return (
        <Link href={route('shop.product.show', { product: id })} className="w-full grid grid-cols-4 gap-4">
            <div className="sr-only">{viewed_at}</div>
            <div className="">
                <img src={imageUrl[0] ?? 'https://placehold.co/100x200'} className="aspect-[8/10] rounded-sm object-cover" alt="" />
            </div>
            <div className="col-span-2 flex flex-col justify-center items-start">
                <div className="text-sm">{title}</div>
                <div className="line-through text-label-normal-subtler font-light text-sm">{price.price && formatKRW(price.price)}</div>
                <div className="text-base  font-bold">
                    {price.discountRate && <span className="text-status-negative mr-1">{price.discountRate}%</span>}
                    <span className="">
                        {price.sale && formatKRW(price.sale)}
                    </span>
                </div>
            </div>
            <div className="place-self-center justify-self-end">
                <ShopIconButton size={'rectangleSm'} className="w-auto" onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault()
                    handleAddCart(id, 1)
                }}>
                    <ShopIcon name='장바구니' />
                </ShopIconButton>
            </div>
        </Link>
    )
}
export default function Index({ latestData }: { latestData: LatestData }) {
    const groupedItems = latestData.data && latestData.data.length > 0
        ? latestData.data.reduce((acc, item) => {
            const date = item.viewed_at!.split("T")[0]
            if (!acc[date]) acc[date] = []
            acc[date].push(item)
            return acc
        }, {} as Record<string, Product[]>)
        : {}
    const sortedDates = Object.keys(groupedItems).sort((a, b) => (a > b ? 1 : -1))
    return (
        <ShopMypageLayout title='최근 본 상품'>
            <div className='px-4 py-6  w-full'>
                <div className="w-full text-label-solid-default">
                    {sortedDates && sortedDates.length > 0 ? sortedDates.map((date) => (
                        <div key={date} className="mb-6">
                            <div className="w-full text-left font-semibold text-[15px] mb-3">
                                {date}
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                {groupedItems[date].map((item) => (
                                    <ShopLatestItem
                                        key={item.title}
                                        {...item}
                                    />
                                    // <ProductComponent type='4' key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                    )) : (
                        <ShopEmpty icon='경고' text='최근 본 상품이 없습니다.' />
                    )}
                </div>
            </div>
        </ShopMypageLayout>
    )
}
