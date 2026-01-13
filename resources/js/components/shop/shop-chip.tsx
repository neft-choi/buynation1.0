import React from 'react'
import { Button } from '../ui/button'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'
const buttonVariants = cva(
    "disabled:bg-fill-normal-strong disabled:text-white rounded-[4px] font-medium shadow-none",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary-normal text-label-solid-Strong font-semibold",
                secondary:
                    "bg-fill-normal-default text-label-normal-default",
                tag: 'bg-accent-normal text-white w-12 h-6 text-xs font-light cursor-default',
                outline: 'bg-white border border-border-solid-stronger rounded-sm text-label-solid-default text-xs py-1 px-2'
            },
            size: {
                lg: "w-auto h-auto text-base",
                sm: "w-auto h-auto text-sm",
            },
        },
        compoundVariants: [
            {
                variant: "tag",
                className: "bg-accent-normal text-white w-auto text-xs h-auto font-medium",
            },

        ],
        defaultVariants: {
            variant: "secondary",
            size: "lg",
        },
    }
)

type ShopChipProps = React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & { href?: string }
export default function ShopChip({ children, size, variant, className, href, ...props }: ShopChipProps) {
    if (href) {
        return (
            <Link
                className={cn(buttonVariants({ variant, size, className }))}
                href={href}
            >
                {children}
            </Link>
        )
    }
    return (
        <Button className={cn(buttonVariants({ size, variant, className }))} {...props}>
            {children}
        </Button>
    )
}
