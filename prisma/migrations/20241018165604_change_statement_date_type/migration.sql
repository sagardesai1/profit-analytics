/*
  Warnings:

  - You are about to drop the column `adsCost` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the column `percentSellableReturns` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the column `sellableReturns` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the column `adjustmentReason` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `adsReferralFeeDiscount` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `chargeablePackageWeight` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `collectionMethod` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `customerPaidShippingBeforeDiscount` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `customerPayment` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `customerRefund` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryOption` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `estimatedPackageWeight` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `fbtChargeableGoodsWeight` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `orderCreatedDate` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `orderDeliveryDate` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `platformDiscount` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `platformDiscountRefund` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `platformVoucherDiscount` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `platformVoucherDiscountRefund` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `retailDeliveryFeePayment` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `retailDeliveryFeeRefund` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `salesTaxPayment` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `salesTaxRefund` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `sellerShippingDiscount` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `sellerVoucherDiscount` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `sellerVoucherDiscountRefund` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `signatureConfirmationServiceFeeType` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `tiktokShippingDiscount` on the `TiktokOrder` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `TiktokOrder` table. All the data in the column will be lost.
  - The `statementDateUtc` column on the `TiktokOrder` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ProductSalesSummary" DROP COLUMN "adsCost",
DROP COLUMN "percentSellableReturns",
DROP COLUMN "sellableReturns",
ADD COLUMN     "adCosts" DOUBLE PRECISION,
ADD COLUMN     "adjustments" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "TiktokOrder" DROP COLUMN "adjustmentReason",
DROP COLUMN "adsReferralFeeDiscount",
DROP COLUMN "chargeablePackageWeight",
DROP COLUMN "collectionMethod",
DROP COLUMN "customerPaidShippingBeforeDiscount",
DROP COLUMN "customerPayment",
DROP COLUMN "customerRefund",
DROP COLUMN "deliveryOption",
DROP COLUMN "estimatedPackageWeight",
DROP COLUMN "fbtChargeableGoodsWeight",
DROP COLUMN "orderCreatedDate",
DROP COLUMN "orderDeliveryDate",
DROP COLUMN "platformDiscount",
DROP COLUMN "platformDiscountRefund",
DROP COLUMN "platformVoucherDiscount",
DROP COLUMN "platformVoucherDiscountRefund",
DROP COLUMN "retailDeliveryFeePayment",
DROP COLUMN "retailDeliveryFeeRefund",
DROP COLUMN "salesTaxPayment",
DROP COLUMN "salesTaxRefund",
DROP COLUMN "sellerShippingDiscount",
DROP COLUMN "sellerVoucherDiscount",
DROP COLUMN "sellerVoucherDiscountRefund",
DROP COLUMN "signatureConfirmationServiceFeeType",
DROP COLUMN "tiktokShippingDiscount",
DROP COLUMN "type",
DROP COLUMN "statementDateUtc",
ADD COLUMN     "statementDateUtc" TIMESTAMP(3);
