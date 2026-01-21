
import { ShopButton, ShopIconButton } from '@/components/shop/shop-button'
import { ShopCheckbox } from '@/components/shop/shop-checkbox'
import { ShopEmpty } from '@/components/shop/shop-empty'
import { ShopIcon } from '@/components/shop/shop-icon'
import { ProductComponent } from '@/components/shop/shop-product-item'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import { formatKRW } from '@/lib/utils'
import { Product } from '@/types/shop/public'
import { Link, router } from '@inertiajs/react'
import { useState } from 'react'
import { toast } from 'sonner'
interface LikeProps {
    keyword: string;
    sort: string;
    likeData: { data: Product[] }
    // 나중에 솔트 값 정해야함
}
export default function Index({ keyword, sort, likeData }: LikeProps) {
    const [isEdit, setIsEdit] = useState(false)
    const [selectedIds, setSelectedIds] = useState<string[]>([])

    const allIds = likeData.data.map(p => p.id.toString())
    const isAllSelected = selectedIds.length === allIds.length && allIds.length > 0

    const handleToggle = (ids: string[]) => {
        setSelectedIds(prev => {
            const set = new Set(prev)

            ids.forEach(id => {
                if (set.has(id)) {
                    set.delete(id)
                } else {
                    set.add(id)
                }
            })

            return Array.from(set)
        })
    }


    // 전체 선택 / 해제
    const handleToggleAll = () => {
        setSelectedIds(isAllSelected ? [] : allIds)
    }

    const handleStore = (product_id: number, options?: {
        onSuccess?: () => void;
        onError?: () => void;
    }) => {
        // 배열로 수정해야함 3개면 서버에서 3번 날려야함
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
    return (
        <ShopMypageLayout>
            {likeData.data.length !== 0 ? (
                <>
                    <div className='flex justify-between items-center px-4 pt-5 pb-3'>
                        <div className='text-[15px] font-semibold '>
                            <span className='text-accent-strong'>총  {selectedIds.length}</span> <span className='font-normal text-label-solid-default'> / {likeData.data.length}</span>
                        </div>
                        {isEdit ? (
                            <div
                                className='text-sm font-medium text-label-solid-subtler cursor-pointer flex gap-4 items-center'

                            >
                                <div onClick={handleToggleAll}>
                                    {isAllSelected ? '전체 해제' : '전체 선택'}
                                </div>
                                {selectedIds.length !== 0 && <div onClick={() => { handleToggle(selectedIds) }}>
                                    선택 삭제</div>}
                                <ShopButton className='px-2 py-1' variant={'outline'} size={'sm'} onClick={() => setIsEdit(false)}>완료</ShopButton>
                            </div>
                        ) : (
                            <div
                                className='text-sm font-medium text-label-solid-subtler cursor-pointer'
                                onClick={() => setIsEdit(true)}
                            >
                                편집
                            </div>
                        )}

                    </div>
                    <div className='grid grid-cols-2 items-start gap-2 px-4 mb-4'>
                        {likeData.data.map(product => {
                            const id = product.id.toString()
                            const checked = selectedIds.includes(id)

                            return (
                                <div key={id} className='relative'>
                                    {isEdit && (
                                        <div className='pb-2'>
                                            <ShopCheckbox
                                                id={id}
                                                checked={checked}
                                                onCheckedChange={() => handleToggle([id])}
                                            />
                                        </div>
                                    )}

                                    <ProductComponent type='1' {...product} />
                                </div>
                            )
                        })}
                    </div>
                </>
            ) : (
                <ShopEmpty text='찜한 상품이 없습니다' icon='하트' />
            )}

        </ShopMypageLayout>
    )
}
