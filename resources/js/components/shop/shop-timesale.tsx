import { useEffect, useState } from "react";
import { ShopIconButton } from "./shop-button";
import { ShopIcon } from "./shop-icon";
import { formatDiscountedKRW, formatKRW } from "@/lib/utils";
import { ProductComponent } from "./shop-product-item";
import { SliderType } from "./shop-slider";

interface ShopTimesaleProps {
    initialTime: number;
    saleKey: string;
    items: SliderType[];
}

export default function ShopTimesale({ items, initialTime, saleKey }: ShopTimesaleProps) {
    const [time, setTime] = useState<number>(() => {
        const saved = localStorage.getItem(`timesale-${saleKey}`);
        return saved ? parseInt(saved) : initialTime;
    });
    useEffect(() => {
        if (time <= 0) return;
        const timer = setInterval(() => {
            setTime((prev) => {
                const newTime = prev - 1;
                localStorage.setItem(`timesale-${saleKey}`, String(newTime));
                return newTime;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [time]);

    // 분과 초 계산
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    // 두 자리 형식으로 표시 (예: 04:07)
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
    )}:${String(seconds).padStart(2, "0")}`;

    return (
        <div className="w-full grid gap-4">
            <div className="flex items-center gap-2">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 1.57793C6.19525 1.57793 0.381159 7.20896 0.381159 14.1223C0.381159 21.0356 6.19525 26.6667 13.3333 26.6667C20.4714 26.6667 26.2855 21.0356 26.2855 14.1223C26.2855 7.20896 20.4714 1.57793 13.3333 1.57793ZM13.3333 23.879C7.77829 23.879 3.25942 19.5024 3.25942 14.1223C3.25942 8.74216 7.77829 4.36557 13.3333 4.36557C18.8884 4.36557 23.4072 8.74216 23.4072 14.1223C23.4072 19.5024 18.8884 23.879 13.3333 23.879ZM0.49629 5.04854C-0.108145 4.54676 -0.16571 3.65472 0.352377 3.08325C1.31659 2.01001 2.45351 1.04828 3.70555 0.239862C4.36755 -0.192222 5.25981 -0.0249635 5.70594 0.616193C6.15207 1.25735 5.97938 2.12152 5.31738 2.5536C4.2812 3.22263 3.34577 4.03105 2.53985 4.92309C2.25203 5.24367 1.86346 5.39699 1.46051 5.39699C1.12951 5.39699 0.784116 5.28549 0.510681 5.04854H0.49629ZM21.3493 2.5536C20.6873 2.12152 20.5146 1.25735 20.9607 0.616193C21.4069 -0.0249635 22.2991 -0.192222 22.9611 0.239862C24.2132 1.04828 25.3357 2.01001 26.3143 3.08325C26.8324 3.66866 26.7748 4.54676 26.1704 5.04854C25.8969 5.28549 25.5659 5.39699 25.2205 5.39699C24.8176 5.39699 24.4146 5.22973 24.1412 4.92309C23.3353 4.03105 22.3999 3.23657 21.3637 2.5536H21.3493ZM17.147 15.544C17.7371 16.0597 17.7946 16.9378 17.2622 17.5093C16.9743 17.8159 16.5858 17.9832 16.1828 17.9832C15.8374 17.9832 15.5064 17.8717 15.233 17.6347L12.3691 15.1677C12.0669 14.9028 11.8798 14.5265 11.8798 14.1223V8.54702C11.8798 7.78042 12.5274 7.1532 13.3189 7.1532C14.1105 7.1532 14.7581 7.78042 14.7581 8.54702V13.4951L17.147 15.544Z" fill="#FFCB1E" />
                </svg>
                <div className="text-[28px] font-bold text-label-solid-strong">{time > 0 ? formattedTime : "타임세일 종료"}</div>
            </div>
            {items.map((item) => (
                <ProductComponent key={item.title} className="max-h-[200px]" type="1" {...item} />
            ))}
        </div>
    );

}
