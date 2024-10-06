import fs from "fs";
import { parse } from "fast-csv";
import prisma from "@/lib/prisma";

// Define the type for the CSV row data
interface TikTokOrder {
  statementDateUtc: string;
  statementId: string;
  paymentId: string;
  status: string;
  currency: string;
  type: string;
  orderAdjustmentId: string;
  skuId: string;
  quantity: number;
  productName: string;
  skuName: string;
  orderCreatedDate: string;
  orderDeliveryDate: string;
  totalSettlementAmount: number;
  netSales: number;
  grossSales: number;
  grossSalesRefund: number;
  sellerDiscount: number;
  sellerDiscountRefund: number;
  shipping: number;
  tiktokShippingFee: number;
  fbtShippingFee: number;
  fbtFulfillmentFee: number;
  customerShippingFeeOffset: number;
  limitedTimeSignupShippingIncentive: number;
  signatureConfirmationFee: number;
  shippingInsuranceFee: number;
  customerPaidShippingFee: number;
  customerPaidShippingFeeRefund: number;
  tiktokShippingIncentive: number;
  tiktokShippingIncentiveRefund: number;
  shippingFeeSubsidy: number;
  returnShippingFee: number;
  fees: number;
  transactionFee: number;
  referralFee: number;
  refundAdminFee: number;
  affiliateCommission: number;
  affiliatePartnerCommission: number;
  adjustmentAmount: number;
  adjustmentReason: string;
  relatedOrderId: string;
  customerPayment: number;
  customerRefund: number;
  sellerVoucherDiscount: number;
  sellerVoucherDiscountRefund: number;
  platformDiscount: number;
  platformDiscountRefund: number;
  platformVoucherDiscount: number;
  platformVoucherDiscountRefund: number;
  adsReferralFeeDiscount: number;
  salesTaxPayment: number;
  salesTaxRefund: number;
  retailDeliveryFeePayment: number;
  retailDeliveryFeeRefund: number;
  customerPaidShippingBeforeDiscount: number;
  sellerShippingDiscount: number;
  tiktokShippingDiscount: number;
  estimatedPackageWeight: number;
  chargeablePackageWeight: number;
  fbtChargeableGoodsWeight: number;
  collectionMethod: string;
  deliveryOption: string;
  signatureConfirmationServiceFeeType: string;
  userId: string; // Add userId to associate with the user
}

interface Summary {
  unitsSold: number;
  grossSales: number;
  netSales: number;
  refunds: number;
  adsCost: number;
  grossProfit: number;
  netProfit: number;
  sellableReturns: number;
  margin: number; // Add this line
}

// Function to upload CSV data
export async function uploadCsv(
  fileContent: string,
  filename: string,
  userId: string
): Promise<void> {
  const rows: TikTokOrder[] = [];

  return new Promise<void>((resolve, reject) => {
    const parser = parse({ headers: true });

    parser.on("data", (row: Record<string, string>) => {
      // Parse and push each row into the array
      rows.push({
        statementDateUtc: row["Statement date (UTC)"],
        statementId: row["Statement ID"],
        paymentId: row["Payment ID"],
        status: row["Status"],
        currency: row["Currency"],
        type: row["Type"],
        orderAdjustmentId: row["Order/adjustment ID"],
        skuId: row["SKU ID"],
        quantity: parseInt(row["Quantity"], 10), // Convert to number
        productName: row["Product name"],
        skuName: row["SKU name"],
        orderCreatedDate: row["Order created date"],
        orderDeliveryDate: row["Order delivery date"],
        totalSettlementAmount: parseFloat(row["Total settlement amount"]), // Convert to number
        netSales: parseFloat(row["Net sales"]),
        grossSales: parseFloat(row["Gross sales"]),
        grossSalesRefund: parseFloat(row["Gross sales refund"]),
        sellerDiscount: parseFloat(row["Seller discount"]),
        sellerDiscountRefund: parseFloat(row["Seller discount refund"]),
        shipping: parseFloat(row["Shipping"]),
        tiktokShippingFee: parseFloat(row["TikTok Shop shipping fee"]),
        fbtShippingFee: parseFloat(
          row["Fulfilled by TikTok Shop (FBT) shipping fee"]
        ),
        fbtFulfillmentFee: parseFloat(row["FBT fulfillment fee"]),
        customerShippingFeeOffset: parseFloat(
          row["Customer shipping fee offset"]
        ),
        limitedTimeSignupShippingIncentive: parseFloat(
          row["Limited-time sign up shipping incentive"]
        ),
        signatureConfirmationFee: parseFloat(
          row["Signature confirmation service fee"]
        ),
        shippingInsuranceFee: parseFloat(row["Shipping insurance fee"]),
        customerPaidShippingFee: parseFloat(row["Customer-paid shipping fee"]),
        customerPaidShippingFeeRefund: parseFloat(
          row["Customer-paid shipping fee refund"]
        ),
        tiktokShippingIncentive: parseFloat(
          row["TikTok Shop shipping incentive"]
        ),
        tiktokShippingIncentiveRefund: parseFloat(
          row["TikTok Shop shipping incentive refund"]
        ),
        shippingFeeSubsidy: parseFloat(row["Shipping fee subsidy"]),
        returnShippingFee: parseFloat(row["Return shipping fee"]),
        fees: parseFloat("Fees"),
        transactionFee: parseFloat(row["Transaction fee"]),
        referralFee: parseFloat(row["Referral fee"]),
        refundAdminFee: parseFloat(row["Refund administration fee"]),
        affiliateCommission: parseFloat(row["Affiliate commission"]),
        affiliatePartnerCommission: parseFloat(
          row["Affiliate partner commission"]
        ),
        adjustmentAmount: parseFloat(row["Adjustment amount"]),
        adjustmentReason: row["Adjustment reason"],
        relatedOrderId: row["Related order ID"],
        customerPayment: parseFloat(row["Customer payment"]),
        customerRefund: parseFloat(row["Customer refund"]),
        sellerVoucherDiscount: parseFloat(
          row["Seller co-funded voucher discount"]
        ),
        sellerVoucherDiscountRefund: parseFloat(
          row["Seller co-funded voucher discount refund"]
        ),
        platformDiscount: parseFloat(row["Platform discounts"]),
        platformDiscountRefund: parseFloat(row["Platform discounts refund"]),
        platformVoucherDiscount: parseFloat(
          row["Platform co-funded voucher discounts"]
        ),
        platformVoucherDiscountRefund: parseFloat(
          row["Platform co-funded voucher discounts refund"]
        ),
        adsReferralFeeDiscount: parseFloat(row["Ads referral fee discount"]),
        salesTaxPayment: parseFloat(row["Sales tax payment"]),
        salesTaxRefund: parseFloat(row["Sales tax refund"]),
        retailDeliveryFeePayment: parseFloat(
          row["Retail delivery fee payment"]
        ),
        retailDeliveryFeeRefund: parseFloat(row["Retail delivery fee refund"]),
        customerPaidShippingBeforeDiscount: parseFloat(
          row["Customer-paid shipping fee before discounts"]
        ),
        sellerShippingDiscount: parseFloat(row["Seller shipping fee discount"]),
        tiktokShippingDiscount: parseFloat(
          row["TikTok Shop shipping fee discount to customer"]
        ),
        estimatedPackageWeight: parseFloat(
          row["Estimated chargeable package weight"]
        ),
        chargeablePackageWeight: parseFloat(row["Chargeable package weight"]),
        fbtChargeableGoodsWeight: parseFloat(
          row["FBT Chargeable goods weight"]
        ),
        collectionMethod: row["Collection methods"],
        deliveryOption: row["Delivery option"],
        signatureConfirmationServiceFeeType:
          row["Signature confirmation service fee type"],
        userId, // Associate the row with the current user
      });
    });

    parser.on("end", async () => {
      try {
        // Use Prisma's createMany for bulk insert
        await prisma.tiktokOrder.createMany({
          data: rows.map((row) => ({
            statementDateUtc: row.statementDateUtc,
            statementId: row.statementId,
            paymentId: row.paymentId,
            status: row.status,
            currency: row.currency,
            type: row.type,
            orderAdjustmentId: row.orderAdjustmentId,
            skuId: row.skuId,
            quantity: row.quantity,
            productName: row.productName,
            skuName: row.skuName,
            orderCreatedDate: row.orderCreatedDate,
            orderDeliveryDate: row.orderDeliveryDate,
            totalSettlementAmount: row.totalSettlementAmount,
            netSales: row.netSales,
            grossSales: row.grossSales,
            grossSalesRefund: row.grossSalesRefund,
            sellerDiscount: row.sellerDiscount,
            sellerDiscountRefund: row.sellerDiscountRefund,
            shipping: row.shipping,
            tiktokShippingFee: row.tiktokShippingFee,
            fbtShippingFee: row.fbtShippingFee,
            fbtFulfillmentFee: row.fbtFulfillmentFee,
            customerShippingFeeOffset: row.customerShippingFeeOffset,
            limitedTimeSignupShippingIncentive:
              row.limitedTimeSignupShippingIncentive,
            signatureConfirmationFee: row.signatureConfirmationFee,
            shippingInsuranceFee: row.shippingInsuranceFee,
            customerPaidShippingFee: row.customerPaidShippingFee,
            customerPaidShippingFeeRefund: row.customerPaidShippingFeeRefund,
            tiktokShippingIncentive: row.tiktokShippingIncentive,
            tiktokShippingIncentiveRefund: row.tiktokShippingIncentiveRefund,
            shippingFeeSubsidy: row.shippingFeeSubsidy,
            returnShippingFee: row.returnShippingFee,
            fees: row.fees,
            transactionFee: row.transactionFee,
            referralFee: row.referralFee,
            refundAdminFee: row.refundAdminFee,
            affiliateCommission: row.affiliateCommission,
            affiliatePartnerCommission: row.affiliatePartnerCommission,
            adjustmentAmount: row.adjustmentAmount,
            adjustmentReason: row.adjustmentReason,
            relatedOrderId: row.relatedOrderId,
            customerPayment: row.customerPayment,
            customerRefund: row.customerRefund,
            sellerVoucherDiscount: row.sellerVoucherDiscount,
            sellerVoucherDiscountRefund: row.sellerVoucherDiscountRefund,
            platformDiscount: row.platformDiscount,
            platformDiscountRefund: row.platformDiscountRefund,
            platformVoucherDiscount: row.platformVoucherDiscount,
            platformVoucherDiscountRefund: row.platformVoucherDiscountRefund,
            adsReferralFeeDiscount: row.adsReferralFeeDiscount,
            salesTaxPayment: row.salesTaxPayment,
            salesTaxRefund: row.salesTaxRefund,
            retailDeliveryFeePayment: row.retailDeliveryFeePayment,
            retailDeliveryFeeRefund: row.retailDeliveryFeeRefund,
            customerPaidShippingBeforeDiscount:
              row.customerPaidShippingBeforeDiscount,
            sellerShippingDiscount: row.sellerShippingDiscount,
            tiktokShippingDiscount: row.tiktokShippingDiscount,
            estimatedPackageWeight: row.estimatedPackageWeight,
            chargeablePackageWeight: row.chargeablePackageWeight,
            fbtChargeableGoodsWeight: row.fbtChargeableGoodsWeight,
            collectionMethod: row.collectionMethod,
            deliveryOption: row.deliveryOption,
            signatureConfirmationServiceFeeType:
              row.signatureConfirmationServiceFeeType,
            userId: row.userId,
          })),
        });

        // Call updateProductAndSalesSummary after CSV upload
        await updateProductAndSalesSummary(userId);

        await prisma.$disconnect();
        resolve();
      } catch (error) {
        await prisma.$disconnect();
        reject(error);
      }
    });

    parser.on("error", async (error) => {
      await prisma.$disconnect();
      reject(error);
    });

    // Parse the fileContent string
    parser.write(fileContent);
    parser.end();
  });
}

// Function to update Product and ProductSalesSummary tables
async function updateProductAndSalesSummary(userId: string): Promise<void> {
  try {
    // Get all TikTokOrders for the user
    const tiktokOrders = await prisma.tiktokOrder.findMany({
      where: { userId: userId },
    });

    // Group orders by SKU ID
    const ordersBySku = tiktokOrders.reduce((acc, order) => {
      if (order.skuId !== null) {
        if (!acc[order.skuId]) {
          acc[order.skuId] = [];
        }
        acc[order.skuId].push(order as TikTokOrder);
      }
      return acc;
    }, {} as Record<string, TikTokOrder[]>);

    // Process each SKU
    for (const [skuId, orders] of Object.entries(ordersBySku)) {
      // Upsert Product
      const product = await prisma.product.upsert({
        where: { skuId: skuId },
        update: {
          productName: orders[0].productName,
          skuName: orders[0].skuName,
        },
        create: {
          skuId: skuId,
          productName: orders[0].productName,
          skuName: orders[0].skuName,
          userId: userId,
        },
      });

      // Calculate summary data
      const summary = orders.reduce(
        (acc, order) => {
          acc.unitsSold += order.quantity || 0;
          acc.grossSales += order.grossSales || 0;
          acc.netSales += order.netSales || 0;
          acc.refunds += (order.grossSalesRefund || 0) > 0 ? 1 : 0;
          acc.adsCost += order.adsReferralFeeDiscount || 0;
          acc.grossProfit += (order.netSales || 0) - (order.fees || 0);
          acc.netProfit += acc.grossProfit - acc.adsCost;
          acc.sellableReturns += order.returnShippingFee ? 1 : 0;
          return acc;
        },
        {
          unitsSold: 0,
          grossSales: 0,
          netSales: 0,
          refunds: 0,
          adsCost: 0,
          grossProfit: 0,
          netProfit: 0,
          sellableReturns: 0,
          margin: 0,
          roi: 0,
        }
      );

      // Calculate margin and ROI
      summary.margin =
        summary.grossSales !== 0
          ? (summary.netProfit / summary.grossSales) * 100
          : 0; // Add a fallback value for when grossSales is 0

      // Upsert ProductSalesSummary
      await prisma.productSalesSummary.upsert({
        where: {
          productId_userId: {
            productId: product.id,
            userId: userId,
          },
        },
        update: {
          unitsSold: summary.unitsSold,
          grossSales: summary.grossSales,
          netSales: summary.netSales,
          refunds: summary.refunds,
          adsCost: summary.adsCost,
          grossProfit: summary.grossProfit,
          netProfit: summary.netProfit,
          margin: summary.margin,
          roi: summary.roi,
          sellableReturns: summary.sellableReturns,
          lastUpdated: new Date(),
        },
        create: {
          productId: product.id,
          userId: userId,
          unitsSold: summary.unitsSold,
          grossSales: summary.grossSales,
          netSales: summary.netSales,
          refunds: summary.refunds,
          adsCost: summary.adsCost,
          grossProfit: summary.grossProfit,
          netProfit: summary.netProfit,
          margin: summary.margin,
          roi: summary.roi,
          sellableReturns: summary.sellableReturns,
          lastUpdated: new Date(),
        },
      });
    }
  } catch (error) {
    console.error("Error updating Product and ProductSalesSummary:", error);
    throw error;
  }
}
