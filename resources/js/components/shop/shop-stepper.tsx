import React, { useState } from 'react'
import { Input } from '../ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
import { cn } from '@/lib/utils';
import { ShopIcon } from './shop-icon';
import { ShopIconButton } from './shop-button';
interface ShopStepperProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    className?: string;
}export default function ShopStepper({
    value,
    onChange,
    min = 1,
    max,
    className,
}: ShopStepperProps) {

    const increment = () => {
        if (max !== undefined && value >= max) return;
        onChange(value + 1);
    };

    const decrement = () => {
        if (value <= min) return;
        onChange(value - 1);
    };

    return (
        <div className={cn('relative w-24 ', className)}>
            <InputGroup className='rounded-[4px] border-label-normal-subtler/35 grid grid-cols-3 p-0 m-0 h-8 bg-white'>
                <InputGroupAddon className='size-8 order-1'>
                    <ShopIconButton
                        onClick={decrement}
                        className="size-4 border-none"
                    >
                        <ShopIcon name="마이너스" className='size-4 text-label-solid-subtle' />
                    </ShopIconButton>
                </InputGroupAddon>

                <InputGroupInput
                    className="w-full !p-0 text-center text-label-solid-default size-8 order-2 text-sm"
                    readOnly
                    value={value}
                />

                <InputGroupAddon className='size-8 order-3'>
                    <ShopIconButton
                        onClick={increment}
                        className="size-4 border-none"
                    >
                        <ShopIcon name="플러스" className='size-4 text-label-solid-subtle' />
                    </ShopIconButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
}
