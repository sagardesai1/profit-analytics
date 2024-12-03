"use server";

import prisma from "@/lib/prisma";

export async function calculateTile(
  startDate: Date,
  endDate: Date,
  userId: string
) {
  // Fetch all required fields from productPnLSummaries within the specified date range
  const productPnLSummaries = await prisma.dailyProductPnL.findMany({
    where: {
      orderCreatedDate: {
        gte: startDate,
        lte: endDate,
      },
      // userId,
    },
    select: {
      unitsSold: true,
      refunds: true,
      sales: true,
      grossSales: true,
      grossSalesRefund: true,
      sellerDiscount: true,
      sellerDiscountRefund: true,
      promoCosts: true,
      marketingCosts: true,
      sponsoredAdsCosts: true,
      affiliateCommissionCosts: true,
      affiliatePartnerCommissionCosts: true,
      refundCosts: true,
      customerPaidShippingFeeRefund: true,
      tiktokShopShippingIncentiveRefund: true,
      refundAdministrationFee: true,
      tiktokFees: true,
      transactionFee: true,
      referralFee: true,
      shippingFees: true,
      tiktokShopShippingFee: true,
      fulfilledByTiktokShopShippingFee: true,
      shippingInsuranceFee: true,
      customerPaidShippingFee: true,
      tiktokShippingIncentive: true,
      shippingFeeSubsidy: true,
      returnShippingFee: true,
      fbtFulfillmentFee: true,
      customerShippingFeeOffset: true,
      limitedTimeSignupShippingIncentive: true,
      adjustmentFees: true,
      logisticsAdjustment: true,
      logisticsReimbursement: true,
      logisticsDeduction: true,
      tiktokShopReimbursement: true,
      policyViolationDeduction: true,
      tiktokFeesAdjustment: true,
      adjustmentFromSettlementAccount: true,
      chargeback: true,
      otherAdjustment: true,
      fbtWarehouseServiceFee: true,
      cogs: true,
      grossProfit: true,
      expenses: true,
      netProfit: true,
      estimatedPayout: true,
    },
  });

  // Assuming productPnLSummaries is not empty, calculate totals
  const totals = productPnLSummaries.reduce(
    (acc, item) => {
      acc.totalUnitsSold += item.unitsSold ?? 0;
      acc.totalRefunds += item.refunds ?? 0;
      acc.totalSales += item.sales ?? 0;
      acc.totalGrossSales += item.grossSales ?? 0;
      acc.totalGrossSalesRefund += item.grossSalesRefund ?? 0;
      acc.totalSellerDiscount += item.sellerDiscount ?? 0;
      acc.totalSellerDiscountRefund += item.sellerDiscountRefund ?? 0;
      acc.totalPromoCosts += item.promoCosts ?? 0;
      acc.totalMarketingCosts += item.marketingCosts ?? 0;
      acc.totalSponsoredAdsCosts += item.sponsoredAdsCosts ?? 0;
      acc.totalAffiliateCommissionCosts += item.affiliateCommissionCosts ?? 0;
      acc.totalAffiliatePartnerCommissionCosts +=
        item.affiliatePartnerCommissionCosts ?? 0;
      acc.totalRefundCosts += item.refundCosts ?? 0;
      acc.totalCustomerPaidShippingFeeRefund +=
        item.customerPaidShippingFeeRefund ?? 0;
      acc.totalTiktokShopShippingIncentiveRefund +=
        item.tiktokShopShippingIncentiveRefund ?? 0;
      acc.totalTiktokFees += item.tiktokFees ?? 0;
      acc.totalTransactionFee += item.transactionFee ?? 0;
      acc.totalReferralFee += item.referralFee ?? 0;
      acc.totalShippingFees += item.shippingFees ?? 0;
      acc.totalTiktokShopShippingFee += item.tiktokShopShippingFee ?? 0;
      acc.totalFulfilledByTiktokShopShippingFee +=
        item.fulfilledByTiktokShopShippingFee ?? 0;
      acc.totalShippingInsuranceFee += item.shippingInsuranceFee ?? 0;
      acc.totalCustomerPaidShippingFee += item.customerPaidShippingFee ?? 0;
      acc.totalTiktokShippingIncentive += item.tiktokShippingIncentive ?? 0;
      acc.totalShippingFeeSubsidy += item.shippingFeeSubsidy ?? 0;
      acc.totalReturnShippingFee += item.returnShippingFee ?? 0;
      acc.totalFbtFulfillmentFee += item.fbtFulfillmentFee ?? 0;
      acc.totalCustomerShippingFeeOffset += item.customerShippingFeeOffset ?? 0;
      acc.totalLimitedTimeSignupShippingIncentive +=
        item.limitedTimeSignupShippingIncentive ?? 0;
      acc.totalAdjustmentFees += item.adjustmentFees ?? 0;
      acc.totalLogisticsAdjustment += item.logisticsAdjustment ?? 0;
      acc.totalLogisticsReimbursement += item.logisticsReimbursement ?? 0;
      acc.totalLogisticsDeduction += item.logisticsDeduction ?? 0;
      acc.totalTiktokShopReimbursement += item.tiktokShopReimbursement ?? 0;
      acc.totalPolicyViolationDeduction += item.policyViolationDeduction ?? 0;
      acc.totalTiktokFeesAdjustment += item.tiktokFeesAdjustment ?? 0;
      acc.totalAdjustmentFromSettlementAccount +=
        item.adjustmentFromSettlementAccount ?? 0;
      acc.totalChargeback += item.chargeback ?? 0;
      acc.totalOtherAdjustment += item.otherAdjustment ?? 0;
      acc.totalFbtWarehouseServiceFee += item.fbtWarehouseServiceFee ?? 0;
      acc.totalCogs += item.cogs ?? 0;
      acc.totalGrossProfit += item.grossProfit ?? 0;
      acc.totalExpenses += item.expenses ?? 0;
      acc.totalNetProfit += item.netProfit ?? 0;
      acc.totalEstimatedPayout += item.estimatedPayout ?? 0;
      return acc;
    },
    {
      totalUnitsSold: 0,
      totalRefunds: 0,
      totalSales: 0,
      totalGrossSales: 0,
      totalGrossSalesRefund: 0,
      totalSellerDiscount: 0,
      totalSellerDiscountRefund: 0,
      totalPromoCosts: 0,
      totalMarketingCosts: 0,
      totalSponsoredAdsCosts: 0,
      totalAffiliateCommissionCosts: 0,
      totalAffiliatePartnerCommissionCosts: 0,
      totalRefundCosts: 0,
      totalCustomerPaidShippingFeeRefund: 0,
      totalTiktokShopShippingIncentiveRefund: 0,
      totalRefundAdministrationFee: 0,
      totalTiktokFees: 0,
      totalTransactionFee: 0,
      totalReferralFee: 0,
      totalShippingFees: 0,
      totalTiktokShopShippingFee: 0,
      totalFulfilledByTiktokShopShippingFee: 0,
      totalShippingInsuranceFee: 0,
      totalCustomerPaidShippingFee: 0,
      totalTiktokShippingIncentive: 0,
      totalShippingFeeSubsidy: 0,
      totalReturnShippingFee: 0,
      totalFbtFulfillmentFee: 0,
      totalCustomerShippingFeeOffset: 0,
      totalLimitedTimeSignupShippingIncentive: 0,
      totalAdjustmentFees: 0,
      totalLogisticsAdjustment: 0,
      totalLogisticsReimbursement: 0,
      totalLogisticsDeduction: 0,
      totalTiktokShopReimbursement: 0,
      totalPolicyViolationDeduction: 0,
      totalTiktokFeesAdjustment: 0,
      totalAdjustmentFromSettlementAccount: 0,
      totalChargeback: 0,
      totalOtherAdjustment: 0,
      totalFbtWarehouseServiceFee: 0,
      totalCogs: 0,
      totalGrossProfit: 0,
      totalExpenses: 0,
      totalNetProfit: 0,
      totalEstimatedPayout: 0,
    }
  );

  // Use totals object to access all calculated totals
  const {
    totalUnitsSold,
    totalRefunds,
    totalSales,
    totalGrossSales,
    totalGrossSalesRefund,
    totalSellerDiscount,
    totalSellerDiscountRefund,
    totalPromoCosts,
    totalMarketingCosts,
    totalSponsoredAdsCosts,
    totalAffiliateCommissionCosts,
    totalAffiliatePartnerCommissionCosts,
    totalRefundCosts,
    totalCustomerPaidShippingFeeRefund,
    totalTiktokShopShippingIncentiveRefund,
    totalRefundAdministrationFee,
    totalTiktokFees,
    totalTransactionFee,
    totalReferralFee,
    totalShippingFees,
    totalTiktokShopShippingFee,
    totalFulfilledByTiktokShopShippingFee,
    totalShippingInsuranceFee,
    totalCustomerPaidShippingFee,
    totalTiktokShippingIncentive,
    totalShippingFeeSubsidy,
    totalReturnShippingFee,
    totalFbtFulfillmentFee,
    totalCustomerShippingFeeOffset,
    totalLimitedTimeSignupShippingIncentive,
    totalAdjustmentFees,
    totalLogisticsAdjustment,
    totalLogisticsReimbursement,
    totalLogisticsDeduction,
    totalTiktokShopReimbursement,
    totalPolicyViolationDeduction,
    totalTiktokFeesAdjustment,
    totalAdjustmentFromSettlementAccount,
    totalChargeback,
    totalOtherAdjustment,
    totalFbtWarehouseServiceFee,
    totalCogs,
    totalGrossProfit,
    totalExpenses,
    totalNetProfit,
    totalEstimatedPayout,
  } = totals;

  // Margin
  const margin = totalSales !== 0 ? (totalNetProfit / totalSales) * 100 : 0;

  // Real ACOS
  const realAcos =
    totalSales !== 0
      ? ((totalMarketingCosts + totalPromoCosts) / totalSales) * 100
      : 0;

  // ROI
  const roi = totalSales !== 0 ? (totalNetProfit / totalCogs) * 100 : 0;

  // Percent Refunds
  const percentRefunds =
    totalUnitsSold !== 0 ? (totalRefunds / totalUnitsSold) * 100 : 0;

  return {
    totalUnitsSold,
    totalRefunds,
    totalSales,
    totalGrossSales,
    totalGrossSalesRefund,
    totalSellerDiscount,
    totalSellerDiscountRefund,
    totalPromoCosts,
    totalMarketingCosts,
    totalSponsoredAdsCosts,
    totalAffiliateCommissionCosts,
    totalAffiliatePartnerCommissionCosts,
    totalRefundCosts,
    totalCustomerPaidShippingFeeRefund,
    totalTiktokShopShippingIncentiveRefund,
    totalRefundAdministrationFee,
    totalTiktokFees,
    totalTransactionFee,
    totalReferralFee,
    totalShippingFees,
    totalTiktokShopShippingFee,
    totalFulfilledByTiktokShopShippingFee,
    totalShippingInsuranceFee,
    totalCustomerPaidShippingFee,
    totalTiktokShippingIncentive,
    totalShippingFeeSubsidy,
    totalReturnShippingFee,
    totalFbtFulfillmentFee,
    totalCustomerShippingFeeOffset,
    totalLimitedTimeSignupShippingIncentive,
    totalAdjustmentFees,
    totalLogisticsAdjustment,
    totalLogisticsReimbursement,
    totalLogisticsDeduction,
    totalTiktokShopReimbursement,
    totalPolicyViolationDeduction,
    totalTiktokFeesAdjustment,
    totalAdjustmentFromSettlementAccount,
    totalChargeback,
    totalOtherAdjustment,
    totalFbtWarehouseServiceFee,
    totalCogs,
    totalGrossProfit,
    totalExpenses,
    totalNetProfit,
    totalEstimatedPayout,
    margin,
    realAcos,
    roi,
    percentRefunds,
  };
}
