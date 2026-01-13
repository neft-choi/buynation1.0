import ShopBanner from '@/components/shop/shop-banner'
import ShopChip from '@/components/shop/shop-chip'
import { ShopIcon } from '@/components/shop/shop-icon'
import ShopSearch from '@/components/shop/shop-search'
import { useUiStore } from '@/hooks/use-ui-store'
import { SharedData } from '@/types'
import { router, usePage } from '@inertiajs/react'



type PopularSearchState = 'up' | 'down' | 'new'
interface PopularSearchProps {
    rank: number;
    title: string;
    state?: PopularSearchState
}
const Title = ({ title }: { title: string }) => {
    return (
        <div className='font-semibold text-base text-label-solid-default'>
            {title}
        </div>
    )
}
const popularStateFilter = (state: PopularSearchState) => {
    switch (state) {
        case 'new':
            return <ShopChip className='px-1 py-[3px] size-3.5 text-[10px] text-center flex items-center justify-center rounded-[2px]' variant={'tag'}>N</ShopChip>
        case 'down':
            return <ShopIcon name='순위 하락' className='size-3' />
        case 'up':
            return <ShopIcon name='순위 상승' className='size-3' />
        default:
    }
}
const PopularSearch = ({ rank, title, state }: PopularSearchProps) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
                <div className='text-base font-bold text-label-solid-default'>
                    {rank}
                </div>
                <div className={`${rank > 3 && 'text-label-solid-subtle'} 'text-base font-normal text-label-solid-default'`}>{title}</div>
            </div>
            <div>
                {state &&
                    popularStateFilter(state)}
            </div>
        </div>
    )
}

export default function ShopSearchLayout() {
    const {
        search,
        clickSearchBar,
        setSearch,
        setClickSearchBar,
    } = useUiStore();

    const handleSearch = () => {
        router.get(route("shop.search.index"), { keyword: search })
    }
    const data = usePage<SharedData>();
    // console.log(data.props);
    return (
        <div className='w-full relative '>
            <ShopSearch
                clickSerachBar={clickSearchBar}
                setClickSearchBar={setClickSearchBar}
                keyword={search}
                setKeyword={setSearch}
                handleSearch={handleSearch}
                onClick={() => { setClickSearchBar(true) }}
                className=''
            />
            {clickSearchBar &&
                <div
                    className="w-full px-4 overflow-y-scroll bg-white absolute top-10 left-0 animate-in slide-in-from-top-0 fade-out duration-300 ease-out py-6 flex flex-col gap-8 z-[100] h-screen"
                >
                    <div className='w-full'>
                        <Title title='최근 검색어' />
                        <div className='text-sm font-normal text-label-solid-subtler'>
                            최근검색어 내역이 없습니다.
                        </div>
                    </div>
                    <div>
                        <Title title='추천 키워드' />
                        <div className='flex flex-wrap gap-1.5 mt-2'>
                            {data.props.searchSuggestions.data.recommended_keywords.length > 0 ? data.props.searchSuggestions.data.recommended_keywords.map((keyword: string) => (
                                <ShopChip key={keyword} href={route('shop.search.index', { keyword: keyword })} className='bg-fill-solid-subtle text-sm text-label-solid-default font-normal px-3 py-2' variant={'tag'} size={'lg'}>{keyword}</ShopChip>
                            )) : (
                                <div className='text-sm font-normal text-label-solid-subtler'>
                                    추천 키워드가 없습니다.
                                </div>
                            )}

                        </div>
                    </div>
                    <div>
                        <ShopBanner href={data.props.searchSuggestions?.data.recommended_images.length > 0 ? data.props.searchSuggestions?.data.recommended_images[0].title : ''} imgUrl={data.props.searchSuggestions?.data.recommended_images.length > 0 ? data.props.searchSuggestions?.data.recommended_images[0].image_url : null} />
                    </div>
                    <div>
                        <div className='flex w-full justify-between items-center'>
                            <div>
                                <Title title='인기 검색어' />

                            </div>
                            <div className='font-normal text-[13px] text-label-solid-subtler'>
                                {new Date().getMonth() + 1}.{new Date().getDate()},  {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')} 기준
                            </div>
                        </div>
                        <div className='mt-4 grid grid-cols-2 grid-flow-col grid-rows-5 gap-x-6 gap-y-4'>
                            {
                                data.props.searchSuggestions?.data.popular_keywords.length > 0 ? data.props.searchSuggestions?.data.popular_keywords.map((data, idx) => (
                                    <PopularSearch title={data.keyword} key={data.keyword} rank={idx + 1} state={data.state} />
                                )) : (
                                    <div className='text-sm font-normal text-label-solid-subtler'>
                                        인기 검색어가 없습니다.
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
