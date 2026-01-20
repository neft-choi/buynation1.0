<?php

namespace App\Http\Resources\Shop\Cart;

use App\Http\Resources\Shop\Product\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'items' => collect($this['items'])->map(fn ($item) => [
                'id' => $item['product_id'],
                'title' => $item['title'],
                'category' => $item['category'],

                'price' => [
                    'price' => $item['original_price'],
                    'sale' => $item['price'],
                    'discountRate' => $item['discount_rate'],
                ],

                'donationPercent' => $item['donation_percent'],
                'rating' => $item['rating'],
                'purchaseCount' => $item['purchase_count'],

                'imageUrl' => $item['image_url'],

                'benefits' => $item['benefits'],
                'tags' => $item['tags'],
                'displayTags' => $item['display_tags'],
                'displayAreas' => $item['display_areas'],
                'shippingTypes' => $item['shipping_types'],
                'quantity' => $item['quantity'],
                'subtotal' => $item['subtotal'],
                'seller' => '테스트'.$item['category']
                ]
            ),
            'totalPrice' =>  $this['total_price'],
        ];
    }
}
