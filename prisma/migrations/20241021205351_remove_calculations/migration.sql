/*
  Warnings:

  - You are about to drop the column `margin` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the column `percentRefunds` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the column `realAcos` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the column `roi` on the `ProductSalesSummary` table. All the data in the column will be lost.
  - You are about to drop the `ProfitAndLoss` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProfitAndLoss" DROP CONSTRAINT "ProfitAndLoss_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProfitAndLoss" DROP CONSTRAINT "ProfitAndLoss_userId_fkey";

-- AlterTable
ALTER TABLE "ProductSalesSummary" DROP COLUMN "margin",
DROP COLUMN "percentRefunds",
DROP COLUMN "realAcos",
DROP COLUMN "roi";

-- DropTable
DROP TABLE "ProfitAndLoss";
