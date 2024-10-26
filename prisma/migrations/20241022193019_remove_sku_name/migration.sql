/*
  Warnings:

  - You are about to drop the column `skuName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `skuName` on the `TiktokOrder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "skuName";

-- AlterTable
ALTER TABLE "TiktokOrder" DROP COLUMN "skuName";
