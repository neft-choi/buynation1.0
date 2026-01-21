
import { ShopIconButton } from '@/components/shop/shop-button'
import ShopChip from '@/components/shop/shop-chip'
import { ShopEmpty } from '@/components/shop/shop-empty'
import { ShopIcon } from '@/components/shop/shop-icon'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import { formatKRW } from '@/lib/utils'
import { Product, ShopResponse } from '@/types/shop/public'

interface Coupon {

    code
    :
    string
    couponId
    :
    number
    discountType
    :
    string
    discountValue
    :
    number
    expiresAt
    :
    string
    minOrderAmount
    :
    number
    title
    :
    string
    usedAt
    :
    string | null
}

interface CouponData extends ShopResponse<Coupon[]> { }
function calcDDay(targetIso: string): number {
    const today = new Date();
    const target = new Date(targetIso);

    // 시간을 0시로 맞춤 (중요)
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const diff: number = target.getTime() - today.getTime();
    const day: number = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return day;
}
const CouponComponent = (data: Coupon) => {
    const dday = calcDDay(data.expiresAt)
    const expDay = data.expiresAt.split("T")[0]
    return (
        <div className='w-full flex'>
            <div className='flex flex-col gap-5 w-full bg-white border border-primary-normal rounded-tr-lg rounded-br-lg px-6 py-5'>
                <div className='w-full'>
                    <div>{data.title}</div>
                    {/* <div>전상품 50% 쿠폰</div> */}
                    <div>{formatKRW(data.minOrderAmount)} 이하 상품 구매 시 적용</div>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex gap-1.5'>
                        {
                            data.expiresAt && <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2'>{dday}</ShopChip>
                        }

                        {/* <ShopChip variant={'tag'} className='font-semibold text-xs py-1 px-2 text-label-solid-subtle bg-fill-solid-subtle'>앱전용</ShopChip> */}
                    </div>
                    <div className='text-label-solid-subtle text-sm'>
                        {
                            data.expiresAt ? expDay + '까지' : '기간제한 없음'
                        }
                    </div>
                </div>
            </div>
            <div className='w-auto bg-primary-normal px-6 rounded-tl-lg rounded-bl-lg flex items-center font-bold text-base text-label-solid-default break-keep'>1장</div>
        </div>
    )

}


export default function Index({ couponData }: { couponData: CouponData }) {
    console.log(couponData.data)

    return (
        <ShopMypageLayout title='쿠폰' bottomNavigation className='bg-background-strong min-h-screen h-screen'>
            <div className='flex justify-between items-center px-4 pt-5 pb-3'>
                <div className='text-[15px] font-semibold '>
                    <span className='font-normal text-label-solid-default'>전체</span>
                    <span className='text-accent-strong'> {couponData.data.length}개</span>
                </div>
                <ShopIconButton className='w-auto border-none items-center h-auto bg-transparent !p-0 gap-0'>
                    <ShopIcon name='플러스' className='size-4 place-self-center' />
                    <div className='text-[15px] font-medium text-label-solid-default'>
                        쿠폰 등록
                    </div>
                </ShopIconButton>
            </div>
            <div className='flex flex-col gap-3 px-4'>
                {couponData.data.length > 0 ? couponData.data.map((coupon) =>
                    <CouponComponent key={coupon.couponId} {...coupon} />
                ) : (
                    <ShopEmpty icon='쿠폰(단색)' text='사용할 수 있는 쿠폰이 없습니다.' />
                )}

            </div>
        </ShopMypageLayout>
    )
}
