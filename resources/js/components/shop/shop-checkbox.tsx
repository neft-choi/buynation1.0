import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ShopCheckbox({
    className,
    size = 'large',
    ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & { size?: 'medium' | 'large' }) {
    const sizeClass = size === 'large' ? 'size-7' : 'size-6';
    return (
        <CheckboxPrimitive.Root
            data-slot="checkbox"
            className={cn(
                "peer group rounded-full data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-fill-solid-strongest border-border-normal-strong " + sizeClass,
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                forceMount
                data-slot="checkbox-indicator"
                className="flex items-center justify-center text-current transition-none"
            >
                <CheckIcon className="size-4 rounded-full stroke-border-normal-strong border-border-normal-strong group-data-[state=checked]:stroke-white " />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}

export { ShopCheckbox }
