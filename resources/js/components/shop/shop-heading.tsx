import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react'
import { ShopIconButton } from './shop-button';
import { ShopIcon } from './shop-icon';

const buttonVariants = cva(
    "font-semibold",
    {
        variants: {
            variant: {
                primary:
                    "text-label-solid-strong",
                secondary:
                    "text-label-solid-subtler",
            },
            size: {
                lg: "text-xl ",
                sm: "text-sm font-light",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "lg",
        },
    }
)
function ShopHeading({ children, size, variant, className, isIcon = true, ...props }: React.ComponentProps<"div"> & VariantProps<typeof buttonVariants> & { isIcon?: boolean }) {
    return (
        <div className='flex justify-between items-center w-full'>
            <h1
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            >
                {children}
            </h1>
            {isIcon && <ShopIconButton className='h-6 w-6 bg-transparent border-none text-label-solid-subtler'><ShopIcon name='Chevron-Right' /></ShopIconButton>}
        </div>

    )
}
export { ShopHeading }