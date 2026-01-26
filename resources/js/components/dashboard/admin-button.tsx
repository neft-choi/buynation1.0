import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { cva } from 'class-variance-authority';
import React from 'react';
import { Button } from '../ui/button';

interface AdminButtonProps {
    children: React.ReactNode;
    variant?: 'adminPrimary';
    size?: 'lg' | 'sm';
    className?: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const adminButtonVariants = cva('disabled:bg-fill-normal-strong disabled:text-white items-center justify-center', {
    variants: {
        variant: {
            adminPrimary: 'bg-[var(--color-admin-primary-bg)] text-[var(--color-admin-primary-fg)]',
            adminSecondary: 'bg-[var(--color-admin-secondary-bg)] text-[var(--color-admin-secondary-fg)]',
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

export function AdminButton({ children, variant, size, className, href, onClick, disabled, ...props }: AdminButtonProps) {
    // href가 들어가면 Link를 사용
    if (href) {
        return (
            <Link href={href} className={cn(adminButtonVariants({ variant, size, className }))}>
                {children}
            </Link>
        );
    }
    return (
        <Button className={cn(adminButtonVariants({ variant, size, className }))} onClick={onClick} disabled={disabled} {...props}>
            {children}
        </Button>
    );
}
