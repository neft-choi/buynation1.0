<?php

namespace App\Http\Resources\Shop\Mypage;

use App\Http\Resources\Shop\Product\ProductResource;
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
                fn($product)=>new ProductResource($product)
            )
        ];
    }
}
