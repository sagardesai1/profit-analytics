/*
  Warnings:

  - You are about to drop the column `fbmShippingCost` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `profitPerUnit` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "fbmShippingCost",
DROP COLUMN "profitPerUnit";
