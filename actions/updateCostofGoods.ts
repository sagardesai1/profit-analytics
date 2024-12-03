"use server";

import prisma from "@/lib/prisma";

// Function to update Cost of Goods table
export async function updateCostOfGoods(userId: string) {
  try {
    // Get all products for the user
    const products = await prisma.product.findMany({
      where: { userId: userId },
      include: { costOfGoods: true },
    });

    for (const product of products) {
      // If the product doesn't have any cost of goods entries, create an initial one
      if (product.costOfGoods.length === 0) {
        await prisma.costOfGoods.create({
          data: {
            productId: product.id,
            price: 0, // Default price, you may want to adjust this
          },
        });
      }
    }

    console.log("Cost of Goods table updated successfully");
  } catch (error) {
    console.error("Error updating Cost of Goods table:", error);
  }
}
