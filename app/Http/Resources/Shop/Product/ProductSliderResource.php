<?php

namespace App\Http\Resources\Shop\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductSliderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
         return [
            'bannerId' => $this['banner_id'],
            'title'    => $this['title'],
            'imageUrl' => $this['image_url'],
            'linkUrl'  => $this['link_url'],
        ];
    }
}
