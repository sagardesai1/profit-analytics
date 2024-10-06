-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TiktokOrder" (
    "id" SERIAL NOT NULL,
    "statementDateUtc" TEXT,
    "statementId" TEXT,
    "paymentId" TEXT,
    "status" TEXT,
    "currency" TEXT,
    "type" TEXT,
    "orderAdjustmentId" TEXT,
    "skuId" TEXT,
    "quantity" INTEGER,
    "productName" TEXT,
    "skuName" TEXT,
    "orderCreatedDate" TEXT,
    "orderDeliveryDate" TEXT,
    "totalSettlementAmount" DOUBLE PRECISION,
    "netSales" DOUBLE PRECISION,
    "grossSales" DOUBLE PRECISION,
    "grossSalesRefund" DOUBLE PRECISION,
    "sellerDiscount" DOUBLE PRECISION,
    "sellerDiscountRefund" DOUBLE PRECISION,
    "shipping" DOUBLE PRECISION,
    "tiktokShippingFee" DOUBLE PRECISION,
    "fbtShippingFee" DOUBLE PRECISION,
    "fbtFulfillmentFee" DOUBLE PRECISION,
    "customerShippingFeeOffset" DOUBLE PRECISION,
    "limitedTimeSignupShippingIncentive" DOUBLE PRECISION,
    "signatureConfirmationFee" DOUBLE PRECISION,
    "shippingInsuranceFee" DOUBLE PRECISION,
    "customerPaidShippingFee" DOUBLE PRECISION,
    "customerPaidShippingFeeRefund" DOUBLE PRECISION,
    "tiktokShippingIncentive" DOUBLE PRECISION,
    "tiktokShippingIncentiveRefund" DOUBLE PRECISION,
    "shippingFeeSubsidy" DOUBLE PRECISION,
    "returnShippingFee" DOUBLE PRECISION,
    "fees" DOUBLE PRECISION,
    "transactionFee" DOUBLE PRECISION,
    "referralFee" DOUBLE PRECISION,
    "refundAdminFee" DOUBLE PRECISION,
    "affiliateCommission" DOUBLE PRECISION,
    "affiliatePartnerCommission" DOUBLE PRECISION,
    "adjustmentAmount" DOUBLE PRECISION,
    "adjustmentReason" TEXT,
    "relatedOrderId" TEXT,
    "customerPayment" DOUBLE PRECISION,
    "customerRefund" DOUBLE PRECISION,
    "sellerVoucherDiscount" DOUBLE PRECISION,
    "sellerVoucherDiscountRefund" DOUBLE PRECISION,
    "platformDiscount" DOUBLE PRECISION,
    "platformDiscountRefund" DOUBLE PRECISION,
    "platformVoucherDiscount" DOUBLE PRECISION,
    "platformVoucherDiscountRefund" DOUBLE PRECISION,
    "adsReferralFeeDiscount" DOUBLE PRECISION,
    "salesTaxPayment" DOUBLE PRECISION,
    "salesTaxRefund" DOUBLE PRECISION,
    "retailDeliveryFeePayment" DOUBLE PRECISION,
    "retailDeliveryFeeRefund" DOUBLE PRECISION,
    "customerPaidShippingBeforeDiscount" DOUBLE PRECISION,
    "sellerShippingDiscount" DOUBLE PRECISION,
    "tiktokShippingDiscount" DOUBLE PRECISION,
    "estimatedPackageWeight" DOUBLE PRECISION,
    "chargeablePackageWeight" DOUBLE PRECISION,
    "fbtChargeableGoodsWeight" DOUBLE PRECISION,
    "collectionMethod" TEXT,
    "deliveryOption" TEXT,
    "signatureConfirmationServiceFeeType" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TiktokOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "skuId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "skuName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSalesSummary" (
    "id" SERIAL NOT NULL,
    "unitsSold" INTEGER,
    "refunds" INTEGER,
    "grossSales" DOUBLE PRECISION,
    "netSales" DOUBLE PRECISION,
    "adsCost" DOUBLE PRECISION,
    "grossProfit" DOUBLE PRECISION,
    "netProfit" DOUBLE PRECISION,
    "margin" DOUBLE PRECISION,
    "roi" DOUBLE PRECISION,
    "sellableReturns" DOUBLE PRECISION,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProductSalesSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_skuId_key" ON "Product"("skuId");

-- AddForeignKey
ALTER TABLE "TiktokOrder" ADD CONSTRAINT "TiktokOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSalesSummary" ADD CONSTRAINT "ProductSalesSummary_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSalesSummary" ADD CONSTRAINT "ProductSalesSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
