"use client";

import {
  getAccessToken,
  getAuthorizedShops,
  getAllProducts,
  getAllOrders,
  getOrderFinanceStatement,
} from "@/actions/tiktok";
import React from "react";
import { FinanceStatement } from "@/app/components/FinanceStatement";

interface Product {
  id: string;
  title: string;
  status: string;
  category_chains?: Array<{
    id: string;
    parent_id: string;
  }>;
  brand?: {
    id: string;
    name: string;
  };
  skus: Array<{
    id: string;
    seller_sku: string;
    price: {
      currency: string;
      sale_price: string;
      tax_exclusive_price: string;
      unit_price?: string;
    };
    inventory: Array<{
      quantity: number;
    }>;
    sales_attributes?: Array<{
      id: string;
      name: string;
    }>;
    combined_skus?: Array<{
      product_id: string;
      sku_id: string;
      sku_count: number;
    }>;
    external_urls?: string[];
  }>;
  create_time: number;
  audit?: {
    status: string;
  };
  is_not_for_sale?: boolean;
  listing_quality_tier?: string;
  sales_regions?: string[];
  main_images?: Array<{
    thumb_urls: Array<string>;
  }>;
  audit_failed_reasons?: Array<{
    listing_platform?: string;
    position?: string;
    reasons: Array<string>;
    suggestions: Array<string>;
  }>;
  external_product_id?: string;
  product_types?: string[];
  integrated_platform_statuses?: Array<{
    platform: string;
    status: string;
  }>;
  listing_platform?: string[];
}

interface FilteredOrder {
  id: string;
  create_time: string;
  status: string;
  payment: {
    sub_total: string;
  };
  line_items: Array<{
    product_name: string;
    sku_name: string;
    sku_image?: string;
    sale_price: string;
  }>;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">{product.title}</h3>

          <div className="grid grid-cols-2 gap-2 text-sm">
            {/* Product Status */}
            <div>
              <span className="font-semibold">Status: </span>
              <span
                className={`${product.status === "ACTIVATE" ? "text-green-600" : "text-yellow-600"}`}
              >
                {product.status}
              </span>
            </div>

            {/* Audit Status */}
            {product.audit && (
              <div>
                <span className="font-semibold">Audit Status: </span>
                <span
                  className={`${product.audit.status === "APPROVED" ? "text-green-600" : "text-yellow-600"}`}
                >
                  {product.audit.status}
                </span>
              </div>
            )}

            {/* Listing Quality */}
            {product.listing_quality_tier && (
              <div>
                <span className="font-semibold">Quality Tier: </span>
                {product.listing_quality_tier}
              </div>
            )}

            {/* Sales Regions */}
            {product.sales_regions && (
              <div className="col-span-2">
                <span className="font-semibold">Sales Regions: </span>
                <span className="text-gray-600">
                  {product.sales_regions.join(", ")}
                </span>
              </div>
            )}

            {/* Not For Sale Flag */}
            {product.is_not_for_sale && (
              <div className="col-span-2">
                <span className="text-red-600 font-semibold">
                  Not Available for Sale
                </span>
              </div>
            )}

            {/* Main Images */}
            {product.main_images && (
              <div className="col-span-2">
                <span className="font-semibold">Main Images: </span>
                <div className="flex gap-2">
                  {product.main_images.map((image, index) => (
                    <img
                      key={index}
                      src={image.thumb_urls[0]}
                      alt={`Main Image ${index + 1}`}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SKUs */}
            {product.skus?.map((sku) => (
              <div
                key={sku.id}
                className="col-span-2 bg-gray-50 p-2 rounded mt-2"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">SKU ID: {sku.id}</span>
                    <span className="text-green-700">
                      {sku.price?.sale_price} {sku.price?.currency}
                    </span>
                  </div>
                  <div className="text-gray-600">
                    Seller SKU: {sku.seller_sku}
                  </div>
                  <div className="text-gray-600">
                    Tax Exclusive Price: {sku.price?.tax_exclusive_price}{" "}
                    {sku.price?.currency}
                  </div>
                  <div className="text-sm text-gray-600">
                    Stock: {sku.inventory?.[0]?.quantity || 0} units
                  </div>
                  {/* Sales Attributes */}
                  {sku.sales_attributes && (
                    <div className="text-sm text-gray-600">
                      Sales Attributes:{" "}
                      {sku.sales_attributes.map((attr) => attr.name).join(", ")}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Audit Failed Reasons */}
            {product.audit_failed_reasons && (
              <div className="col-span-2">
                <span className="font-semibold">Audit Failed Reasons: </span>
                <ul className="list-disc list-inside text-gray-600">
                  {product.audit_failed_reasons.map((reason, index) => (
                    <li key={index}>
                      {reason.reasons.join(", ")} -{" "}
                      {reason.suggestions.join(", ")}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Page() {
  const [products, setProducts] = React.useState<any>(null);
  const [authCode, setAuthCode] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [orders, setOrders] = React.useState<any>(null);
  const [selectedOrderFinance, setSelectedOrderFinance] =
    React.useState<any>(null);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="space-y-4 mb-8">
        {/* Auth Section */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">1. Authentication</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              placeholder="Enter auth code"
              className="px-2 py-1 border rounded"
            />
            <button
              onClick={async () => {
                const result = await getAccessToken(authCode);
                console.log("Auth Result:", result);
              }}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Get Access Token
            </button>
          </div>
        </div>

        {/* Get Shop Cipher */}
        <div>
          <h2 className="text-xl font-bold">2. Get Shop Information</h2>
          <button
            onClick={async () => {
              const result = await getAuthorizedShops();
              console.log("Shops Result:", result);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Get Authorized Shops
          </button>
        </div>

        {/* Get Products */}
        <div>
          <h2 className="text-xl font-bold">3. Get Products</h2>
          <button
            onClick={async () => {
              setIsLoading(true);
              try {
                const result = await getAllProducts();
                setProducts(result);
                console.log("Products:", result);
              } finally {
                setIsLoading(false);
              }
            }}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Get All Products"}
          </button>
        </div>

        {/* Get Orders */}
        <div>
          <h2 className="text-xl font-bold">4. Get Orders</h2>
          <button
            onClick={async () => {
              setIsLoading(true);
              try {
                const result = await getAllOrders();
                setOrders(result);
                console.log("Orders:", result);
              } finally {
                setIsLoading(false);
              }
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Get All Orders"}
          </button>
        </div>
      </div>

      {/* Display orders if available */}
      {orders && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Orders</h2>
          <div className="space-y-4">
            {orders.map((order: FilteredOrder) => (
              <div
                key={order.id}
                className="border rounded-lg p-4 bg-white shadow-sm"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-lg">Order #{order.id}</h3>
                    <div className="text-sm text-gray-500">
                      Created:{" "}
                      {new Date(
                        parseInt(order.create_time) * 1000
                      ).toLocaleString()}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "UNPAID"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "AWAITING_SHIPMENT"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "SHIPPED"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="divide-y">
                  {order.line_items.map((item, index) => (
                    <div key={index} className="py-3 flex items-center gap-4">
                      {item.sku_image && (
                        <img
                          src={item.sku_image}
                          alt={item.product_name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      )}
                      <div className="flex-1">
                        <div className="font-medium">{item.product_name}</div>
                        <div className="text-sm text-gray-500">
                          SKU: {item.sku_name}
                        </div>
                        <div className="text-sm text-green-600">
                          Price: {item.sale_price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 border-t pt-3">
                  <div className="text-right">
                    <span className="font-semibold">Subtotal:</span>{" "}
                    {order.payment.sub_total}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Display finance data if available */}
      {selectedOrderFinance && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Order Finance</h2>
          <FinanceStatement data={selectedOrderFinance.data} />
        </div>
      )}

      {products && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <div className="space-y-4">
            {products.data?.products?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            )) || (
              <div className="text-gray-500 text-center py-8">
                No products found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
