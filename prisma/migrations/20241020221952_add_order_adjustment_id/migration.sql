/*
  Warnings:

  - You are about to drop the column `adjustments` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the `ProductTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductTag" DROP CONSTRAINT "ProductTag_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductTag" DROP CONSTRAINT "ProductTag_tagId_fkey";

-- AlterTable
ALTER TABLE "ProductSalesSummary" DROP COLUMN "adjustments",
ADD COLUMN     "adjustmentFees" DOUBLE PRECISION,
ADD COLUMN     "orderAdjustmentId" INTEGER,
ADD COLUMN     "promoCosts" DOUBLE PRECISION;

-- DropTable
DROP TABLE "ProductTag";

-- DropTable
DROP TABLE "Tag";

-- CreateTable
CREATE TABLE "ProfitAndLoss" (
    "id" SERIAL NOT NULL,
    "orderCreatedDate" TIMESTAMP(3),
    "unitsSold" INTEGER,
    "refunds" INTEGER,
    "sales" DOUBLE PRECISION,
    "promoCosts" DOUBLE PRECISION,
    "adCosts" DOUBLE PRECISION,
    "refundCost" DOUBLE PRECISION,
    "shippingFees" DOUBLE PRECISION,
    "tiktokFees" DOUBLE PRECISION,
    "adjustments" DOUBLE PRECISION,
    "cogs" DOUBLE PRECISION,
    "grossProfit" DOUBLE PRECISION,
    "expenses" DOUBLE PRECISION,
    "netProfit" DOUBLE PRECISION,
    "margin" DOUBLE PRECISION,
    "roi" DOUBLE PRECISION,
    "estimatedPayout" DOUBLE PRECISION,
    "realAcos" DOUBLE PRECISION,
    "percentRefunds" DOUBLE PRECISION,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProfitAndLoss_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProfitAndLoss_orderCreatedDate_idx" ON "ProfitAndLoss"("orderCreatedDate");

-- CreateIndex
CREATE UNIQUE INDEX "ProfitAndLoss_productId_userId_key" ON "ProfitAndLoss"("productId", "userId");

-- CreateIndex
CREATE INDEX "ProductSalesSummary_orderCreatedDate_idx" ON "ProductSalesSummary"("orderCreatedDate");

-- AddForeignKey
ALTER TABLE "ProfitAndLoss" ADD CONSTRAINT "ProfitAndLoss_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfitAndLoss" ADD CONSTRAINT "ProfitAndLoss_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
