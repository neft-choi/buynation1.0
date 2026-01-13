import { formatDiscountedKRW, formatKRW } from "@/lib/utils";
import { ShopIconButton } from "./shop-button";
import { ShopIcon } from "./shop-icon";

export interface ShopLatestItemProps {
    title: string;
    price: number;
    discountRate?: number;
    url: string;
    img: string;
    time: string;
}

export default function ShopLatestItem({ title, price, discountRate, url, img, time }: ShopLatestItemProps) {
    return (
        <a href={url} className="w-full grid grid-cols-4 gap-4">
            <div className="sr-only">{time}</div>
            <div className="">
                <img src={img ?? 'https://placehold.co/100x200'} className="aspect-[8/10] rounded-sm object-cover" alt="" />
            </div>
            <div className="col-span-2 flex flex-col justify-center items-start">
                <div className="text-sm">{title}</div>
                <div className="line-through text-label-normal-subtler font-light text-sm">{discountRate && formatKRW(price)}</div>
                <div className="text-base  font-bold">
                    {discountRate && <span className="text-status-negative mr-1">{discountRate}%</span>}
                    <span className="">
                        {discountRate ? formatDiscountedKRW(price, discountRate) : formatKRW(price)}
                    </span>
                </div>
            </div>
            <div className="place-self-center justify-self-end">
                <ShopIconButton size={'rectangleSm'} className="w-auto">
                    <ShopIcon name='Cart' />
                </ShopIconButton>
            </div>
        </a>
    )
}
