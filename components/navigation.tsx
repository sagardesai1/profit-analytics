"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-48 bg-gray-100 h-screen">
      <ul className="p-4">
        <li className="mb-2">
          <span className="block p-2 rounded">Profit</span>
          <ul className="ml-4 mt-2">
            <li>
              <Link
                href="/profit/dashboard"
                className="block p-2 hover:bg-gray-200 rounded"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/profit/products"
                className="block p-2 hover:bg-gray-200 rounded"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/profit/expenses"
                className="block p-2 hover:bg-gray-200 rounded"
              >
                Expenses
              </Link>
            </li>
          </ul>
        </li>
        {/* <li className="mb-2">
          <Link
            href="/inventory"
            className="block p-2 hover:bg-gray-200 rounded"
          >
            Inventory
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
