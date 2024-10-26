import React from "react";
import { useState } from "react";

interface CogsEditPopupProps {
  product: {
    id: number;
    product_name: string;
    cogs: number;
  };
  onClose: () => void;
  onUpdate: (newCogs: number) => void;
}

export default function CosEditPopup({
  product,
  onClose,
  onUpdate,
}: CogsEditPopupProps) {
  const [newCogs, setNewCogs] = useState(product.cogs);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(newCogs);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-bold mb-2">
          Edit COGS for {product.product_name}
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            New COGS:
            <input
              type="number"
              value={newCogs}
              onChange={(e) => setNewCogs(Number(e.target.value))}
              className="w-full border rounded px-2 py-1 mt-1"
              step="0.01"
            />
          </label>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
