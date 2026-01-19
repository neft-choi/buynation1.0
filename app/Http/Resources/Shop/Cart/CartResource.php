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
                'productId' => $item['product_id'],
                'name' => $item['name'],
                'price' => $item['price'],
                'quantity' => $item['quantity'],
                'subtotal' => $item['subtotal'],
            ]),
            'totalPrice' =>  $this['total_price'],
        ];
    }
}
