import React from 'react'

interface ShopBannerProps {
    href: string;
    imgUrl: string
}

export default function ShopBanner({ href, imgUrl }: ShopBannerProps) {
    return (
        <a href={href} className='w-full'>
            <img className='object-cover rounded-sm w-full max-h-[66px]' src={imgUrl} />
        </a>
    )
}
