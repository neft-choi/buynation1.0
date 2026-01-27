import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const adminInputVariants = cva(
    'flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                adminDefault: 'border-[hsl(var(--color-admin-border))] bg-[hsl(var(--color-admin-secondary-bg))]',
                adminError: 'border-[hsl(var(--color-admin-danger))] bg-[hsl(var(--color-admin-secondary-bg))]',
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
