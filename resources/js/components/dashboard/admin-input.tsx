import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const adminInputVariants = cva(
    'flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:font-semibold file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                adminDefault: 'text-[var(--color-admin-secondary-text)] placeholder:[var(--color-admin-disabled-text)] border-[(var(--color-admin-border)] bg-[hsl(var(--color-admin-secondary-bg))]',
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

type AdminInputProps = React.ComponentProps<'input'> & VariantProps<typeof adminInputVariants>;

export function AdminInput({ value, onChange, variant, size, className, ...props }: AdminInputProps) {
    return (
        <input
            value={value}
            onChange={onChange}
            className={cn(adminInputVariants({ variant, size, className }))}
            {...props}
        />
    );
}
