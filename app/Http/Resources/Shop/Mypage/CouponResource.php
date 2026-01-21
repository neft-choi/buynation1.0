<?php

namespace App\Http\Resources\Shop\Mypage;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CouponResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        "couponId"=> $this['coupon_id'],
        "code"=> $this['code'],
        "title"=> $this['title'],
        "discountType"=> $this['discount_type'],
        "discountValue"=> $this['discount_value'],
        "minOrderAmount"=> $this['min_order_amount'],
        "expiresAt"=> $this['expires_at'],
        "usedAt"=> $this['used_at']
        ];
    }
}
