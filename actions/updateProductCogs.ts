"use server";

import prisma from "@/lib/prisma";

// export async function updateProductCos(
//   productId: number,
//   cos: number | { [key: string]: number }
// ) {
//   try {
//     console.log("Updating product cos:", productId, cos);
//     await prisma.product.update({
//       where: { id: productId },
//       data: { cos },
//     });
//     console.log("Product cos updated successfully");
//     return { success: true };
//   } catch (error) {
//     console.error("Error updating product cos:", error);
//     return { success: false, error: "Failed to update product cos" };
//   }
// }
