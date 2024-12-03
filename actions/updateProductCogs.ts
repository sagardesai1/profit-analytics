"use server";

import prisma from "@/lib/prisma";

export async function updateProductCogs(productId: number, price: number) {
  try {
    console.log("Updating product cogs:", productId, price);

    // Create a new CostOfGoods entry
    await prisma.costOfGoods.create({
      data: {
        price,
        productId,
      },
    });

    // Update all DailyProductPnL records for this product
    const pnlRecords = await prisma.dailyProductPnL.findMany({
      where: { productId },
    });

    // Update each PnL record with new net profit calculation
    for (const pnl of pnlRecords) {
      const grossProfit =
        (pnl.sales || 0) +
        (pnl.promoCosts || 0) +
        (pnl.marketingCosts || 0) +
        (pnl.refundCosts || 0) +
        (pnl.tiktokFees || 0) +
        (pnl.shippingFees || 0) +
        (pnl.adjustmentFees || 0) +
        -1 * (price * (pnl.unitsSold || 0));

      const netProfit = grossProfit - (pnl.expenses || 0);
      await prisma.dailyProductPnL.update({
        where: { id: pnl.id },
        data: {
          cogs: price * (pnl.unitsSold || 0),
          grossProfit,
          netProfit,
          lastUpdated: new Date(),
        },
      });
    }

    console.log("Product cogs and PnL calculations updated successfully");
    return { success: true };
  } catch (error) {
    console.error("Error updating product cogs:", error);
    return { success: false, error: "Failed to update product cogs" };
  }
}
