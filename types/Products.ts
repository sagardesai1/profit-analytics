export interface TikTokOrder {
  statementDateUtc: Date;
  statementId: string;
  paymentId: string;
  status: string;
  currency: string;
  type: string;
  orderAdjustmentId: string;
  skuId: string;
  quantity: number;
  productName: string;
  orderCreatedDate: Date;
  totalSettlementAmount: number;
  netSales: number;
  grossSales: number;
  grossSalesRefund: number;
  sellerDiscount: number;
  sellerDiscountRefund: number;
  shipping: number;
  tiktokShippingFee: number;
  fbtShippingFee: number;
  fbtFulfillmentFee: number;
  customerShippingFeeOffset: number;
  limitedTimeSignupShippingIncentive: number;
  signatureConfirmationFee: number;
  shippingInsuranceFee: number;
  customerPaidShippingFee: number;
  customerPaidShippingFeeRefund: number;
  tiktokShippingIncentive: number;
  tiktokShippingIncentiveRefund: number;
  shippingFeeSubsidy: number;
  returnShippingFee: number;
  fees: number;
  transactionFee: number;
  referralFee: number;
  refundAdminFee: number;
  affiliateCommission: number;
  affiliatePartnerCommission: number;
  adjustmentAmount: number;
  relatedOrderId: string;
  userId: string;
}

export interface Summary {
  unitsSold: number;
  sales: number;
  refunds: number;
  adsCost: number;
  grossProfit: number;
  netProfit: number;
  sellableReturns: number;
  margin: number;
}
