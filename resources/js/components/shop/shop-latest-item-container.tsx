import React from 'react'
import ShopLatestItem, { ShopLatestItemProps } from './shop-latest-item'
import { ShopIcon } from './shop-icon'

interface ShopLatestItemContainerProps {
    latestItems?: ShopLatestItemProps[]
}

export default function ShopLatestItemContainer({ latestItems }: ShopLatestItemContainerProps) {
    // 1️⃣ 날짜별 그룹화
    const groupedItems = latestItems && latestItems.length > 0
        ? latestItems.reduce((acc, item) => {
            const date = item.time
            if (!acc[date]) acc[date] = []
            acc[date].push(item)
            return acc
        }, {} as Record<string, ShopLatestItemProps[]>)
        : {}
    const sortedDates = Object.keys(groupedItems).sort((a, b) => (a > b ? 1 : -1))

    return (
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
                                title={item.title}
                                price={item.price}
                                url={item.url}
                                discountRate={item.discountRate}
                                time={item.time}
                                img={item.img}
                            />
                        ))}
                    </div>
                </div>
            )) : (
                <div className='w-full h-[calc(100vh-110px)] flex flex-col items-center justify-center  text-base text-label-solid-subtle gap-3'>
                    <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 16V24M24 32H24.0222M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#393939" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                    최근 본 상품이 없습니다
                </div>
            )}
        </div>
    )
}
