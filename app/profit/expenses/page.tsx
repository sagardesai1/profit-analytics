"use client";

import { getExpenses } from "@/actions/getExpenses";
import ExpenseFormPopup from "@/components/ExpenseFormPopup";
import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";

interface Expense {
  id: number;
  date: Date;
  name: string;
  amount: number;
  productId: number | null;
  productName: string;
}

export default function ExpensesPage() {
  const { userId } = useAuth();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  // Fetch expenses on component mount
  useEffect(() => {
    if (userId) {
      getExpenses(userId).then(setExpenses);
    }
  }, [userId]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Expenses</h1>
        <button
          onClick={() => setIsAddingExpense(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Expense
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 border-b text-left">Date</th>
              <th className="py-3 px-4 border-b text-left">Name</th>
              <th className="py-3 px-4 border-b text-left">Product</th>
              <th className="py-3 px-4 border-b text-right">Amount</th>
              <th className="py-3 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">
                  {formatDate(expense.date)}
                </td>
                <td className="py-3 px-4 border-b">{expense.name}</td>
                <td className="py-3 px-4 border-b">{expense.productName}</td>
                <td className="py-3 px-4 border-b text-right">
                  {formatAmount(expense.amount)}
                </td>
                <td className="py-3 px-4 border-b text-center">
                  <button
                    onClick={() => {
                      /* Handle edit */
                    }}
                    className="text-blue-600 hover:text-blue-800 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      /* Handle delete */
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* We'll need to create this component next */}
      {isAddingExpense && (
        <ExpenseFormPopup
          onClose={() => setIsAddingExpense(false)}
          onSubmit={async (data) => {
            // Handle adding expense
            setIsAddingExpense(false);
            // Refresh expenses
            if (userId) {
              getExpenses(userId).then(setExpenses);
            }
          }}
        />
      )}
    </div>
  );
}
