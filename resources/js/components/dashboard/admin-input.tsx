import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { useState } from 'react';

const adminInputVariants = cva(
    'flex h-10 w-full rounded border px-3 py-2 text-sm placeholder:font-semibold placeholder:text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline focus:outline-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                adminDefault:
                    'text-[var(--color-admin-secondary-text)] placeholder:[var(--color-admin-disabled-text)] border-[(var(--color-admin-border)] bg-[hsl(var(--color-admin-secondary-bg))]',
                adminError: 'border-[(var(--color-admin-danger))] bg-[(var(--color-admin-secondary-bg))]',
            },
            size: {
                sm: 'h-9 px-3 text-xs',
                lg: 'h-12 px-4 text-sm',
            },
        },
        defaultVariants: {
            variant: 'adminDefault',
            size: 'sm',
        },
    },
);

type AdminInputProps = React.ComponentProps<'input'> &
    VariantProps<typeof adminInputVariants> & { rightContent?: React.ReactNode; showCharCount?: boolean };

export function AdminInput({ value, onChange, variant, size, className, rightContent, showCharCount, ...props }: AdminInputProps) {
    const [charCount, setCharCount] = useState(0);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharCount(e.currentTarget.value.length);
        onChange?.(e);
    };

    return (
        <div className="relative w-full">
            <input
                value={value}
                onChange={handleChange}
                maxLength={100}
                className={cn(adminInputVariants({ variant, size, className }), (rightContent || showCharCount) && 'pr-16')}
                {...props}
            />

            {(rightContent || showCharCount) && (
                <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 border-l-2 pl-10 text-xs text-gray-500">
                    {showCharCount ? `${charCount} / 100` : rightContent}
                </div>
            )}
        </div>
    );
}
