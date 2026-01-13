import { cn } from '@/lib/utils'
import React from 'react'


export default function ShopVanillaSlider({ wrapperClassName, sliderClassName, children }: { children: React.ReactNode, wrapperClassName?: string, sliderClassName?: string }) {
    return (
        <div className={cn('w-full relative', wrapperClassName)}>
            <div className={cn('flex flex-row px-4 bg-white rounded-none w-full overflow-hidden overflow-x-auto justify-start gap-6 text-label-solid-subtler', sliderClassName)} >
                {children}
            </div>
        </div>
    )
}
