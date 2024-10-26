import React, { useEffect, useState } from "react";
import { calculateTitle } from "@/actions/titleCalculation";
import { useAuth } from "@clerk/nextjs";

// Define the interface for the stats object
interface Stats {
  totalUnitsSold: number;
  totalRefunds: number;
  totalSales: number;
  totalGrossSales: number;
  totalGrossSalesRefund: number;
  totalSellerDiscount: number;
  totalSellerDiscountRefund: number;
  totalPromoCosts: number;
  totalMarketingCosts: number;
  totalSponsoredAdsCosts: number;
  totalAffiliateCommissionCosts: number;
  totalAffiliatePartnerCommissionCosts: number;
  totalRefundCosts: number;
  totalCustomerPaidShippingFeeRefund: number;
  totalTiktokShopShippingIncentiveRefund: number;
  totalRefundAdministrationFee: number;
  totalTiktokFees: number;
  totalTransactionFee: number;
  totalReferralFee: number;
  totalShippingFees: number;
  totalTiktokShopShippingFee: number;
  totalFulfilledByTiktokShopShippingFee: number;
  totalShippingInsuranceFee: number;
  totalCustomerPaidShippingFee: number;
  totalTiktokShippingIncentive: number;
  totalShippingFeeSubsidy: number;
  totalReturnShippingFee: number;
  totalFbtFulfillmentFee: number;
  totalCustomerShippingFeeOffset: number;
  totalLimitedTimeSignupShippingIncentive: number;
  totalAdjustmentFees: number;
  totalLogisticsAdjustment: number;
  totalLogisticsReimbursement: number;
  totalLogisticsDeduction: number;
  totalTiktokShopReimbursement: number;
  totalPolicyViolationDeduction: number;
  totalTiktokFeesAdjustment: number;
  totalAdjustmentFromSettlementAccount: number;
  totalChargeback: number;
  totalOtherAdjustment: number;
  totalFbtWarehouseServiceFee: number;
  totalCogs: number;
  totalGrossProfit: number;
  totalExpenses: number;
  totalNetProfit: number;
  totalEstimatedPayout: number;
  margin: number;
  realAcos: number;
  roi: number;
  percentRefunds: number;
}

interface TileProps {
  label: string;
  startDate: Date;
  endDate: Date;
}

function Tile({ label, startDate, endDate }: TileProps) {
  const [todayStats, setTodayStats] = useState<Stats | null>(null);
  const { userId } = useAuth();
  if (!userId) {
    return null;
  }
  useEffect(() => {
    const fetchData = async () => {
      const stats = await calculateTitle(startDate, endDate, userId);
      setTodayStats(stats);
    };

    fetchData();
  }, [startDate, endDate, userId]);

  if (!todayStats) {
    return <div>Loading...</div>;
  }

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <div className="bg-gray-200 p-4 rounded shadow w-1/4 mx-2">
      <h3 className="font-bold">{label}</h3>
      <h4 className="text-sm text-gray-600">
        {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
      </h4>
      <p>Units: {formatNumber(todayStats.totalUnitsSold)}</p>
      <p>Refunds: {formatNumber(todayStats.totalRefunds)}</p>
      <p>Sales: ${formatNumber(todayStats.totalSales)}</p>
      <p>Promo Cost: ${formatNumber(todayStats.totalPromoCosts)}</p>
      <p>Marketing Costs: ${formatNumber(todayStats.totalMarketingCosts)}</p>
      <p>Refunds Cost: ${formatNumber(todayStats.totalRefundCosts)}</p>
      <p>TikTok Fees: ${formatNumber(todayStats.totalTiktokFees)}</p>
      <p>Shipping Cost: ${formatNumber(todayStats.totalShippingFees)}</p>
      <p>Adjustment Fees: ${formatNumber(todayStats.totalAdjustmentFees)}</p>
      <p>Gross Profit: ${formatNumber(todayStats.totalGrossProfit)}</p>
      <p>Expenses: ${formatNumber(todayStats.totalExpenses)}</p>
      <p>Net Profit: ${formatNumber(todayStats.totalNetProfit)}</p>
      <p>Estimated Payout: ${formatNumber(todayStats.totalEstimatedPayout)}</p>
      <p>Margin: {formatNumber(todayStats.margin)}%</p>
      <p>Real ACOS: {formatNumber(todayStats.realAcos)}%</p>
      <p>ROI: {formatNumber(todayStats.roi)}%</p>
      <p>Percent Refunds: {formatNumber(todayStats.percentRefunds)}%</p>
    </div>
  );
}

export default Tile;
