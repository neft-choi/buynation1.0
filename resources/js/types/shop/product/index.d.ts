import { Product, ShopResponse } from "../public";
export type Detail = {
  shippingInfo: string;
  shippingFee: number;
  freeShippingPolicy: string;
  estimatedArrival: string;

  interestFreeBenefit: string;
  pointRate: number;

  weight: string;
  mainSpec: string;
  expirationDate: string;
  usageMethod: string;
  precautions: string;

  qualityGuarantee: string;
  returnPeriod: string;
  returnPolicy: string;
  nonReturnableCases: string;
};
type DetailItem = {
    detail : Detail
    product : Product
}

export type DetailItemResponse = ShopResponse<DetailItem>;