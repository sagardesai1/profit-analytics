/*
  Warnings:

  - You are about to drop the column `grossSales` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the column `lastUpdated` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the column `netSales` on the `ProductSalesSummary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "fbmShippingCost" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ProductSalesSummary" DROP COLUMN "grossSales",
DROP COLUMN "lastUpdated",
DROP COLUMN "netSales",
ADD COLUMN     "cogs" DOUBLE PRECISION,
ADD COLUMN     "estimatedPayout" DOUBLE PRECISION,
ADD COLUMN     "expenses" DOUBLE PRECISION,
ADD COLUMN     "percentRefunds" DOUBLE PRECISION,
ADD COLUMN     "percentSellableReturns" DOUBLE PRECISION,
ADD COLUMN     "realAcos" DOUBLE PRECISION,
ADD COLUMN     "refundCost" DOUBLE PRECISION,
ADD COLUMN     "sales" DOUBLE PRECISION,
ADD COLUMN     "tiktokFees" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "CostOfGoods" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "productId" INTEGER NOT NULL,

    CONSTRAINT "CostOfGoods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductTag" (
    "productId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "ProductTag_pkey" PRIMARY KEY ("productId","tagId")
);

-- CreateTable
CREATE TABLE "Expense" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "advertisingCost" BOOLEAN NOT NULL,
    "marketplace" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "productId" INTEGER,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CostOfGoods_productId_startDate_endDate_idx" ON "CostOfGoods"("productId", "startDate", "endDate");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE INDEX "Expense_productId_date_idx" ON "Expense"("productId", "date");

-- AddForeignKey
ALTER TABLE "CostOfGoods" ADD CONSTRAINT "CostOfGoods_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTag" ADD CONSTRAINT "ProductTag_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTag" ADD CONSTRAINT "ProductTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
