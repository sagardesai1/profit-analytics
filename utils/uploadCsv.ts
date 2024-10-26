import { parse } from "fast-csv";
import prisma from "@/lib/prisma";
import { TikTokOrder } from "@/types/Products";
import { updateDailyProductPnL } from "@/utils/updateDailyProductPnL";
import { updateCostOfGoods } from "@/actions/updateCostofGoods";

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
      rows.push({
        statementDateUtc: new Date(row["Statement date (UTC)"]),
        statementId: row["Statement ID"],
        paymentId: row["Payment ID"],
        status: row["Status"],
        currency: row["Currency"],
        type: row["Type"],
        orderAdjustmentId: row["Order/adjustment ID"],
        skuId: row["SKU ID"],
        quantity: parseInt(row["Quantity"], 10),
        productName: row["Product name"],
        orderCreatedDate: new Date(row["Order created date"]),
        totalSettlementAmount: parseFloat(row["Total settlement amount"]),
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
        relatedOrderId: row["Related order ID  "],
        userId,
      });
    });

    parser.on("end", async () => {
      try {
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
            orderCreatedDate: row.orderCreatedDate,
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
            relatedOrderId: row.relatedOrderId,
            userId: row.userId,
          })),
        });

        // Call updateProductAndSalesSummary after CSV upload
        // Call the function to update Cost of Goods table
        // await updateCostOfGoods(userId);
        // await updateProductAndSalesSummary(userId);

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
