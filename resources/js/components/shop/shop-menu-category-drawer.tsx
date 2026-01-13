import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShopIconButton } from "./shop-button"
import { ShopIcon } from "./shop-icon"
import { CategoryMenusProps } from "@/types/shop/public"
import { Link, usePage } from "@inertiajs/react"
import { SharedData } from "@/types"

interface ShopMenuCategoryDrawerProp {
    categoryMenus: CategoryMenusProps[]
}
const ShopMenuSelectorComponent = ({ title, value, }: { title: string, value: string }) => {
    return (
        <TabsTrigger value={value} className="text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80 data-[state=active]:bg-white rounded-none w-full">{title}</TabsTrigger>
    )
}
const ShopMenuComponent = ({ title, url, type, value, iconName, children }: CategoryMenusProps) => {
    if (iconName) return (
        <Link href={url} className='flex w-full items-center justify-between h-12'>
            <div className='flex items-center'>
                <ShopIconButton size={'rectangleSm'} className='border-none h-auto !p-0 max-h-12 w-auto mr-1'>
                    <ShopIcon type='line' name={iconName} className='w-5' />
                </ShopIconButton>
                <div className='text-primary-strong font-semibold text-base'>{title}</div>{ }
            </div>
            <ShopIconButton className='border-none size-5'>
                <ShopIcon name='펼침(오른쪽)' className='size-5' />
            </ShopIconButton>
        </Link>
    );
    return (
        <div className='flex w-full items-center justify-between h-12'>
            <div className='flex items-center'>
                <div className=''>{title}</div>
            </div>
            <ShopIconButton className='border-none size-5'>
                <ShopIcon name='펼침(오른쪽)' className='size-5 opacity-35' />
            </ShopIconButton>
        </div>
    )
}
export function ShopMenuCategoryDrawer({ data }: any) {
    // console.log(data, 'ShopMenuCategoryDrawer');
    return (
        <Tabs defaultValue={data[0].label} className="w-full grid grid-cols-3 pt-6">
            <TabsList className="col-span-1 overflow-y-auto flex flex-col h-auto p-0 shadow-none bg-transparent rounded-none justify-start">
                {data.map((category: any) => (
                    <ShopMenuSelectorComponent key={category.label} title={category.label} value={category.label} />
                ))}
            </TabsList>
            {data.map((category: any) => (
                <TabsContent key={category.label} value={category.label} className="w-full col-span-2 text-base px-4 flex flex-col items-center text-label-solid-default font-light text-[15px] mt-0 justify-start">
                    {/* 나중에 api 개선 해야함 하위 카테고리 */}
                    <ShopMenuComponent title={category.label} url={route('shop.category.index', { category_slug: category.label })} value={category.label} iconName={category.label} type="line" />
                    {/* <ShopMenuComponent title={category.label} url={category.label} value={category.label} /> */}
                </TabsContent>
            ))}



        </Tabs>
        // <div className='w-full grid grid-cols-3 pt-6'>
        //     <div className='col-span-1 overflow-y-auto'>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류1</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류2</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류3</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류4</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류5</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류6</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류7</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류8</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류9</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류10</div>
        //         <div className=' text-[15px] text-label-solid-strong font-semibold px-4 py-3 text-left bg-fill-normal-default/80'>패션/의류10</div>
        //     </div>
        //     <div className='w-full col-span-2 text-base px-4 py-3 flex flex-col items-center justify-between text-label-solid-default font-light text-[15px]'>
        //         <div className='flex w-full items-center justify-between'>
        //             <div className='flex items-center'>
        //                 <ShopIconButton size={'rectangleSm'} className='border-none h-auto !p-0 max-h-12 w-auto mr-1'>
        //                     <ShopIcon name='Cloth' className='w-5' />
        //                 </ShopIconButton>
        //                 <div className='text-primary-strong font-semibold text-base'>패션/의류</div>
        //             </div>
        //             <ShopIconButton className='border-none size-5'>
        //                 <ShopIcon name='Chevron-Right' className='size-5' />
        //             </ShopIconButton>
        //         </div>
        // <div className='flex w-full items-center justify-between'>
        //     <div className='flex items-center'>
        //         <div className=''>패션/의류</div>
        //     </div>
        //     <ShopIconButton className='border-none size-5'>
        //         <ShopIcon name='Chevron-Right' className='size-5 opacity-35' />
        //     </ShopIconButton>
        // </div>
        //     </div>
        // </div>
    )
}
