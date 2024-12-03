import React, { useEffect, useState } from "react";
import { calculateTile } from "@/actions/tileCalculation";
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
  const [isLoading, setIsLoading] = useState(true);
  const { userId, isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isLoaded || !isSignedIn || !userId) {
          setIsLoading(false);
          return;
        }

        const stats = await calculateTile(startDate, endDate, userId);
        setTodayStats(stats);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [startDate, endDate, userId, isLoaded, isSignedIn]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="bg-gray-200 p-4 rounded shadow w-1/4 mx-2">
        Loading...
      </div>
    );
  }

  // Show sign-in message if not authenticated
  if (!isSignedIn) {
    return (
      <div className="bg-gray-200 p-4 rounded shadow w-1/4 mx-2">
        Please sign in to view statistics
      </div>
    );
  }

  // Show error state if no data
  if (!todayStats) {
    return (
      <div className="bg-gray-200 p-4 rounded shadow w-1/4 mx-2">
        No data available
      </div>
    );
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
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span>Units:</span>{" "}
          <span>{formatNumber(todayStats.totalUnitsSold)}</span>
        </div>
        <div className="flex justify-between">
          <span>Refunds:</span>{" "}
          <span>{formatNumber(todayStats.totalRefunds)}</span>
        </div>
        <div className="flex justify-between">
          <span>Sales:</span>{" "}
          <span>${formatNumber(todayStats.totalSales)}</span>
        </div>
        <div className="flex justify-between">
          <span>Promo Cost:</span>{" "}
          <span>${formatNumber(todayStats.totalPromoCosts)}</span>
        </div>
        <div className="flex justify-between">
          <span>Marketing Costs:</span>{" "}
          <span>${formatNumber(todayStats.totalMarketingCosts)}</span>
        </div>
        <div className="flex justify-between">
          <span>Refunds Cost:</span>{" "}
          <span>${formatNumber(todayStats.totalRefundCosts)}</span>
        </div>
        <div className="flex justify-between">
          <span>TikTok Fees:</span>{" "}
          <span>${formatNumber(todayStats.totalTiktokFees)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Cost:</span>{" "}
          <span>${formatNumber(todayStats.totalShippingFees)}</span>
        </div>
        <div className="flex justify-between">
          <span>Adjustment Fees:</span>{" "}
          <span>${formatNumber(todayStats.totalAdjustmentFees)}</span>
        </div>
        <div className="flex justify-between">
          <span>Gross Profit:</span>{" "}
          <span>${formatNumber(todayStats.totalGrossProfit)}</span>
        </div>
        <div className="flex justify-between">
          <span>Expenses:</span>{" "}
          <span>${formatNumber(todayStats.totalExpenses)}</span>
        </div>
        <div className="flex justify-between">
          <span>Net Profit:</span>{" "}
          <span>${formatNumber(todayStats.totalNetProfit)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Payout:</span>{" "}
          <span>${formatNumber(todayStats.totalEstimatedPayout)}</span>
        </div>
        <div className="flex justify-between">
          <span>Margin:</span> <span>{formatNumber(todayStats.margin)}%</span>
        </div>
        <div className="flex justify-between">
          <span>Real ACOS:</span>{" "}
          <span>{formatNumber(todayStats.realAcos)}%</span>
        </div>
        <div className="flex justify-between">
          <span>ROI:</span> <span>{formatNumber(todayStats.roi)}%</span>
        </div>
        <div className="flex justify-between">
          <span>Percent Refunds:</span>{" "}
          <span>{formatNumber(todayStats.percentRefunds)}%</span>
        </div>
      </div>
    </div>
  );
}

export default Tile;
