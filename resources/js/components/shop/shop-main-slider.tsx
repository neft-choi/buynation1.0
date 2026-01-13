import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Pause, Play } from 'lucide-react';
import { ShopIcon } from './shop-icon';
import { ShopIconButton } from './shop-button';
import { MainSliderType } from '@/types/shop/home';
import { Link } from '@inertiajs/react';

// import required modules
export default function ShopMainSlider({ sliders }: { sliders: MainSliderType[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true); // 현재 autoplay 상태
    const swiperRef = useRef<any>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const paginationRef = useRef(null);

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper) return;
        // 버튼 레퍼런스가 준비됐으면 네비게이션 엘리먼트 연결
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        // 네비게이션을 초기화/업데이트
        if (swiper.navigation && typeof swiper.navigation.init === 'function') {
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [])
    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper || !paginationRef.current) return;

        swiper.params.pagination.el = paginationRef.current;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
    }, []);
    return (
        <div className="relative w-full">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)} // swiper 인스턴스 저장
                spaceBetween={0}
                loop={true}
                modules={[Navigation, Autoplay, Pagination]}
                pagination={{
                    el: paginationRef.current,
                    clickable: true,
                    type: 'fraction',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {sliders.map((slider) => (
                    <SwiperSlide key={slider.title}>
                        <div className="bg-gray-300 h-96 flex items-center justify-center text-xl font-semibold" key={slider.title}>
                            <Link href={slider.linkUrl} className='w-full h-full'>
                                <img className='w-full' src={slider.imageUrl} alt={slider.title} />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}

                {/* 컨트롤 버튼 그룹 */}

                <div className="absolute bottom-4 right-4 grid grid-cols-4 place-self-center z-50  w-35 gap-1">
                    {/* Pagination */}

                    {isPlaying ?
                        <ShopIconButton
                            onClick={() => {
                                if (!swiperRef.current) return;
                                if (isPlaying) {
                                    swiperRef.current.autoplay.stop();
                                    setIsPlaying(false);
                                } else {
                                    swiperRef.current.autoplay.start();
                                    setIsPlaying(true);
                                }
                            }}
                            variant={'black'}
                            className='w-8 h-8 bg-black/45'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 3.33335C4 2.96516 4.29848 2.66669 4.66667 2.66669C5.03486 2.66669 5.33333 2.96516 5.33333 3.33335V12.6667C5.33333 13.0349 5.03486 13.3334 4.66667 13.3334C4.29848 13.3334 4 13.0349 4 12.6667V3.33335Z" fill="white" />
                                <path d="M10.6667 3.33335C10.6667 2.96516 10.9651 2.66669 11.3333 2.66669C11.7015 2.66669 12 2.96516 12 3.33335V12.6667C12 13.0349 11.7015 13.3334 11.3333 13.3334C10.9651 13.3334 10.6667 13.0349 10.6667 12.6667V3.33335Z" fill="white" />
                            </svg>

                        </ShopIconButton>
                        :
                        <ShopIconButton
                            onClick={() => {
                                if (!swiperRef.current) return;
                                if (isPlaying) {
                                    swiperRef.current.autoplay.stop();
                                    setIsPlaying(false);
                                } else {
                                    swiperRef.current.autoplay.start();
                                    setIsPlaying(true);
                                }
                            }}
                            variant={'black'}
                            className='w-8 h-8 bg-black/45'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.52864 3.52864C5.78899 3.26829 6.21099 3.26829 6.47134 3.52864L10.4713 7.52864C10.7317 7.78899 10.7317 8.211 10.4713 8.47134L6.47134 12.4713C6.21099 12.7317 5.78899 12.7317 5.52864 12.4713C5.26829 12.211 5.26829 11.789 5.52864 11.5286L9.05728 7.99999L5.52864 4.47134C5.26829 4.21099 5.26829 3.78899 5.52864 3.52864Z" fill="white" />
                            </svg>

                        </ShopIconButton>}

                    <div className='w-full grid grid-cols-4 col-span-3 place-self-center bg-black/45 rounded-full h-8'>
                        <ShopIconButton ref={prevRef} className='w-8 h-8 bg-transparent border-none text-white/75'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4714 3.52864C10.211 3.26829 9.78901 3.26829 9.52866 3.52864L5.52866 7.52864C5.26831 7.78899 5.26831 8.211 5.52866 8.47134L9.52866 12.4713C9.78901 12.7317 10.211 12.7317 10.4714 12.4713C10.7317 12.211 10.7317 11.789 10.4714 11.5286L6.94272 7.99999L10.4714 4.47134C10.7317 4.21099 10.7317 3.78899 10.4714 3.52864Z" fill="white" />
                        </svg>
                        </ShopIconButton>

                        <div className="swiper-custom-pagination col-span-2  flex items-center text-center justify-center gap-1 w-8 h-8 bg-transparent border-none !text-white/75 text-sm" ref={paginationRef}></div>

                        <ShopIconButton ref={nextRef} className='w-8 h-8 bg-transparent border-none text-white/75'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.52864 3.52864C5.78899 3.26829 6.21099 3.26829 6.47134 3.52864L10.4713 7.52864C10.7317 7.78899 10.7317 8.211 10.4713 8.47134L6.47134 12.4713C6.21099 12.7317 5.78899 12.7317 5.52864 12.4713C5.26829 12.211 5.26829 11.789 5.52864 11.5286L9.05728 7.99999L5.52864 4.47134C5.26829 4.21099 5.26829 3.78899 5.52864 3.52864Z" fill="white" />
                        </svg>
                        </ShopIconButton>
                    </div>
                </div>
            </Swiper>
        </div>
    );
}