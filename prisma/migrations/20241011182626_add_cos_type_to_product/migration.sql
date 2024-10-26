-- CreateEnum
CREATE TYPE "CosType" AS ENUM ('Constant', 'ByPeriodBatchMarketplace');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "cosType" "CosType" NOT NULL DEFAULT 'Constant';
