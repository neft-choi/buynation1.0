<?php

namespace App\Http\Resources\Shop\Mypage;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MypageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'banners' => collect($this['banners'])->map(fn ($item) => [
                'bannerId' => $item['banner_id'],
                'imageUrl' => $item['image_url'],
                'linkUrl' => $item['link_url'],
                'title' => $item['title'],
            ]),
            'couponCount' => $this['coupon_count'],
            'name' => $this['name'],
            'point' => $this['point'],
            'recent_products' => collect($this['recent_products'])->map(
                fn($product)=>[
                    "discountRate" => $product['discount_rate'],
                    "donation_percent" => $product['donation_percent'],
                    "image_url" => $product['donation_percent'],
                    "original_price" => $product['original_price'],
                    "price" => $product['price'],
                    "product_id" => $product['product_id'],
                    "title" => $product['title'],
                    "viewed_at" => $product['viewed_at'],
                ]
            )
        ];
    }
}
