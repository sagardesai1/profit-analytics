"use client";

import { getProducts } from "@/actions/getProducts";
import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import CosEditPopup from "@/components/CosEditPopup";
import { updateProductCogs } from "@/actions/updateProductCogs";

interface Product {
  id: number;
  productName: string;
  price: number;
}

export default function ProductsPage() {
  const { userId } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingField, setEditingField] = useState<"price" | null>(null);

  // Use useEffect to fetch products on the client side
  useEffect(() => {
    if (userId) {
      getProducts(userId).then((data) => {
        const formattedProducts = data.map((p) => ({
          id: p.id,
          productName: p.product_name,
          price: p.cogs,
        }));
        setProducts(formattedProducts);
      });
    }
  }, [userId]);

  const handlePriceChange = (product: Product) => {
    setEditingProduct(product);
    setEditingField("price");
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setEditingProduct(null);
    setEditingField(null);
  };

  const handleCosUpdate = async (newPrice: number) => {
    if (editingProduct) {
      const updatedProducts = products.map((p) =>
        p.id === editingProduct.id ? { ...p, price: newPrice } : p
      );
      setProducts(updatedProducts);

      // Update the database
      try {
        const result = await updateProductCogs(editingProduct.id, newPrice);
        if (!result.success) {
          console.error("Failed to update COGS in database:", result.error);
        }
      } catch (error) {
        console.error("Error updating COGS in database:", error);
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
                <td className="py-3 px-4 border-b">{product.productName}</td>
                <td className="py-3 px-4 border-b text-center">
                  <button
                    onClick={() => handlePriceChange(product)}
                    className="w-full text-center hover:bg-gray-100 py-1 px-2 rounded"
                  >
                    ${product.price.toFixed(2)}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && editingProduct && (
        <CosEditPopup
          product={{
            id: editingProduct.id,
            product_name: editingProduct.productName,
            cogs: editingProduct.price,
          }}
          onClose={handlePopupClose}
          onUpdate={handleCosUpdate}
        />
      )}
    </div>
  );
}
