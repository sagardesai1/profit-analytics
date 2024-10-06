/*
  Warnings:

  - A unique constraint covering the columns `[productId,userId]` on the table `ProductSalesSummary` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProductSalesSummary_productId_userId_key" ON "ProductSalesSummary"("productId", "userId");
