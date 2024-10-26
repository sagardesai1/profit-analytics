/*
  Warnings:

  - You are about to drop the column `endDate` on the `CostOfGoods` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `CostOfGoods` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `marketplace` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `cogsType` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `ProductSalesSummary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductSalesSummary" DROP CONSTRAINT "ProductSalesSummary_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSalesSummary" DROP CONSTRAINT "ProductSalesSummary_userId_fkey";

-- DropIndex
DROP INDEX "CostOfGoods_productId_startDate_endDate_idx";

-- AlterTable
ALTER TABLE "CostOfGoods" DROP COLUMN "endDate",
DROP COLUMN "startDate";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "category",
DROP COLUMN "marketplace";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cogsType";

-- DropTable
DROP TABLE "ProductSalesSummary";

-- DropEnum
DROP TYPE "CogsType";

-- CreateTable
CREATE TABLE "DailyProductPnL" (
    "id" SERIAL NOT NULL,
    "orderAdjustmentId" TEXT,
    "orderCreatedDate" TIMESTAMP(3),
    "unitsSold" INTEGER,
    "refunds" INTEGER,
    "sales" DOUBLE PRECISION,
    "grossSales" DOUBLE PRECISION,
    "grossSalesRefund" DOUBLE PRECISION,
    "sellerDiscount" DOUBLE PRECISION,
    "sellerDiscountRefund" DOUBLE PRECISION,
    "promoCosts" DOUBLE PRECISION,
    "marketingCosts" DOUBLE PRECISION,
    "sponsoredAdsCosts" DOUBLE PRECISION,
    "affiliateCommissionCosts" DOUBLE PRECISION,
    "affiliatePartnerCommissionCosts" DOUBLE PRECISION,
    "refundCost" DOUBLE PRECISION,
    "customerPaidShippingFeeRefund" DOUBLE PRECISION,
    "tiktokShopShippingIncentiveRefund" DOUBLE PRECISION,
    "refundAdministrationFee" DOUBLE PRECISION,
    "tiktokFees" DOUBLE PRECISION,
    "transactionFee" DOUBLE PRECISION,
    "referralFee" DOUBLE PRECISION,
    "shippingFees" DOUBLE PRECISION,
    "tiktokShopShippingFee" DOUBLE PRECISION,
    "fulfilledByTiktokShopShippingFee" DOUBLE PRECISION,
    "shippingInsuranceFee" DOUBLE PRECISION,
    "customerPaidShippingFee" DOUBLE PRECISION,
    "tiktokShippingIncentive" DOUBLE PRECISION,
    "shippingFeeSubsidy" DOUBLE PRECISION,
    "returnShippingFee" DOUBLE PRECISION,
    "fbtFulfillmentFee" DOUBLE PRECISION,
    "customerShippingFeeOffset" DOUBLE PRECISION,
    "limitedTimeSignupShippingIncentive" DOUBLE PRECISION,
    "adjustmentFees" DOUBLE PRECISION,
    "logisticsAdjustment" DOUBLE PRECISION,
    "logisticsReimbursement" DOUBLE PRECISION,
    "logisticsDeduction" DOUBLE PRECISION,
    "tiktokShopReimbursement" DOUBLE PRECISION,
    "policyViolationDeduction" DOUBLE PRECISION,
    "tiktokFeesAdjustment" DOUBLE PRECISION,
    "adjustmentFromSettlementAccount" DOUBLE PRECISION,
    "chargeback" DOUBLE PRECISION,
    "otherAdjustment" DOUBLE PRECISION,
    "fbtWarehouseServiceFee" DOUBLE PRECISION,
    "cogs" DOUBLE PRECISION,
    "grossProfit" DOUBLE PRECISION,
    "expenses" DOUBLE PRECISION,
    "netProfit" DOUBLE PRECISION,
    "estimatedPayout" DOUBLE PRECISION,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DailyProductPnL_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DailyProductPnL_orderCreatedDate_idx" ON "DailyProductPnL"("orderCreatedDate");

-- CreateIndex
CREATE UNIQUE INDEX "DailyProductPnL_productId_userId_orderCreatedDate_key" ON "DailyProductPnL"("productId", "userId", "orderCreatedDate");

-- CreateIndex
CREATE INDEX "CostOfGoods_productId_idx" ON "CostOfGoods"("productId");

-- AddForeignKey
ALTER TABLE "DailyProductPnL" ADD CONSTRAINT "DailyProductPnL_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyProductPnL" ADD CONSTRAINT "DailyProductPnL_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
