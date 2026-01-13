
import { ShopLatestItemProps } from '@/components/shop/shop-latest-item'
import ShopLatestItemContainer from '@/components/shop/shop-latest-item-container'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import React from 'react'
export const latestItems: ShopLatestItemProps[] = [
    {
        title: '[김정환홍삼] 홍삼으로 에너지타임 플러스',
        img: 'https://placehold.co/600x400',
        price: 249000,
        url: 'test',
        time: '2025.11.10',
        discountRate: 75
    },
    // {
    //     title: '[김정환홍삼] 홍삼으로 에너지타임 플러스1',
    //     img: 'https://placehold.co/600x400',
    //     price: 249000,
    //     url: 'test',
    //     time: '2025.11.10',

    // },
    // {
    //     title: '[김정환홍삼] 홍삼으로 에너지타임 플러스2',
    //     img: 'https://placehold.co/600x400',
    //     price: 249000,
    //     url: 'test',
    //     time: '2025.11.10',

    // },
    // {
    //     title: '[김정환홍삼] 홍삼으로 에너지타임 플러스2',
    //     img: 'https://placehold.co/600x400',
    //     price: 249000,
    //     url: 'test',
    //     time: '2025.11.10',

    // },
    // {
    //     title: '[김정환홍삼] 홍삼으로 에너지타임 플러스2',
    //     img: 'https://placehold.co/600x400',
    //     price: 249000,
    //     url: 'test',
    //     time: '2025.11.10',

    // },
    // {
    //     title: '[김정환홍삼] 홍삼으로 에너지타임 플러스2',
    //     img: 'https://placehold.co/600x400',
    //     price: 249000,
    //     url: 'test',
    //     time: '2025.11.10',

    // },
    // {
    //     title: '[김정환홍삼] 홍삼으로 에너지타임 플러스2',
    //     img: 'https://placehold.co/600x400',
    //     price: 249000,
    //     url: 'test',
    //     time: '2025.11.9',

    // }
]
export default function Index() {
    return (
        <ShopMypageLayout title='최근 본 상품'>
            <div className='px-4 py-6  w-full'>
                <ShopLatestItemContainer latestItems={latestItems} />
            </div>
        </ShopMypageLayout>
    )
}
