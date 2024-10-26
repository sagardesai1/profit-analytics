"use server";
import prisma from "@/lib/prisma";

export async function getDashboardProducts(
  userId: string,
  startDate: Date,
  endDate: Date
) {
  try {
    const products = await prisma.product.findMany({
      where: {
        userId: userId,
      },
      include: {
        pnlSummaries: {
          where: {
            orderCreatedDate: {
              gte: startDate,
              lte: endDate,
            },
          },
          orderBy: {
            lastUpdated: "desc",
          },
          take: 1,
        },
      },
    });

    return products.map((product) => ({
      id: product.id,
      productName: product.productName,
      unitsSold: product.pnlSummaries[0]?.unitsSold || 0,
      refunds: product.pnlSummaries[0]?.refunds || 0,
      sales: product.pnlSummaries[0]?.sales || 0,
      grossSales: product.pnlSummaries[0]?.grossSales || 0,
      grossSalesRefund: product.pnlSummaries[0]?.grossSalesRefund || 0,
      sellerDiscount: product.pnlSummaries[0]?.sellerDiscount || 0,
      sellerDiscountRefund: product.pnlSummaries[0]?.sellerDiscountRefund || 0,
      promoCosts: product.pnlSummaries[0]?.promoCosts || 0,
      marketingCosts: product.pnlSummaries[0]?.marketingCosts || 0,
      sponsoredAdsCosts: product.pnlSummaries[0]?.sponsoredAdsCosts || 0,
      affiliateCommissionCosts:
        product.pnlSummaries[0]?.affiliateCommissionCosts || 0,
      affiliatePartnerCommissionCosts:
        product.pnlSummaries[0]?.affiliatePartnerCommissionCosts || 0,
      refundCosts: product.pnlSummaries[0]?.refundCosts || 0,
      customerPaidShippingFeeRefund:
        product.pnlSummaries[0]?.customerPaidShippingFeeRefund || 0,
      tiktokShopShippingIncentiveRefund:
        product.pnlSummaries[0]?.tiktokShopShippingIncentiveRefund || 0,
      refundAdministrationFee:
        product.pnlSummaries[0]?.refundAdministrationFee || 0,
      tiktokFees: product.pnlSummaries[0]?.tiktokFees || 0,
      transactionFee: product.pnlSummaries[0]?.transactionFee || 0,
      referralFee: product.pnlSummaries[0]?.referralFee || 0,
      shippingFees: product.pnlSummaries[0]?.shippingFees || 0,
      tiktokShopShippingFee:
        product.pnlSummaries[0]?.tiktokShopShippingFee || 0,
      fulfilledByTiktokShopShippingFee:
        product.pnlSummaries[0]?.fulfilledByTiktokShopShippingFee || 0,
      shippingInsuranceFee: product.pnlSummaries[0]?.shippingInsuranceFee || 0,
      customerPaidShippingFee:
        product.pnlSummaries[0]?.customerPaidShippingFee || 0,
      tiktokShippingIncentive:
        product.pnlSummaries[0]?.tiktokShippingIncentive || 0,
      shippingFeeSubsidy: product.pnlSummaries[0]?.shippingFeeSubsidy || 0,
      returnShippingFee: product.pnlSummaries[0]?.returnShippingFee || 0,
      fbtFulfillmentFee: product.pnlSummaries[0]?.fbtFulfillmentFee || 0,
      customerShippingFeeOffset:
        product.pnlSummaries[0]?.customerShippingFeeOffset || 0,
      limitedTimeSignupShippingIncentive:
        product.pnlSummaries[0]?.limitedTimeSignupShippingIncentive || 0,
      adjustmentFees: product.pnlSummaries[0]?.adjustmentFees || 0,
      logisticsAdjustment: product.pnlSummaries[0]?.logisticsAdjustment || 0,
      logisticsReimbursement:
        product.pnlSummaries[0]?.logisticsReimbursement || 0,
      logisticsDeduction: product.pnlSummaries[0]?.logisticsDeduction || 0,
      tiktokShopReimbursement:
        product.pnlSummaries[0]?.tiktokShopReimbursement || 0,
      policyViolationDeduction:
        product.pnlSummaries[0]?.policyViolationDeduction || 0,
      tiktokFeesAdjustment: product.pnlSummaries[0]?.tiktokFeesAdjustment || 0,
      adjustmentFromSettlementAccount:
        product.pnlSummaries[0]?.adjustmentFromSettlementAccount || 0,
      chargeback: product.pnlSummaries[0]?.chargeback || 0,
      otherAdjustment: product.pnlSummaries[0]?.otherAdjustment || 0,
      fbtWarehouseServiceFee:
        product.pnlSummaries[0]?.fbtWarehouseServiceFee || 0,
      cogs: product.pnlSummaries[0]?.cogs || 0,
      grossProfit: product.pnlSummaries[0]?.grossProfit || 0,
      expenses: product.pnlSummaries[0]?.expenses || 0,
      netProfit: product.pnlSummaries[0]?.netProfit || 0,
      estimatedPayout: product.pnlSummaries[0]?.estimatedPayout || 0,
      margin:
        product.pnlSummaries[0] != null && product.pnlSummaries[0]?.sales !== 0
          ? product.pnlSummaries[0]?.netProfit != null &&
            product.pnlSummaries[0]?.sales != null
            ? (product.pnlSummaries[0]?.netProfit /
                product.pnlSummaries[0]?.sales) *
              100
            : 0 // Handle case where netProfit or sales is null
          : 0,
      roi:
        product.pnlSummaries[0] != null && product.pnlSummaries[0]?.cogs !== 0
          ? product.pnlSummaries[0]?.netProfit != null &&
            product.pnlSummaries[0]?.cogs != null
            ? (product.pnlSummaries[0]?.netProfit /
                product.pnlSummaries[0]?.cogs) *
              100
            : 0 // Handle case where netProfit or cogs is null
          : 0,
      realAcos:
        product.pnlSummaries[0] != null && product.pnlSummaries[0]?.sales !== 0
          ? product.pnlSummaries[0]?.promoCosts != null &&
            product.pnlSummaries[0]?.sales != null &&
            product.pnlSummaries[0]?.marketingCosts != null
            ? ((product.pnlSummaries[0]?.promoCosts +
                product.pnlSummaries[0]?.marketingCosts) /
                product.pnlSummaries[0]?.sales) *
              100
            : 0 // Handle case where promoCosts or sales is null
          : 0,
      percentRefunds:
        product.pnlSummaries[0] != null &&
        product.pnlSummaries[0]?.unitsSold !== 0
          ? product.pnlSummaries[0]?.refunds != null &&
            product.pnlSummaries[0]?.unitsSold != null
            ? (product.pnlSummaries[0]?.refunds /
                product.pnlSummaries[0]?.unitsSold) *
              100
            : 0 // Handle case where refunds or unitsSold is null
          : 0,
      lastUpdated: product.pnlSummaries[0]?.lastUpdated || null,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
