"use client";

import { useState, useEffect } from "react";
import { getProducts } from "@/actions/getProducts";
import { useAuth } from "@clerk/nextjs";

interface Product {
  id: number;
  product_name: string;
  cogs: number;
}

interface ExpenseFormPopupProps {
  onClose: () => void;
  onSubmit: (data: {
    date: Date;
    name: string;
    amount: number;
    productId: number | null;
  }) => void;
  initialData?: {
    date: Date;
    name: string;
    amount: number;
    productId: number | null;
  };
}

export default function ExpenseFormPopup({
  onClose,
  onSubmit,
  initialData,
}: ExpenseFormPopupProps) {
  const { userId } = useAuth();
  const [date, setDate] = useState(initialData?.date || new Date());
  const [name, setName] = useState(initialData?.name || "");
  const [amount, setAmount] = useState(initialData?.amount || 0);
  const [productId, setProductId] = useState<number | null>(
    initialData?.productId || null
  );
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products when component mounts
  useEffect(() => {
    if (userId) {
      getProducts(userId).then(setProducts);
    }
  }, [userId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date,
      name,
      amount,
      productId,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Expense" : "Add Expense"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Date</label>
            <input
              type="date"
              value={date.toISOString().split("T")[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Amount</label>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Product (Optional)</label>
            <select
              value={productId || ""}
              onChange={(e) =>
                setProductId(e.target.value ? parseInt(e.target.value) : null)
              }
              className="w-full border p-2 rounded"
            >
              <option value="">No Product</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.product_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {initialData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
