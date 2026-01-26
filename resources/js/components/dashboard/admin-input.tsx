import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

interface AdminInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    variant?: 'adminDefault' | 'adminError';
    size?: 'sm' | 'lg';
    className?: string;
    disabled?: boolean;
    type?: 'text' | 'email' | 'password' | 'number';
}

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

export function AdminInput({ value, onChange, placeholder, variant, size, className, disabled, type = 'text', ...props }: AdminInputProps) {
    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(adminInputVariants({ variant, size, className }))}
            {...props}
        />
    );
}
