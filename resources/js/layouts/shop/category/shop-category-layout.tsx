import { IconName } from '@/components/shop/shop-icon'

import { cn } from '@/lib/utils'
import React from 'react'
import { ShopNavigation } from '@/components/shop/shop-navigation'
import { Head } from '@inertiajs/react';
import ShopLayout from '../shop-layout';

export default function ShopCategoryLayout({ children, className, title, icon, ...props }: React.ComponentProps<'div'> & { title?: string; icon?: IconName }) {
    return (
        <ShopLayout>
            {children}
        </ShopLayout>
    )
}
