import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { IconName, ShopIcon } from '@/components/shop/shop-icon'

import ShopLayout from '../shop-layout'

export interface CategoryMenusProps {
    title: string;
    value: string;
    url: string;
    iconName?: IconName;
    children?: CategoryMenusProps[]
}
const categoryMenus: CategoryMenusProps[] = [
    {
        title: '패션/의류',
        value: 'cloth',
        iconName: 'Cloth',
        url: 'test',
        children: [
            {
                title: '여성브랜드패션',
                value: 'femibrand',
                url: 'text'
            },
            {
                title: '여성트렌드패션',
                value: 'femitrend',
                url: 'text'
            }
        ]
    },
    {
        title: '베스트',
        value: 'best',
        iconName: 'Cloth',
        url: 'text',
        children: [
            {
                title: '여성브랜드패션',
                value: 'femibrand',
                url: 'text'
            },
            {
                title: '여성트렌드패션',
                value: 'femitrend',
                url: 'text'
            }
        ]
    },
]
export default function ShopSearchAfterLayout({ className, children, ...props }: { className?: string, children: ReactNode, }) {
    return (
        <ShopLayout>
            {children}
        </ShopLayout >
    )
}
