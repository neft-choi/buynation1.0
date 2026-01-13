<?php

namespace App\Http\Resources\Shop\Home;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BestProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this['product_id'],
            'title' => $this['title'],
            'category' => $this['category'],

            'price' => [
                'price' => $this['original_price'],
                'sale' => $this['price'],
                'discountRate' => $this['discount_rate'],
            ],

            'donationPercent' => $this['donation_percent'],
            'rating' => $this['rating'],
            'purchaseCount' => $this['purchase_count'],

            'imageUrl' => $this['image_url'],

            'benefits' => $this['benefits'],
            'tags' => $this['tags'],
            'displayTags' => $this['display_tags'],
            'displayAreas' => $this['display_areas'],
            'shippingTypes' => $this['shipping_types'],
        ];
    }
}
