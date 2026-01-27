import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { Button } from '../ui/button';

const adminButtonVariants = cva('disabled:bg-fill-normal-strong disabled:text-white items-center justify-center', {
    variants: {
        variant: {
            adminPrimary: 'text-[var(--color-admin-primary-fg)] bg-[var(--color-admin-primary-bg)]',
            adminSecondary: 'text-[var(--color-admin-secondary-fg)] bg-[var(--color-admin-secondary-bg)]',
            adminDisabled: 'text-[var(--color-admin-disabled-text)] bg-[var(--color-admin-disabled-bg)]',
            adminDisabledStrong: 'text-[var(--color-admin-disabled-text)] bg-[var(--color-admin-disabled-strong-bg)]',
        },
        size: {
            lg: 'w-full p-4 h-auto',
            sm: 'w-auto px-4 py-2 h-auto text-sm',
        },
    },
    defaultVariants: {
        variant: 'adminPrimary',
        size: 'sm',
    },
});

type AdminButtonProps = React.ComponentProps<'button'> & VariantProps<typeof adminButtonVariants> & { href?: string };

export function AdminButton({ children, size, variant, className, href, ...props }: AdminButtonProps) {
    if (href) {
        return (
            <Link href={href} className={cn(adminButtonVariants({ variant, size, className }))}>
                {children}
            </Link>
        );
    }
    return (
        <Button className={cn(adminButtonVariants({ variant, size, className }))} {...props}>
            {children}
        </Button>
    );
}
