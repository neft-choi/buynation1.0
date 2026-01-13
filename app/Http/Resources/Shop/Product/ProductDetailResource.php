<?php

namespace App\Http\Resources\Shop\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return [
            'product' => new ProductResource($this['product']) 
            // [
            //     'productId' => $this['product']['product_id'],
            //     'title' => $this['product']['title'],
            //     'price' => $this['product']['price'],
            //     'originalPrice' => $this['product']['original_price'],
            //     'discountRate' => $this['product']['discount_rate'],
            //     'rating' => $this['product']['rating'],
            //     'purchaseCount' => $this['product']['purchase_count'],
            //     'shippingTypes' => $this['product']['shipping_types'],
            //     'benefits' => $this['product']['benefits'],
            //     'imageUrl' => $this['product']['image_url'],
            // ]
            ,

            'detail' => [
                'shippingInfo' => $this['detail']['shipping_info'],
                'shippingFee' => $this['detail']['shipping_fee'],
                'freeShippingPolicy' => $this['detail']['free_shipping_policy'],
                'estimatedArrival' => $this['detail']['estimated_arrival'],

                'interestFreeBenefit' => $this['detail']['interest_free_benefit'],
                'pointRate' => $this['detail']['point_rate'],
                'weight' => $this['detail']['weight'],
                'mainSpec' => $this['detail']['main_spec'],
                'expirationDate' => $this['detail']['expiration_date'],
                'usageMethod' => $this['detail']['usage_method'],
                'precautions' => $this['detail']['precautions'],

                'qualityGuarantee' => $this['detail']['quality_guarantee'],
                'returnPeriod' => $this['detail']['return_period'],
                'returnPolicy' => $this['detail']['return_policy'],
                'nonReturnableCases' => $this['detail']['non_returnable_cases'],
            ],
        ];
    }
}
