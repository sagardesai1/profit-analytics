/*
  Warnings:

  - You are about to drop the column `refundCost` on the `DailyProductPnL` table. All the data in the column will be lost.
  - You are about to drop the column `advertisingCost` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Expense` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DailyProductPnL" DROP COLUMN "refundCost",
ADD COLUMN     "refundCosts" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "advertisingCost",
DROP COLUMN "type";
