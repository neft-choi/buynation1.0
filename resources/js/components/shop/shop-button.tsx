import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Link } from '@inertiajs/react'


const buttonVariants = cva(
    "disabled:bg-fill-normal-strong disabled:text-white rounded-[4px] shadow-none text-base font-semibold text-center",
    {
        variants: {
            variant: {
                primary: "bg-primary-normal text-black",
                outline: "border border-input bg-background shadow-xs text-black",
                secondary: "bg-fill-solid-strongest !text-white border",
            },
            size: {
                lg: "w-full py-4 h-auto",
                sm: "w-auto px-4 py-2 h-auto text-sm",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "lg",
        },
    }
)

const svgButtonVariants = cva(
    "disabled:bg-fill-normal-strong disabled:text-white rounded-[4px] font-medium overflow-hidden shadow-none flex text-center justify-center items-center text-sm gap-2",
    {
        variants: {
            variant: {
                white: "bg-white text-black border border-border-solid-default",
                black: "bg-black text-white",
                outline: "border border-border-normal-default bg-transparent text-black",
            },
            size: {
                circle: 'rounded-full size-13.5',
                rectangleLg: 'w-full h-auto',
                rectangleSm: 'w-full h-auto',
            },
        },
        defaultVariants: {
            variant: "white",
            size: "circle",
        },
    }
)

type ShopButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { href?: string }

export function ShopButton({ children, size, variant, className, href, ...props }: ShopButtonProps) {
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
        <Button
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        >
            {children}
        </Button>
    )
}

type ShopIconButtonProps = React.ComponentProps<'button'> & VariantProps<typeof svgButtonVariants> & { href?: string }

export function ShopIconButton({ children, size, variant, className, href, ...props }: ShopIconButtonProps) {
    if (href) {
        return (
            <Link
                className={cn(svgButtonVariants({ variant, size, className }))}
                href={href}
            >
                {children}
            </Link>
        )
    }

    return (
        <Button
            className={cn(svgButtonVariants({ variant, size, className }))}
            {...props}
        >
            {children}
        </Button>
    )
}
