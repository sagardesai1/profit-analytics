/*
  Warnings:

  - You are about to drop the column `cosType` on the `Product` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CogsType" AS ENUM ('Constant', 'ByPeriodBatchMarketplace');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cosType",
ADD COLUMN     "cogsType" "CogsType" NOT NULL DEFAULT 'Constant';

-- DropEnum
DROP TYPE "CosType";
