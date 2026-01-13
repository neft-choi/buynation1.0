import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export function formatDiscountedKRW(priceKRW:number, discountRate:number) {
  const discounted = priceKRW * (1 - discountRate / 100);
  const rounded = Math.round(discounted);
  return rounded.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }).replace('₩', '')+'원';
}
export function formatKRW(priceKRW:number) {
  const rounded = Math.round(priceKRW);
  return rounded.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }).replace('₩', '')+'원';
}
