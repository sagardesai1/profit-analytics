"use server";
import prisma from "@/lib/prisma";

export async function getProducts(userId: string) {
  try {
    const products = await prisma.product.findMany({
      // where: {
      //   userId: userId,
      // },
      include: {
        costOfGoods: {
          orderBy: {
            id: "desc",
          },
          take: 1,
        },
      },
    });

    return products.map((product) => ({
      id: product.id,
      product_name: product.productName,
      cogs: product.costOfGoods[0]?.price ?? 0,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
