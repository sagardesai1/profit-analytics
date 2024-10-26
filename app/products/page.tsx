"use client";

import { getProducts } from "@/actions/getProducts";
import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import CosEditPopup from "@/components/CosEditPopup";
// import { updateProductCogs } from "@/actions/updateProductCogs";

interface Product {
  id: number;
  product_name: string;
  cogs: number;
}

export default function ProductsPage() {
  const { userId } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingField, setEditingField] = useState<"cogs" | null>(null);

  // Use useEffect to fetch products on the client side
  useEffect(() => {
    if (userId) {
      getProducts(userId).then(setProducts);
    }
  }, [userId]);

  const handleCosChange = (product: Product) => {
    setEditingProduct(product);
    setEditingField("cogs");
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setEditingProduct(null);
    setEditingField(null);
  };

  const handleCosUpdate = async (
    newCos: number | { [key: string]: number }
  ) => {
    if (editingProduct) {
      const updatedProducts = products.map((p) =>
        p.id === editingProduct.id ? { ...p, cos: newCos } : p
      );
      setProducts(
        updatedProducts.map((p) => ({
          ...p,
          cos: typeof p.cogs === "object" ? 0 : p.cogs, // or some default value
        }))
      );

      // Update the database
      try {
        // const result = await updateProductCos(editingProduct.id, newCos);
        // if (!result.success) {
        //   console.error("Failed to update COS in database:", result.error);
        //   // Optionally, you can show an error message to the user here
        // }
      } catch (error) {
        console.error("Error updating COS in database:", error);
        // Optionally, you can show an error message to the user here
      }
    }
    handlePopupClose();
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 border-b">Product</th>
              <th className="py-3 px-4 border-b">COGS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-3 px-4 border-b">{product.product_name}</td>
                <td className="py-3 px-4 border-b text-center">
                  <button
                    onClick={() => handleCosChange(product)}
                    className="w-full text-center hover:bg-gray-100 py-1 px-2 rounded"
                  >
                    ${product.cogs.toFixed(2)}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && editingProduct && (
        <>
          <CosEditPopup
            product={editingProduct}
            onClose={handlePopupClose}
            onUpdate={handleCosUpdate}
          />
        </>
      )}
    </div>
  );
}
