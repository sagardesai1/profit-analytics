"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-64 bg-gray-100 h-screen">
      <ul className="p-4">
        <li className="mb-2">
          <span className="block p-2 rounded">Profit</span>
          <ul className="ml-4 mt-2">
            <li>
              <Link
                href="/dashboard"
                className="block p-2 hover:bg-gray-200 rounded"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block p-2 hover:bg-gray-200 rounded"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/cashflow"
                className="block p-2 hover:bg-gray-200 rounded"
              >
                Cashflow
              </Link>
            </li>
          </ul>
        </li>
        <li className="mb-2">
          <Link
            href="/inventory"
            className="block p-2 hover:bg-gray-200 rounded"
          >
            Inventory
          </Link>
        </li>
      </ul>
    </nav>
  );
}
