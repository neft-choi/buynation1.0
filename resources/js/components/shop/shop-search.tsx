import React, { useEffect, useState } from 'react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
import { MinusIcon, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { router } from '@inertiajs/react'
import { ShopIconButton } from './shop-button'
import { ShopIcon } from './shop-icon'
import { useUiStore } from '@/hooks/use-ui-store'

interface SearchProps {
    keyword: string;
    setKeyword: (e: string) => void;
    handleSearch: () => void;
    clickSerachBar: boolean;
    setClickSearchBar: (e: boolean) => void;
}

export default function ShopSearch({ className, keyword, setKeyword, handleSearch, clickSerachBar, setClickSearchBar, ...props }: React.ComponentProps<"input"> & SearchProps) {
    const { shortSearch, setShortSearch } = useUiStore();

    useEffect(() => {
        setShortSearch(true)
    }, [])

    return (
        <div className="flex items-center px-4 ">
            <div
                className={cn(
                    "flex items-center transition-all duration-300 overflow-hidden",
                    clickSerachBar || keyword ? "w-6 mr-3" : "w-0 mr-0"
                )}
            >
                <ShopIconButton
                    onClick={() => {
                        if (!clickSerachBar && keyword) {
                            router.get('/')
                        }
                        setClickSearchBar(false)
                    }}
                    className={cn(
                        "size-6 rounded-none border-none transition-all duration-300",
                        clickSerachBar || keyword ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    )}
                >
                    <ShopIcon name="펼침(왼쪽)" className="size-6" />
                </ShopIconButton>
            </div>
            <InputGroup
                {...props}
                className={cn(
                    "rounded-full border-primary-normal w-full h-10 focus-visible:shadow-none focus-visible:border-primary-normal transition-all duration-300",
                    className
                )}
            >
                <InputGroupInput
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSearch();
                        }
                    }}
                    className="w-full p-0 text-start pl-4"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                {keyword && <InputGroupAddon align={'inline-end'} className='py-0'>
                    <ShopIconButton onClick={() => setKeyword('')} className='p-0 size-4 border-none'>
                        <ShopIcon name='닫기' className='w-4 h-4 p-0.5 text-white bg-fill-solid-stronger rounded-full' />
                    </ShopIconButton>
                </InputGroupAddon>}
                <InputGroupAddon align="inline-end">
                    <div
                        onClick={handleSearch}
                        className="text-label-solid-subtle border-label-normal-subtler flex size-4 items-center justify-center rounded-full cursor-pointer"
                    >
                        <Search className="stroke-primary-normal cursor-pointer" />
                    </div>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}
