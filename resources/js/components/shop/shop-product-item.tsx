import React from 'react'
import { Star } from 'lucide-react';
import { Separator } from '../ui/separator';
import ShopChip from './shop-chip';
import { ShopIconButton } from './shop-button';
import { ShopIcon } from './shop-icon';
import { cn, formatDiscountedKRW, formatKRW } from '@/lib/utils';
import { Link, router, usePage } from '@inertiajs/react';
import { BottomType, Product } from '@/types/shop/public';
import { toast } from "sonner"
import { SharedData } from '@/types';
export type TopTag =
    | "기부"     // 기부%
    | "착한소비"         // 착한소비
    | "타임특가"     // 타임특가
    | "바이클PICK";    // 바이클픽

export const TopTagStyle: Record<TopTag, { bg: string; text: string }> = {
    기부: { bg: "bg-primary-normal", text: "text-label-solid-default" },
    착한소비: { bg: "bg-status-positive", text: "text-white" },
    타임특가: { bg: "bg-accent-normal", text: "text-white" },
    바이클PICK: { bg: "bg-primary-normal", text: "text-label-solid-default" },
};

type ProductComponentProps =
    | (Product & { type: '1' | '2' | '4' } & { className?: string })
    | ({ type: '3'; page: Product[]; pageIndex: number; className?: string });

const BottomComponent = ({ rating = 0, purchaseCount = 0, displayTags }: BottomType) => {
    return (
        <div className='w-full flex flex-col items-start justify-center'>
            <div className='flex gap-1 items-center h-4 justify-center'>
                <ShopIcon name='별' className='fill-black size-3' />
                <div className='text-[13px] font-normal'>{rating}</div>
                <Separator orientation='vertical' />
                <div className='text-[13px] font-normal text-label-solid-subtle'>
                    {purchaseCount}건
                </div>

            </div>
            <div className='flex gap-1 items-center justify-start mt-2 font-medium'>
                {displayTags?.map((tag) => (
                    <ShopChip variant={'outline'} size={'sm'} key={tag}>
                        {tag}
                    </ShopChip>
                ))}
            </div>
        </div>
    )
}
export const handleLike = (product_id: number, options?: {
    onSuccess?: () => void;
    onError?: () => void;
}) => {

    router.post(route('shop.mypage.like.store'), {
        product_id: product_id,
    }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: (page) => {
            toast.success(page.props.success as string);
            options?.onSuccess?.();
        },
    },);

}
export const handleAddCart = (product_id: number, quantity: number, options?: {
    onSuccess?: () => void;
    onError?: () => void;
}) => {

    router.post(route('shop.cart.store'), {
        product_id: product_id,
        quantity: quantity,
    }, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: (page) => {
            toast.success(page.props.success as string);
            options?.onSuccess?.();
        },
    },);

}


const ProductComponent = (props: ProductComponentProps) => {
    if (props.type === '1' || props.type === '2') {
        const { title, imageUrl, price, donationPercent, displayAreas, rating = 0, purchaseCount = 0, className, displayTags, tags, id, liked_at } = props;
        return (
            <>
                {props.type === '1' &&
                    <Link href={route('shop.product.show', { product: id })} className="flex flex-col items-center justify-center text-xl gap-1 font-semibold w-full relative">
                        <img src={imageUrl[0]} alt={title} className={cn('w-full aspect-[3/4] rounded-sm object-cover', className && className)} />
                        <div className="flex w-full absolute left-2 top-2 gap-1">
                            {displayTags
                                ?.filter((tag) => {
                                    if (tag === "기부") {
                                        return donationPercent > 0;
                                    }
                                    return true;
                                })
                                .map((tag) => (
                                    <ShopChip
                                        key={tag}
                                        className={`bg-primary-normal text-label-solid-default font-semibold text-xs px-2 py-1 
          ${TopTagStyle[tag as TopTag].bg} 
          ${TopTagStyle[tag as TopTag].text}`}
                                        variant="tag"
                                        size="sm"
                                    >
                                        {tag === "기부" && `기부 ${donationPercent}%`}
                                        {tag === "착한소비" && "착한소비"}
                                        {tag === "타임특가" && "타임특가"}
                                        {tag === "바이클PICK" && "바이클 PICK"}
                                    </ShopChip>
                                ))}
                        </div>
                        <div className='w-full'>
                            <div className='grid grid-cols-2 gap-1 w-full'>
                                <ShopIconButton
                                    variant={'outline'}
                                    size={'rectangleSm'}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleLike(id);
                                    }}
                                >
                                    {liked_at ? (<ShopIcon name='하트(채움)' className={cn('size-5 text-red-500')} />) : (<ShopIcon name='하트' className={cn('size-5')} />)}

                                </ShopIconButton>
                                <ShopIconButton
                                    variant={'outline'}
                                    size={'rectangleSm'}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleAddCart(id, 1);
                                    }}
                                ><ShopIcon name='장바구니' className='size-5' /></ShopIconButton>
                            </div>
                        </div>
                        <div className='text-base text-label-solid-default text-left w-full'>
                            {title}
                        </div>
                        <div className='line-through font-light text-base w-full text-left text-label-normal-subtler'>
                            {formatKRW(price.price)}
                        </div>
                        <div className='w-full text-left text-lg font-bold text-label-solid-default'>
                            {
                                price.discountRate !== 0 ? <span className='text-status-negative mr-1'>
                                    {price.discountRate + '%'}
                                </span> : <span></span>
                            }
                            {formatKRW(price.sale)}
                        </div>
                        <BottomComponent displayTags={displayAreas} rating={rating} purchaseCount={purchaseCount} />
                    </Link>
                }
                {props.type === '2' &&
                    <Link href={route('shop.product.show', { product: id })} className="flex flex-col items-center justify-center text-xl gap-1 font-semibold w-full relative">
                        <div className='w-full relative'>
                            <img src={imageUrl[0]} alt={title} className={cn('w-full aspect-[3/4] rounded-sm object-cover', className && className)} />
                            {donationPercent !== 0 && <div className='absolute w-full bg-fill-solid-strongest/75 left-0 bottom-0 h-10 text-white font-light text-[15px] flex items-center justify-center rounded-bl-sm rounded-br-sm'>기부금 {formatKRW(price.price / donationPercent)}</div>}
                        </div>
                        <div className='flex w-full absolute left-2 top-2 gap-1'>
                            {displayTags && displayTags.map((tag) => (
                                <ShopChip className={` bg-primary-normal text-label-solid-default font-semibold text-xs px-2 py-1 ${TopTagStyle[tag as TopTag].bg} ${TopTagStyle[tag as TopTag].text}`} variant={'tag'} size={'sm'} key={tag}>
                                    {tag === "기부" && donationPercent && `기부 ${donationPercent}%`}
                                    {tag === "착한소비" && "착한소비"}
                                    {tag === "타임특가" && "타임특가"}
                                    {tag === "바이클PICK" && "바이클 PICK"}
                                </ShopChip>
                            ))
                            }
                        </div>

                        <div className='w-full'>
                            <div className='grid grid-cols-2 gap-1 w-full'>
                                <ShopIconButton
                                    variant={'outline'}
                                    size={'rectangleSm'}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleLike(id);
                                    }}
                                ><ShopIcon name='하트' className='size-5' /></ShopIconButton>
                                <ShopIconButton variant={'outline'} size={'rectangleSm'}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleAddCart(id, 1);
                                    }}><ShopIcon name='장바구니' className='size-5' /></ShopIconButton>
                            </div>
                        </div>
                        <div className='text-base text-label-solid-default text-left w-full'>
                            {title}
                        </div>
                        <div className='line-through font-light text-base w-full text-left text-label-normal-subtler'>
                            {formatKRW(price.price)}
                        </div>
                        <div className='w-full text-left text-lg font-bold text-label-solid-default'>
                            {
                                price.discountRate !== 0 ? <span className='text-status-negative mr-1'>
                                    {price.discountRate + '%'}
                                </span> : <span></span>
                            }

                            {formatKRW(price.sale)}
                        </div>
                        <BottomComponent displayTags={displayAreas} rating={rating} purchaseCount={purchaseCount} />

                    </Link>
                }
            </>
        )
    }
    if (props.type === '3') {
        const { page, pageIndex } = props;
        return (
            <>
                {
                    props.type === '3' &&
                    <div className="flex flex-col gap-4">
                        {page && page.map((slider, index) => (
                            <Link
                                href={route('shop.product.show', { product: slider.id })}
                                key={slider.title}
                                className="flex items-center text-xl font-semibold relative h-40"
                            >
                                <div className='flex text-2xl h-full w-[28px]'>

                                    {pageIndex * 5 + index + 1 === 1 ? <div className='text-status-negative '>{pageIndex * 5 + index + 1}</div> : <div className=''>{pageIndex * 5 + index + 1}</div>}
                                </div>
                                <img src={slider.imageUrl[0]} alt={slider.title} className="w-[124px] aspect-[1/2] object-cover" />
                                <div className="flex-1 flex flex-col justify-start items-start h-full ml-4">
                                    <div className="text-base text-label-solid-default text-left mb-1.5">{slider.title}</div>
                                    <div className="line-through font-light text-base text-label-normal-subtler">
                                        {formatKRW(slider.price.price)}
                                    </div>
                                    <div className="text-lg font-bold text-label-solid-default mb-4">
                                        {slider.price.discountRate && (
                                            <span className="text-status-negative mr-1">
                                                {slider.price.discountRate + '%'}
                                            </span>
                                        )}
                                        {formatKRW(slider.price.sale)}
                                    </div>
                                    <div className="grid grid-cols-2 gap-1 w-full ">
                                        <ShopIconButton
                                            variant={'outline'}
                                            size={'rectangleSm'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleLike(slider.id);
                                            }}
                                        ><ShopIcon name='하트' className='size-5' /></ShopIconButton>
                                        <ShopIconButton variant={'outline'} size={'rectangleSm'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleAddCart(slider.id, 1);
                                            }}>
                                            <ShopIcon name="장바구니" className="size-5" />
                                        </ShopIconButton>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </>
        )
    }
}

export { ProductComponent, BottomComponent }