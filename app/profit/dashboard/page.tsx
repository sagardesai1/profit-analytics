"use client";

import React from "react";
import { useEffect, useState } from "react";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import { getDashboardProducts } from "@/actions/getDashboardProducts";
import { updateDailyProductPnL } from "@/utils/updateDailyProductPnL";
import Tile from "@/components/tile";
import { ChevronRightIcon, ChevronUpIcon } from "lucide-react";

interface Product {
  id: number;
  productName: string;
  unitsSold: number;
  refunds: number;
  sales: number;
  grossSales: number;
  grossSalesRefund: number;
  sellerDiscount: number;
  sellerDiscountRefund: number;
  promoCosts: number;
  marketingCosts: number;
  sponsoredAdsCosts: number;
  affiliateCommissionCosts: number;
  affiliatePartnerCommissionCosts: number;
  refundCosts: number;
  customerPaidShippingFeeRefund: number;
  tiktokShopShippingIncentiveRefund: number;
  refundAdministrationFee: number;
  tiktokFees: number;
  transactionFee: number;
  referralFee: number;
  shippingFees: number;
  tiktokShopShippingFee: number;
  fulfilledByTiktokShopShippingFee: number;
  shippingInsuranceFee: number;
  customerPaidShippingFee: number;
  tiktokShippingIncentive: number;
  shippingFeeSubsidy: number;
  returnShippingFee: number;
  fbtFulfillmentFee: number;
  customerShippingFeeOffset: number;
  limitedTimeSignupShippingIncentive: number;
  adjustmentFees: number;
  logisticsAdjustment: number;
  logisticsReimbursement: number;
  logisticsDeduction: number;
  tiktokShopReimbursement: number;
  policyViolationDeduction: number;
  tiktokFeesAdjustment: number;
  adjustmentFromSettlementAccount: number;
  chargeback: number;
  otherAdjustment: number;
  fbtWarehouseServiceFee: number;
  cogs: number;
  grossProfit: number;
  expenses: number;
  netProfit: number;
  estimatedPayout: number;
  margin: number;
  realAcos: number;
  roi: number;
  percentRefunds: number;
}

export default function DashboardPage() {
  const { userId } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startDate, setStartDate] = useState<Date>(
    new Date("2024-03-01T00:00:00")
  );
  const [endDate, setEndDate] = useState<Date>(new Date("2024-04-30T23:59:59"));
  const [showSalesBreakdown, setShowSalesBreakdown] = useState(false);
  const [showMarketingCosts, setShowMarketingCosts] = useState(false);
  const [showRefundCosts, setShowRefundCosts] = useState(false);
  const [showTiktokFees, setShowTiktokFees] = useState(false);
  const [showShippingCost, setShowShippingCost] = useState(false);
  const [showAdjustmentFees, setShowAdjustmentFees] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Product | null;
    direction: "asc" | "desc" | null;
  }>({
    key: null,
    direction: null,
  });

  // Use useEffect to fetch products on the client side
  useEffect(() => {
    if (userId) {
      getDashboardProducts(userId, startDate, endDate).then(setProducts);
    }
  }, [userId, startDate, endDate]);

  const handleRefresh = async () => {
    if (userId) {
      setIsRefreshing(true);
      await updateDailyProductPnL(userId);
      const updatedProducts = await getDashboardProducts(
        userId,
        startDate,
        endDate
      );
      setProducts(updatedProducts);
      setIsRefreshing(false);
    }
  };

  const openDialog = (productId: string) => {
    const product =
      products.find((p) => p.id === parseInt(productId, 10)) ?? null;
    setSelectedProduct(product);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
  };

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  const sortProducts = (products: Product[]) => {
    if (!sortConfig.key || !sortConfig.direction) return products;

    return [...products].sort((a, b) => {
      if (a[sortConfig.key!] < b[sortConfig.key!]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key!] > b[sortConfig.key!]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const requestSort = (key: keyof Product) => {
    let direction: "asc" | "desc" | null = "asc";

    if (sortConfig.key === key) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = null;
      }
    }

    setSortConfig({ key, direction });
  };

  const DropdownSection = ({
    title,
    total,
    isOpen,
    setIsOpen,
    children,
  }: {
    title: string;
    total: number;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    children: React.ReactNode;
  }) => (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center">
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 mr-2" />
          ) : (
            <ChevronRightIcon className="h-5 w-5 mr-2" />
          )}
          <span>{title}</span>
        </div>
        <span className="text-right min-w-[100px]">${formatNumber(total)}</span>
      </button>
      {isOpen && (
        <div className="ml-10 mt-2 space-y-1">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              const content = child.props.children;
              const label = content[0].replace(": $", "");
              const value = content[1];
              return (
                <div className="flex justify-between">
                  <span>{label}</span>
                  <span className="text-right min-w-[100px]">${value}</span>
                </div>
              );
            }
            return child;
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-x-8">
          {/* <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            {isRefreshing ? "Refreshing..." : "Refresh All"}
          </button> */}
          <SignOutButton>
            <div className="text-sm/6 font-semibold text-gray-900">
              Log out <span aria-hidden="true">&rarr;</span>
            </div>
          </SignOutButton>
        </div>
      </div>
      {/* New Tiles Section */}
      <div className="flex justify-between mb-6">
        <Tile
          label="Apr 24th, 2024"
          startDate={new Date("2024-04-24T00:00:00")}
          endDate={new Date("2024-04-24T23:59:59")}
        />
        <Tile
          label="Apr 22th, 2024"
          startDate={new Date("2024-04-22T00:00:00")}
          endDate={new Date("2024-04-22T23:59:59")}
        />
        <Tile
          label="This Month"
          startDate={new Date("2024-04-01T00:00:00")}
          endDate={new Date("2024-04-31T23:59:59")}
        />
        <Tile
          label="Last Month"
          startDate={new Date("2024-03-01T00:00:00")}
          endDate={new Date("2024-03-31T23:59:59")}
        />
      </div>
      {/* End of Tiles Section */}
      <div className="flex items-center my-4">
        <label htmlFor="startDate" className="mr-2 font-bold">
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          className="border p-2 rounded"
          onChange={(e) => setStartDate(new Date(`${e.target.value}T00:00:00`))}
        />
        <label htmlFor="endDate" className="ml-4 mr-2 font-bold">
          End Date:
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          className="border p-2 rounded"
          onChange={(e) => setEndDate(new Date(`${e.target.value}T23:59:59`))}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 border-b">
                <button
                  onClick={() => requestSort("productName")}
                  className="font-bold hover:text-blue-600 flex items-center"
                >
                  Product Name
                  {sortConfig.key === "productName" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </th>
              <th className="py-3 px-4 border-b">
                <button
                  onClick={() => requestSort("unitsSold")}
                  className="font-bold hover:text-blue-600 flex items-center justify-center mx-auto"
                >
                  Units Sold
                  {sortConfig.key === "unitsSold" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </th>
              <th className="py-3 px-4 border-b">
                <button
                  onClick={() => requestSort("refunds")}
                  className="font-bold hover:text-blue-600 flex items-center justify-center mx-auto"
                >
                  Refunds
                  {sortConfig.key === "refunds" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </th>
              <th className="py-3 px-4 border-b">
                <button
                  onClick={() => requestSort("sales")}
                  className="font-bold hover:text-blue-600 flex items-center justify-center mx-auto"
                >
                  Sales
                  {sortConfig.key === "sales" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </th>
              <th className="py-3 px-4 border-b">
                <button
                  onClick={() => requestSort("marketingCosts")}
                  className="font-bold hover:text-blue-600 flex items-center justify-center mx-auto"
                >
                  Ads
                  {sortConfig.key === "marketingCosts" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </th>
              <th className="py-3 px-4 border-b">
                <button
                  onClick={() => requestSort("grossProfit")}
                  className="font-bold hover:text-blue-600 flex items-center justify-center mx-auto"
                >
                  Gross Profit
                  {sortConfig.key === "grossProfit" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </th>
              <th className="py-3 px-4 border-b">
                <button
                  onClick={() => requestSort("netProfit")}
                  className="font-bold hover:text-blue-600 flex items-center justify-center mx-auto"
                >
                  Net Profit
                  {sortConfig.key === "netProfit" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </th>
              <th className="py-3 px-4 border-b">
                <button
                  onClick={() => requestSort("margin")}
                  className="font-bold hover:text-blue-600 flex items-center justify-center mx-auto"
                >
                  Margin
                  {sortConfig.key === "margin" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </th>
              <th className="py-3 px-4 border-b">
                <button
                  onClick={() => requestSort("roi")}
                  className="font-bold hover:text-blue-600 flex items-center justify-center mx-auto"
                >
                  ROI
                  {sortConfig.key === "roi" && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </button>
              </th>
              <th className="py-3 px-4 border-b">Info</th>
            </tr>
          </thead>
          <tbody>
            {sortProducts(products).map((product) => (
              <tr key={product.id}>
                <td className="py-3 px-4 border-b">{product.productName}</td>
                <td className="py-3 px-4 border-b text-center">
                  {formatNumber(product.unitsSold)}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {formatNumber(product.refunds)}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  ${formatNumber(parseFloat(product.sales.toFixed(2)))}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  ${formatNumber(parseFloat(product.marketingCosts.toFixed(2)))}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  ${formatNumber(parseFloat(product.grossProfit.toFixed(2)))}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  ${formatNumber(parseFloat(product.netProfit.toFixed(2)))}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {formatNumber(parseFloat(product.margin.toFixed(2)))}%
                </td>
                <td className="py-3 px-4 border-b text-center">
                  {formatNumber(parseFloat(product.roi.toFixed(2)))}%
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <button
                    onClick={() => openDialog(product.id.toString())}
                    className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                  >
                    More Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedProduct && (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-white shadow-xl overflow-y-auto p-8">
          <h2 className="text-xl font-bold mb-4">
            {selectedProduct.productName}
          </h2>
          <div className="flex justify-between mb-2">
            <span className="ml-7">Units</span>
            <span className="text-right min-w-[100px]">
              {formatNumber(selectedProduct.unitsSold)}
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="ml-7">Refunds</span>
            <span className="text-right min-w-[100px]">
              {formatNumber(selectedProduct.refunds)}
            </span>
          </div>

          <DropdownSection
            title="Sales"
            total={parseFloat(selectedProduct.sales?.toFixed(2))}
            isOpen={showSalesBreakdown}
            setIsOpen={setShowSalesBreakdown}
          >
            <p>Gross Sales: ${formatNumber(selectedProduct.grossSales)}</p>
            <p>
              Gross Sales Refund: $
              {formatNumber(selectedProduct.grossSalesRefund)}
            </p>
            <p>
              Seller Discount: ${formatNumber(selectedProduct.sellerDiscount)}
            </p>
            <p>
              Seller Discount Refund: $
              {formatNumber(selectedProduct.sellerDiscountRefund)}
            </p>
          </DropdownSection>

          <p className="flex justify-between mb-2">
            <span className="ml-7">Promo Cost</span>
            <span className="text-right min-w-[100px]">
              $
              {formatNumber(parseFloat(selectedProduct.promoCosts?.toFixed(2)))}
            </span>
          </p>

          <DropdownSection
            title="Marketing Costs"
            total={selectedProduct.marketingCosts}
            isOpen={showMarketingCosts}
            setIsOpen={setShowMarketingCosts}
          >
            <p>
              Sponsored Ads Costs: $
              {formatNumber(selectedProduct.sponsoredAdsCosts)}
            </p>
            <p>
              Affiliate Commission Costs: $
              {formatNumber(selectedProduct.affiliateCommissionCosts)}
            </p>
            <p>
              Affiliate Partner Commission Costs: $
              {formatNumber(selectedProduct.affiliatePartnerCommissionCosts)}
            </p>
          </DropdownSection>

          <DropdownSection
            title="Refund Costs"
            total={selectedProduct.refundCosts}
            isOpen={showRefundCosts}
            setIsOpen={setShowRefundCosts}
          >
            <p>
              Customer Paid Shipping Fee Refund: $
              {formatNumber(selectedProduct.customerPaidShippingFeeRefund)}
            </p>
            <p>
              TikTok Shop Shipping Incentive Refund: $
              {formatNumber(selectedProduct.tiktokShopShippingIncentiveRefund)}
            </p>
            <p>
              Refund Administration Fee: $
              {formatNumber(selectedProduct.refundAdministrationFee)}
            </p>
          </DropdownSection>

          <DropdownSection
            title="TikTok Fees"
            total={selectedProduct.tiktokFees}
            isOpen={showTiktokFees}
            setIsOpen={setShowTiktokFees}
          >
            <p>
              Transaction Fee: ${formatNumber(selectedProduct.transactionFee)}
            </p>
            <p>Referral Fee: ${formatNumber(selectedProduct.referralFee)}</p>
          </DropdownSection>

          <DropdownSection
            title="Shipping Fees"
            total={selectedProduct.shippingFees}
            isOpen={showShippingCost}
            setIsOpen={setShowShippingCost}
          >
            <p>
              TikTok Shop Shipping Fee: $
              {formatNumber(selectedProduct.tiktokShopShippingFee)}
            </p>
            <p>
              Fulfilled By TikTok Shop Shipping Fee: $
              {formatNumber(selectedProduct.fulfilledByTiktokShopShippingFee)}
            </p>
            <p>
              Shipping Insurance Fee: $
              {formatNumber(selectedProduct.shippingInsuranceFee)}
            </p>
            <p>
              Customer Paid Shipping Fee: $
              {formatNumber(selectedProduct.customerPaidShippingFee)}
            </p>
            <p>
              TikTok Shipping Incentive: $
              {formatNumber(selectedProduct.tiktokShippingIncentive)}
            </p>
            <p>
              Shipping Fee Subsidy: $
              {formatNumber(selectedProduct.shippingFeeSubsidy)}
            </p>
            <p>
              Return Shipping Fee: $
              {formatNumber(selectedProduct.returnShippingFee)}
            </p>
            <p>
              FBT Fulfillment Fee: $
              {formatNumber(selectedProduct.fbtFulfillmentFee)}
            </p>
            <p>
              Customer Shipping Fee Offset: $
              {formatNumber(selectedProduct.customerShippingFeeOffset)}
            </p>
            <p>
              Limited Time Signup Shipping Incentive: $
              {formatNumber(selectedProduct.limitedTimeSignupShippingIncentive)}
            </p>
          </DropdownSection>

          <DropdownSection
            title="Adjustment Fees"
            total={selectedProduct.adjustmentFees}
            isOpen={showAdjustmentFees}
            setIsOpen={setShowAdjustmentFees}
          >
            <p>
              Logistics Adjustment: $
              {formatNumber(selectedProduct.logisticsAdjustment)}
            </p>
            <p>
              Logistics Reimbursement: $
              {formatNumber(selectedProduct.logisticsReimbursement)}
            </p>
            <p>
              Logistics Deduction: $
              {formatNumber(selectedProduct.logisticsDeduction)}
            </p>
            <p>
              TikTok Shop Reimbursement: $
              {formatNumber(selectedProduct.tiktokShopReimbursement)}
            </p>
            <p>
              Policy Violation Deduction: $
              {formatNumber(selectedProduct.policyViolationDeduction)}
            </p>
            <p>
              TikTok Fees Adjustment: $
              {formatNumber(selectedProduct.tiktokFeesAdjustment)}
            </p>
            <p>
              Adjustment From Settlement Account: $
              {formatNumber(selectedProduct.adjustmentFromSettlementAccount)}
            </p>
            <p>Chargeback: ${formatNumber(selectedProduct.chargeback)}</p>
            <p>
              Other Adjustment: ${formatNumber(selectedProduct.otherAdjustment)}
            </p>
            <p>
              FBT Warehouse Service Fee: $
              {formatNumber(selectedProduct.fbtWarehouseServiceFee)}
            </p>
          </DropdownSection>
          <div className="flex justify-between mb-2">
            <span className="ml-7">COGS</span>
            <span className="text-right min-w-[100px]">
              ${formatNumber(parseFloat(selectedProduct.cogs?.toFixed(2)))}
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="ml-7">Gross Profit</span>
            <span className="text-right min-w-[100px]">
              $
              {formatNumber(
                parseFloat(selectedProduct.grossProfit?.toFixed(2))
              )}
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="ml-7">Expenses</span>
            <span className="text-right min-w-[100px]">
              ${formatNumber(parseFloat(selectedProduct.expenses?.toFixed(2)))}
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="ml-7">Net Profit</span>
            <span className="text-right min-w-[100px]">
              ${formatNumber(parseFloat(selectedProduct.netProfit?.toFixed(2)))}
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="ml-7">Estimated Payout</span>
            <span className="text-right min-w-[100px]">
              $
              {formatNumber(
                parseFloat(selectedProduct.estimatedPayout?.toFixed(2))
              )}
            </span>
          </div>

          <hr className="my-4 border-t border-gray-300" />

          <div className="flex justify-between mb-2">
            <span className="ml-7">Margin</span>
            <span className="text-right min-w-[100px]">
              {formatNumber(parseFloat(selectedProduct.margin?.toFixed(2)))}%
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="ml-7">Real ACOS</span>
            <span className="text-right min-w-[100px]">
              {formatNumber(parseFloat(selectedProduct.realAcos?.toFixed(2)))}%
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="ml-7">Refunds</span>
            <span className="text-right min-w-[100px]">
              {formatNumber(
                parseFloat(selectedProduct.percentRefunds?.toFixed(2))
              )}
              %
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="ml-7">ROI</span>
            <span className="text-right min-w-[100px]">
              {formatNumber(parseFloat(selectedProduct.roi?.toFixed(2)))}%
            </span>
          </div>

          <button
            onClick={closeDialog}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
