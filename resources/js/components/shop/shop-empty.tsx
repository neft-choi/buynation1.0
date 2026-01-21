import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"

import { ShopButton } from "./shop-button"
import { KoIconName, ShopIcon } from "./shop-icon"

export function ShopEmpty({ icon, text, buttonLabel = '쇼핑하러 가기', href = '/' }: { icon: KoIconName; text: string; buttonLabel?: string, href?: string }) {
    return (
        <Empty className="h-full min-h-[400px]">
            <EmptyHeader>
                <EmptyMedia variant="icon" className="bg-transparent">
                    <ShopIcon name={icon} className="size-12 text-label-solid-subtler" />
                </EmptyMedia>
                <EmptyDescription className="text-base text-label-solid-subtle">
                    {text}
                </EmptyDescription>
            </EmptyHeader>
            {buttonLabel && href &&
                <EmptyContent>
                    <ShopButton href={href} variant={'secondary'} className="w-auto text-sm font-semibold text-white">
                        {buttonLabel}
                    </ShopButton>
                </EmptyContent>
            }
        </Empty>
    )
}
