import React from 'react'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'
import { ShopIcon } from './shop-icon'

type Props = React.ComponentProps<'input'> & {
    title: string
    errors?: Record<string, string>
}

export default function ShopInput({
    className,
    title,
    type,
    value,
    onChange,
    errors,
    ...props
}: Props) {
    const hasValue = value && String(value).length > 0;

    return (
        <div className='relative w-full'>
            <input
                {...props}
                type={type}
                value={value}
                onChange={onChange}
                placeholder=" "
                className={cn(
                    "peer w-full border border-border-normal-default bg-transparent text-base outline-none transition-all",
                    "pt-[22px] pb-2 px-4 h-15 rounded-[4px]",
                    "placeholder:text-label-normal-subtler",
                    "focus:border focus:!border-border-solid-stronger",
                    "disabled:pointer-events-none disabled:border-border-normal-default",
                    className
                )}
            />

            <Label
                htmlFor={props.id}
                className={cn(
                    "absolute left-[16px] transition-all duration-200 pointer-events-none",
                    "text-label-normal-subtler",
                    "top-[20px] text-base",
                    "peer-focus:top-[9px] peer-focus:text-xs peer-focus:text-label-solid-subtler",
                    hasValue && "top-[9px] text-xs text-label-solid-subtler"
                )}
            >
                {title}
            </Label>

            {!errors && hasValue && (
                <div className='absolute top-5 right-4'>
                    <ShopIcon name='Check' className='size-4 text-status-positive' />
                </div>
            )}
        </div>
    )
}