import { ShopButton, ShopIconButton } from '@/components/shop/shop-button'
import { ShopIcon } from '@/components/shop/shop-icon'
import ShopMypageLayout from '@/layouts/shop/mypage/shop-mypage-layout'
import { SharedData } from '@/types'
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function Index() {
    const user = usePage<SharedData>().props;
    return (
        <ShopMypageLayout >
            <div className='px-4 py-6 w-full flex flex-col'>
                <div className='w-full flex flex-col gap-4 justify-center items-center'>
                    <ShopIconButton className='border-none'>
                        <ShopIcon name='HeartHand' className='size-11' />
                    </ShopIconButton>
                    <div className='text-center text-2xl font-bold'>
                        <p>
                            {user.auth.user.name ?? '홍길동'}님,
                        </p>
                        <p>

                            환영합니다!
                        </p>
                        <p className='text-[15px] font-normal text-label-solid-subtle mt-2'>지금부터 바이네이션 서비스를 이용해보세요!</p>
                    </div>
                </div>
                <ShopButton href={route('shop.home.index')} className='w-full mt-10'>이어서 쇼핑하기</ShopButton>
            </div>
        </ShopMypageLayout>
    )
}
