import { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

import { ProductComponent, TopTag } from './shop-product-item';
import { Product } from '@/types/shop/public';
import { ShopSliderProps } from '@/types/shop/home';


export default function ShopSlider({ dot = false, sliders, type = '1' }: ShopSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true); // 현재 autoplay 상태
    const swiperRef = useRef<any>(null);
    const paginationRef = useRef(null);
    const sliderArray: Product[] = Array.isArray(sliders)
        ? sliders
        : [sliders];

    const chunkSize = 5;
    const pagedSlides: Product[][] =
        type === '3'
            ? Array.from(
                { length: Math.ceil(sliderArray.length / chunkSize) },
                (_, i) =>
                    sliderArray.slice(i * chunkSize, i * chunkSize + chunkSize)
            )
            : [];

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
                spaceBetween={8}
                loop={false}
                modules={[Pagination]}
                slidesPerView={type == '1' ? 2.2 : type == '2' ? 1.2 : type == "4" ? 1 : 1}
                pagination={{
                    el: paginationRef.current,
                    clickable: true,
                    type: 'bullets',
                }}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {type === '1' &&
                    sliderArray.map((slider) => (
                        <SwiperSlide key={slider.title} >
                            <ProductComponent {...slider} type='1' />
                        </SwiperSlide>
                    ))
                }
                {type === '2' &&
                    sliderArray.map((slider) => (
                        <SwiperSlide key={slider.title} >
                            <ProductComponent {...slider} type='2' />

                        </SwiperSlide>
                    ))
                }
                {type === '3' &&
                    pagedSlides.map((page, pageIndex) => (
                        <SwiperSlide key={pageIndex}>
                            <ProductComponent page={page} pageIndex={pageIndex} type='3' />

                        </SwiperSlide>
                    ))}
                {type === '4' &&
                    sliderArray[0].imageUrl.map((slider, idx) => (
                        <SwiperSlide key={slider + idx} >
                            <img className='aspect-[375/474]' loading="lazy" src={slider} alt={slider} />
                        </SwiperSlide>
                    ))
                }
                {/* 컨트롤 버튼 그룹 */}
                <div className={`${type === '4' && "absolute bottom-2 z-50 w-full"}`}>
                    {/* Pagination */}
                    <div className=''>
                        {dot && <div className="swiper-custom-pagination text-center" ref={paginationRef}></div>}
                    </div>
                </div>
            </Swiper>
        </div>
    );
}