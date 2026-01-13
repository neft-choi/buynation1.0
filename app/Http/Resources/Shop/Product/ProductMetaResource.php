<?php

namespace App\Http\Resources\Shop\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductMetaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'categories'     => $this['categories'] ?? [],
            'tags'           => $this['tags'] ?? [],
            'displayTags'   => $this['display_tags'] ?? [],
            'displayAreas'  => $this['display_areas'] ?? [],
        ];
    }
}
