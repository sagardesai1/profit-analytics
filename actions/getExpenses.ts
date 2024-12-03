"use server";
import prisma from "@/lib/prisma";

export async function getExpenses(userId: string) {
  try {
    const expenses = await prisma.expense.findMany({
      include: {
        product: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    return expenses.map((expense) => ({
      id: expense.id,
      date: expense.date,
      name: expense.name,
      amount: expense.amount,
      productId: expense.productId,
      productName: expense.product?.productName || "No Product",
    }));
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
}
