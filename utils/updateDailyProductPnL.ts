"use server";
import prisma from "@/lib/prisma";
import { TikTokOrder } from "@/types/Products";

// Function to update Product and ProductSalesSummary tables
export async function updateDailyProductPnL(userId: string): Promise<void> {
  try {
    const tiktokOrders = await prisma.tiktokOrder.findMany({
      where: { userId: userId },
    });

    for (const order of tiktokOrders) {
      let skuId = order.skuId;
      let productName = order.productName;

      // If SKU ID is not present or is a placeholder, find related order
      if (!skuId || skuId === "/") {
        const relatedOrder = await prisma.tiktokOrder.findFirst({
          where: { orderAdjustmentId: order.relatedOrderId },
        });
        skuId = relatedOrder?.skuId || null;
        productName = relatedOrder?.productName || null;
      }

      // If SKU ID is found, proceed with calculations
      if (skuId) {
        const product = await prisma.product.upsert({
          where: { skuId: skuId },
          update: {
            productName: order.productName || "",
          },
          create: {
            skuId: skuId,
            productName: order.productName || "",
            userId: userId,
          },
        });

        // Fetch Cost of Goods for the product
        const costOfGoods = await prisma.costOfGoods.findFirst({
          where: {
            productId: product.id,
          },
          orderBy: { id: "desc" },
          select: { price: true },
        });

        const cogsPrice = costOfGoods?.price ?? 0;

        // Fetch Expenses for the product
        const expenses = await prisma.expense.findMany({
          where: { productId: product.id },
          select: { amount: true },
        });

        // Calculate total expenses
        const totalExpenses = expenses.reduce(
          (sum, expense) => sum + expense.amount,
          0
        );

        // Calculate financial metrics
        // Units Sold
        const unitsSold = (order.type === "Order" ? order.quantity : 0) || 0;

        // Units Refunded
        const refunds =
          (order.type === "Order" &&
          order.grossSalesRefund != null &&
          order.grossSalesRefund < 0
            ? order.quantity
            : 0) || 0;

        // Sales Information
        const sales = (order.type === "Order" ? order.netSales : 0) || 0;
        const grossSales = (order.type === "Order" ? order.grossSales : 0) || 0;
        const grossSalesRefund =
          (order.type === "Order" ? order.grossSalesRefund : 0) || 0;
        const sellerDiscount =
          (order.type === "Order" ? order.sellerDiscount : 0) || 0;
        const sellerDiscountRefund =
          (order.type === "Order" ? order.sellerDiscountRefund : 0) || 0;

        // Promo Costs
        const promoCosts =
          (order.type === "Promotion adjustment"
            ? order.adjustmentAmount
            : 0) || 0;

        // Marketing Costs
        const sponsoredAdsCosts =
          (order.type === "Top up ads balance using GMV payments"
            ? order.adjustmentAmount
            : 0) || 0;
        const affiliateCommissionCosts =
          (order.type === "Order" ? order.affiliateCommission || 0 : 0) || 0;
        const affiliatePartnerCommissionCosts =
          (order.type === "Order"
            ? order.affiliatePartnerCommission || 0
            : 0) || 0;
        const marketingCosts =
          sponsoredAdsCosts +
          affiliateCommissionCosts +
          affiliatePartnerCommissionCosts;

        // Refund Costs
        const customerPaidShippingFeeRefund =
          (order.type === "Order" ? order.customerPaidShippingFeeRefund : 0) ||
          0;
        const tiktokShopShippingIncentiveRefund =
          (order.type === "Order" ? order.tiktokShippingIncentiveRefund : 0) ||
          0;
        const refundAdministrationFee =
          (order.type === "Order" ? order.refundAdminFee : 0) || 0;
        const refundCosts =
          customerPaidShippingFeeRefund +
          tiktokShopShippingIncentiveRefund +
          refundAdministrationFee;

        // Tiktok Fees
        const transactionFee =
          (order.type === "Order" ? order.transactionFee : 0) || 0;
        const referralFee =
          (order.type === "Order" ? order.referralFee : 0) || 0;
        const tiktokFees = transactionFee + referralFee;

        // Shipping Fees
        const tiktokShopShippingFee =
          (order.type === "Order" ? order.tiktokShippingFee : 0) || 0;
        const fulfilledByTiktokShopShippingFee =
          (order.type === "Order" ? order.fbtShippingFee : 0) || 0;
        const shippingInsuranceFee =
          (order.type === "Order" ? order.shippingInsuranceFee : 0) || 0;
        const customerPaidShippingFee =
          (order.type === "Order" ? order.customerPaidShippingFee : 0) || 0;
        const tiktokShippingIncentive =
          (order.type === "Order" ? order.tiktokShippingIncentive : 0) || 0;
        const shippingFeeSubsidy =
          (order.type === "Order" ? order.shippingFeeSubsidy : 0) || 0;
        const returnShippingFee =
          (order.type === "Order" ? order.returnShippingFee : 0) || 0;
        const fbtFulfillmentFee =
          (order.type === "Order" ? order.fbtFulfillmentFee : 0) || 0;
        const customerShippingFeeOffset =
          (order.type === "Order" ? order.customerShippingFeeOffset : 0) || 0;
        const limitedTimeSignupShippingIncentive =
          (order.type === "Order"
            ? order.limitedTimeSignupShippingIncentive
            : 0) || 0;
        const shippingFees =
          tiktokShopShippingFee +
          fulfilledByTiktokShopShippingFee +
          shippingInsuranceFee +
          customerPaidShippingFee +
          tiktokShippingIncentive +
          shippingFeeSubsidy +
          returnShippingFee +
          fbtFulfillmentFee +
          customerShippingFeeOffset +
          limitedTimeSignupShippingIncentive;

        // Adjustments
        const logisticsAdjustment =
          (order.type === "Logistics adjustment"
            ? order.adjustmentAmount
            : 0) || 0;
        const logisticsReimbursement =
          (order.type === "Logistics reimbursement"
            ? order.adjustmentAmount
            : 0) || 0;
        const logisticsDeduction =
          (order.type === "Logistics deduction" ? order.adjustmentAmount : 0) ||
          0;
        const tiktokShopReimbursement =
          (order.type === "TikTok Shop reimbursement"
            ? order.adjustmentAmount
            : 0) || 0;
        const policyViolationDeduction =
          (order.type === "Policy violation deduction"
            ? order.adjustmentAmount
            : 0) || 0;
        const tiktokFeesAdjustment =
          (order.type === "TikTok fees adjustment"
            ? order.adjustmentAmount
            : 0) || 0;
        const adjustmentFromSettlementAccount =
          (order.type === "Adjustment from settlement account"
            ? order.adjustmentAmount
            : 0) || 0;
        const chargeback =
          (order.type === "Chargeback" ? order.adjustmentAmount : 0) || 0;
        const otherAdjustment =
          (order.type === "Other adjustment" ? order.adjustmentAmount : 0) || 0;
        const fbtWarehouseServiceFee =
          (order.type === "FBT warehouse service fee"
            ? order.adjustmentAmount
            : 0) || 0;
        const adjustmentsFees =
          logisticsAdjustment +
          logisticsReimbursement +
          logisticsDeduction +
          tiktokShopReimbursement +
          policyViolationDeduction +
          tiktokFeesAdjustment +
          adjustmentFromSettlementAccount +
          chargeback +
          otherAdjustment +
          fbtWarehouseServiceFee;

        // Gross Profit
        const grossProfit =
          sales +
          promoCosts +
          marketingCosts +
          refundCosts +
          tiktokFees +
          shippingFees +
          adjustmentsFees +
          -1 * cogsPrice;
        console.log("grossProfit", grossProfit);

        // Net Profit
        const netProfit = grossProfit - totalExpenses;

        // Estimated Payout
        const estimatedPayout =
          sales +
          promoCosts +
          marketingCosts +
          refundCosts +
          tiktokFees +
          shippingFees +
          adjustmentsFees;

        // Margin
        // const margin = sales !== 0 ? (netProfit / sales) * 100 : 0;

        // Real ACOS
        // const realAcos = sales !== 0 ? (adCosts / sales) * 100 : 0;

        // ROI
        // const roi =
        //   sales !== 0 ? (netProfit / (applicableCost?.price ?? 1)) * 100 : 0;

        // Percent Refunds
        // const percentRefunds =
        //   unitsSold !== 0 ? (refunds / unitsSold) * 100 : 0;

        // Upsert DailyProductPnL
        await prisma.dailyProductPnL.upsert({
          where: {
            productId_userId_orderCreatedDate: {
              productId: product.id,
              userId: userId,
              orderCreatedDate: order.orderCreatedDate ?? new Date(),
            },
          },
          update: {
            productId: product.id,
            userId: userId,
            orderAdjustmentId: order.orderAdjustmentId,
            orderCreatedDate: order.orderCreatedDate ?? new Date(),
            unitsSold: {
              increment: unitsSold,
            },
            refunds: {
              increment: refunds,
            },
            sales: {
              increment: sales,
            },
            grossSales: {
              increment: grossSales,
            },
            grossSalesRefund: {
              increment: grossSalesRefund,
            },
            sellerDiscount: {
              increment: sellerDiscount,
            },
            sellerDiscountRefund: {
              increment: sellerDiscountRefund,
            },
            promoCosts: {
              increment: promoCosts,
            },
            marketingCosts: {
              increment: marketingCosts,
            },
            sponsoredAdsCosts: {
              increment: sponsoredAdsCosts,
            },
            affiliateCommissionCosts: {
              increment: affiliateCommissionCosts,
            },
            affiliatePartnerCommissionCosts: {
              increment: affiliatePartnerCommissionCosts,
            },
            refundCosts: {
              increment: refundCosts,
            },
            customerPaidShippingFeeRefund: {
              increment: customerPaidShippingFeeRefund,
            },
            tiktokShopShippingIncentiveRefund: {
              increment: tiktokShopShippingIncentiveRefund,
            },
            refundAdministrationFee: {
              increment: refundAdministrationFee,
            },
            tiktokFees: {
              increment: tiktokFees,
            },
            transactionFee: {
              increment: transactionFee,
            },
            referralFee: {
              increment: referralFee,
            },
            shippingFees: {
              increment: shippingFees,
            },
            tiktokShopShippingFee: {
              increment: tiktokShopShippingFee,
            },
            fulfilledByTiktokShopShippingFee: {
              increment: fulfilledByTiktokShopShippingFee,
            },
            shippingInsuranceFee: {
              increment: shippingInsuranceFee,
            },
            customerPaidShippingFee: {
              increment: customerPaidShippingFee,
            },
            tiktokShippingIncentive: {
              increment: tiktokShippingIncentive,
            },
            shippingFeeSubsidy: {
              increment: shippingFeeSubsidy,
            },
            returnShippingFee: {
              increment: returnShippingFee,
            },
            fbtFulfillmentFee: {
              increment: fbtFulfillmentFee,
            },
            customerShippingFeeOffset: {
              increment: customerShippingFeeOffset,
            },
            limitedTimeSignupShippingIncentive: {
              increment: limitedTimeSignupShippingIncentive,
            },
            adjustmentFees: {
              increment: adjustmentsFees,
            },
            logisticsAdjustment: {
              increment: logisticsAdjustment,
            },
            logisticsReimbursement: {
              increment: logisticsReimbursement,
            },
            logisticsDeduction: {
              increment: logisticsDeduction,
            },
            tiktokShopReimbursement: {
              increment: tiktokShopReimbursement,
            },
            policyViolationDeduction: {
              increment: policyViolationDeduction,
            },
            tiktokFeesAdjustment: {
              increment: tiktokFeesAdjustment,
            },
            adjustmentFromSettlementAccount: {
              increment: adjustmentFromSettlementAccount,
            },
            chargeback: {
              increment: chargeback,
            },
            otherAdjustment: {
              increment: otherAdjustment,
            },
            fbtWarehouseServiceFee: {
              increment: fbtWarehouseServiceFee,
            },
            cogs: {
              increment: cogsPrice,
            },
            grossProfit: {
              increment: grossProfit,
            },
            expenses: {
              increment: expenses.reduce(
                (total, expense) => total + expense.amount,
                0
              ),
            },
            netProfit: {
              increment: netProfit,
            },
            estimatedPayout: {
              increment: estimatedPayout,
            },
            lastUpdated: new Date(),
          },
          create: {
            productId: product.id,
            userId: userId,
            orderAdjustmentId: order.orderAdjustmentId,
            orderCreatedDate: order.orderCreatedDate ?? new Date(),
            unitsSold: unitsSold,
            refunds: refunds,
            sales: sales,
            grossSales: grossSales,
            grossSalesRefund: grossSalesRefund,
            sellerDiscount: sellerDiscount,
            sellerDiscountRefund: sellerDiscountRefund,
            promoCosts: promoCosts,
            marketingCosts: marketingCosts,
            sponsoredAdsCosts: sponsoredAdsCosts,
            affiliateCommissionCosts: affiliateCommissionCosts,
            affiliatePartnerCommissionCosts: affiliatePartnerCommissionCosts,
            refundCosts: refundCosts,
            customerPaidShippingFeeRefund: customerPaidShippingFeeRefund,
            tiktokShopShippingIncentiveRefund:
              tiktokShopShippingIncentiveRefund,
            refundAdministrationFee: refundAdministrationFee,
            tiktokFees: tiktokFees,
            transactionFee: transactionFee,
            referralFee: referralFee,
            shippingFees: shippingFees,
            tiktokShopShippingFee: tiktokShopShippingFee,
            fulfilledByTiktokShopShippingFee: fbtFulfillmentFee,
            shippingInsuranceFee: shippingInsuranceFee,
            returnShippingFee: returnShippingFee,
            fbtFulfillmentFee: fbtFulfillmentFee,
            customerShippingFeeOffset: customerShippingFeeOffset,
            limitedTimeSignupShippingIncentive:
              limitedTimeSignupShippingIncentive,
            adjustmentFees: adjustmentsFees,
            cogs: cogsPrice,
            grossProfit: grossProfit,
            expenses: totalExpenses,
            netProfit: netProfit,
            estimatedPayout: estimatedPayout,
            lastUpdated: new Date(),
          },
        });
      }
    }
  } catch (error) {
    console.error("Error updating monthly PnL:", error);
    throw error;
  }
}
