"use client";

import React, { useState, useEffect } from "react";
import { Search, ChartNoAxesCombined, HandCoins } from "lucide-react";
import EmailSignupForm from "@/components/EmailSignup";

interface CalculatorInputs {
  costPrice: number;
  sellingPrice: number;
  affiliateRate: number;
  affiliateFee: number;
  tiktokHandlingFee: number;
  tiktokShippingFee: number;
  customerShippingFee: number;
  miscShippingFee: number;
  promotionAdjustment: number;
  logisticsReimbursement: number;
  tiktokReimbursement: number;
  chargeback: number;
  miscExpenses: number;
  unitsSold: number;
  sampleUnits: number;
  sampleCost: number;
}

interface CalculatorResults {
  sellingPrice: number;
  costPrice: number;
  sampleCost: number;
  costOfShipping: number;
  costOfSales: number;
  adjustmentFee: number;
  grossProfit: number;
  expenses: number;
  netProfit: number;
  grossProfitMargin: number;
  netProfitMargin: number;
  totalSellingPrice: number;
  totalCostPrice: number;
  totalAffiliateFee: number;
  totalTiktokHandlingFee: number;
  totalSampleCost: number;
  totalShippingFees: number;
  totalAdjustmentFees: number;
  totalExpenses: number;
  totalCostOfSales: number;
}

const formatNumber = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

function FeeCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    costPrice: 0,
    sellingPrice: 0,
    affiliateRate: 0,
    affiliateFee: 0,
    tiktokHandlingFee: 0,
    tiktokShippingFee: 0,
    customerShippingFee: 0,
    miscShippingFee: 0,
    promotionAdjustment: 0,
    logisticsReimbursement: 0,
    tiktokReimbursement: 0,
    chargeback: 0,
    miscExpenses: 0,
    unitsSold: 0,
    sampleUnits: 0,
    sampleCost: 0,
  });

  const [results, setResults] = useState<CalculatorResults>({
    sellingPrice: 0,
    costPrice: 0,
    sampleCost: 0,
    costOfShipping: 0,
    costOfSales: 0,
    adjustmentFee: 0,
    grossProfit: 0,
    expenses: 0,
    netProfit: 0,
    grossProfitMargin: 0,
    netProfitMargin: 0,
    totalSellingPrice: 0,
    totalCostPrice: 0,
    totalAffiliateFee: 0,
    totalTiktokHandlingFee: 0,
    totalSampleCost: 0,
    totalShippingFees: 0,
    totalAdjustmentFees: 0,
    totalExpenses: 0,
    totalCostOfSales: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const calculateResults = () => {
    const costOfShipping =
      inputs.tiktokShippingFee +
      inputs.miscShippingFee -
      inputs.customerShippingFee;
    const costOfSales = inputs.affiliateFee + inputs.tiktokHandlingFee;
    const adjustmentFee =
      -1 *
        (inputs.promotionAdjustment +
          inputs.logisticsReimbursement +
          inputs.tiktokReimbursement) +
      inputs.chargeback;

    const totalSellingPrice = inputs.sellingPrice * inputs.unitsSold;
    const totalCostPrice = inputs.costPrice * inputs.unitsSold;
    const totalAffiliateFee = inputs.affiliateFee * inputs.unitsSold;
    const totalTiktokHandlingFee = inputs.tiktokHandlingFee * inputs.unitsSold;
    const totalSampleCost = inputs.sampleCost * inputs.sampleUnits;
    const totalShippingFees = costOfShipping * inputs.unitsSold;
    const totalAdjustmentFees = adjustmentFee * inputs.unitsSold;
    const totalExpenses = inputs.miscExpenses * inputs.unitsSold;
    const totalCostOfSales =
      (inputs.affiliateFee + inputs.tiktokHandlingFee) * inputs.unitsSold +
      totalSampleCost;

    const totalGrossProfit =
      totalSellingPrice -
      totalCostPrice -
      totalShippingFees -
      (totalAffiliateFee + totalTiktokHandlingFee + totalSampleCost) -
      totalAdjustmentFees;

    const totalNetProfit = totalGrossProfit - totalExpenses;
    const grossProfitMargin = (totalGrossProfit / totalSellingPrice) * 100 || 0;
    const netProfitMargin = (totalNetProfit / totalSellingPrice) * 100 || 0;

    setResults({
      sellingPrice: inputs.sellingPrice,
      costPrice: inputs.costPrice,
      sampleCost: inputs.sampleCost,
      costOfShipping,
      costOfSales,
      adjustmentFee,
      grossProfit: totalGrossProfit,
      expenses: totalExpenses,
      netProfit: totalNetProfit,
      grossProfitMargin,
      netProfitMargin,
      totalSellingPrice,
      totalCostPrice,
      totalAffiliateFee,
      totalTiktokHandlingFee,
      totalSampleCost,
      totalShippingFees,
      totalAdjustmentFees,
      totalExpenses,
      totalCostOfSales,
    });
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">
            Free TikTok Fee Calculator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your TikTok Shop fees, profit margins, and expenses
            instantly. Join thousands of sellers making informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Currency (USD)</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    name="costPrice"
                    placeholder="Cost price"
                    value={inputs.costPrice || ""}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    name="unitsSold"
                    placeholder="Units sold"
                    value={inputs.unitsSold || ""}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <input
                  type="number"
                  name="sellingPrice"
                  placeholder="Selling price"
                  value={inputs.sellingPrice || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Cost of sales</h3>
              <div className="space-y-3">
                <input
                  type="number"
                  name="affiliateRate"
                  placeholder="Affiliate commission rate (%)"
                  value={inputs.affiliateRate || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="affiliateFee"
                  placeholder="Affiliate commission fee"
                  value={inputs.affiliateFee || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="tiktokHandlingFee"
                  placeholder="TikTok Shop handling fee"
                  value={inputs.tiktokHandlingFee || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    name="sampleCost"
                    placeholder="Sample Cost"
                    value={inputs.sampleCost || ""}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    name="sampleUnits"
                    placeholder="Sample Units"
                    value={inputs.sampleUnits || ""}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Cost of shipping</h3>
              <div className="space-y-3">
                <input
                  type="number"
                  name="tiktokShippingFee"
                  placeholder="TikTok Shop shipping fee"
                  value={inputs.tiktokShippingFee || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="customerShippingFee"
                  placeholder="Customer-paid shipping fee"
                  value={inputs.customerShippingFee || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="miscShippingFee"
                  placeholder="Misc Shipping Fee"
                  value={inputs.miscShippingFee || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Adjustment Fee</h3>
              <div className="space-y-3">
                <input
                  type="number"
                  name="promotionAdjustment"
                  placeholder="Promotion Adjustment"
                  value={inputs.promotionAdjustment || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="logisticsReimbursement"
                  placeholder="Logistics reimbursement"
                  value={inputs.logisticsReimbursement || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="tiktokReimbursement"
                  placeholder="TikTok Shop reimbursement"
                  value={inputs.tiktokReimbursement || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  name="chargeback"
                  placeholder="Chargeback"
                  value={inputs.chargeback || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Expenses</h3>
              <input
                type="number"
                name="miscExpenses"
                placeholder="Misc. Expenses"
                value={inputs.miscExpenses || ""}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Enhanced Results Section */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Selling price:</span>
                  <span className="font-medium">
                    ${formatNumber(results.totalSellingPrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Cost price:</span>
                  <span className="font-medium">
                    ${formatNumber(results.totalCostPrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sample Cost:</span>
                  <span className="font-medium">
                    ${formatNumber(results.totalSampleCost)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Cost of shipping:</span>
                  <span className="font-medium">
                    ${formatNumber(results.totalShippingFees)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Cost of sales:</span>
                  <span className="font-medium">
                    ${formatNumber(results.totalCostOfSales)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Adjustment Fee:</span>
                  <span className="font-medium">
                    ${formatNumber(results.totalAdjustmentFees)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Gross Profit:</span>
                  <span className="font-medium">
                    ${formatNumber(results.grossProfit)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Expenses:</span>
                  <span className="font-medium">
                    ${formatNumber(results.totalExpenses)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Net Profit:</span>
                  <span className="font-medium">
                    ${formatNumber(results.netProfit)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Gross profit margin:</span>
                  <span className="font-medium">
                    {formatNumber(results.grossProfitMargin)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Net profit margin:</span>
                  <span className="font-medium">
                    {formatNumber(results.netProfitMargin)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="text-lg font-semibold mb-2">
                Ready to Scale Your Business?
              </h3>
              <p className="text-gray-600 mb-4">
                Get detailed analytics, sample tracking, and advanced profit
                calculations with our full suite of tools.
              </p>
              <a
                target="_blank"
                href="https://getwaitlist.com/waitlist/17274"
                className="block w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Your Fees Automatically Calculated
              </a>
            </div>

            {/* Social Proof */}
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "This tool helped me increase my profit margins by 23% in just
                two months!"
              </blockquote>
              <p className="text-sm text-gray-500 mt-2">
                - Shaff Q., CEO of Ensight
              </p>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-12 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Take Your Business to the Next Level
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            Join SKUhunt today to make financial decisions with confidence.
          </p>
          <a
            target="_blank"
            href="https://getwaitlist.com/waitlist/17274"
            className="block w-full bg-indigo-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Your Free Trial
          </a>
        </div>
        {/* Features Grid */}
        <div className="mt-12 border-t pt-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Unlock More Features with Our Full Suite
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <div className="text-indigo-600 mb-2">
                <ChartNoAxesCombined className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">
                Accurate Analytics Tracking Made Simple
              </h4>
              <p className="text-gray-600">
                Quickly view your sales, sample costs, orders, refunds, ad
                costs, estimated payouts, and net profit-all in one glance with
                our intuitive view for effortless performance comparison.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-indigo-600 mb-2">
                <HandCoins className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">
                Understand Your Sample Costs
              </h4>
              <p className="text-gray-600">
                Gain insights into sample costs and influencer ROI to fine-tune
                your marketing spend and maximize your returns.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="text-indigo-600 mb-2">
                <Search className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">
                Identify Your Best & Worst Performers
              </h4>
              <p className="text-gray-600">
                Easily find your top-selling products and pinpoint
                underperformers with intuitive SKU filters. Focus on what drives
                profits and eliminate what doesn't.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">
            Download Our Free Excel TikTok Shop Calculator
          </h3>
          <p className="text-gray-600 mb-4">
            Save yourself hours of manual calculations and download our free
            Excel calculator. We'll email you a link to download the file.
          </p>
          <EmailSignupForm
            waitlistId={17274}
            referralLink="https://skuhunt.com/fee-calculator"
          />
        </div>
      </div>
    </>
  );
}

export default FeeCalculator;
