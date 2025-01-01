"use server";

import crypto from "crypto";

// Types
interface TikTokConfig {
  appKey: string;
  appSecret: string;
  accessToken?: string;
}

interface TikTokShop {
  shop_id: string;
  shop_name: string;
  shop_cipher: string;
}

// Types for the filtered order data
interface LineItem {
  product_name: string;
  sku_name: string;
  sku_image: string;
}

interface FilteredOrder {
  id: string;
  status: string;
  create_time: string;
  line_items: LineItem[];
}

// Helper function to generate signature
function generateSignature(
  secret: string,
  path: string,
  params: Record<string, string>,
  body: string = ""
) {
  const excludeKeys = ["sign", "access_token"];

  // Step 1: Extract and sort parameters
  const sortedParams = Object.keys(params)
    .filter((key) => !excludeKeys.includes(key))
    .sort()
    .map((key) => `${key}${params[key]}`)
    .join("");

  // Step 2: Concatenate parameters with the path
  let signString = `${path}${sortedParams}`;

  // Step 3: Append request body if content-type is not multipart/form-data
  if (body) {
    signString += body;
  }

  // Step 4: Wrap with app_secret
  signString = `${secret}${signString}${secret}`;

  // Step 5: Encode using HMAC-SHA256
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(signString);
  const sign = hmac.digest("hex");

  return sign;
}

// 1. Get Access Token
export async function getAccessToken(authCode: string) {
  try {
    const config: TikTokConfig = {
      appKey: process.env.TIKTOK_APP_KEY || "",
      appSecret: process.env.TIKTOK_APP_SECRET || "",
    };

    const url = new URL("https://auth.tiktok-shops.com/api/v2/token/get");
    const params = {
      app_key: config.appKey,
      app_secret: config.appSecret,
      auth_code: authCode,
      grant_type: "authorized_code",
    };

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
}

// 2. Get Authorized Shops
export async function getAuthorizedShops() {
  try {
    const config: TikTokConfig = {
      appKey: process.env.TIKTOK_APP_KEY || "",
      appSecret: process.env.TIKTOK_APP_SECRET || "",
      accessToken: process.env.TIKTOK_ACCESS_TOKEN,
    };

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const params = {
      app_key: config.appKey,
      timestamp,
    };

    const path = "/authorization/202309/shops";
    const signature = generateSignature(config.appSecret, path, params);

    const url = new URL("https://open-api.tiktokglobalshop.com" + path);
    Object.entries({ ...params, sign: signature }).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
        "x-tts-access-token": config.accessToken || "",
      },
    });

    const data = await response.json();
    if (data.data?.shops?.length > 0) {
      // Store the shop cipher for future use
      const shopCipher = data.data.shops[0].shop_cipher;
      // You might want to store this in your database or environment variables
    }
    return data;
  } catch (error) {
    console.error("Error getting authorized shops:", error);
    throw error;
  }
}

// Get Products with detailed information
export async function getAllProducts() {
  try {
    const config: TikTokConfig = {
      appKey: process.env.TIKTOK_APP_KEY || "",
      appSecret: process.env.TIKTOK_APP_SECRET || "",
      accessToken: process.env.TIKTOK_ACCESS_TOKEN,
    };

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const path = "/product/202309/products/search";

    const params = {
      app_key: config.appKey,
      timestamp,
      shop_cipher: process.env.TIKTOK_SHOP_CIPHER || "",
      page_size: "50",
      page_number: "1",
    };

    const signature = generateSignature(config.appSecret, path, params, "{}");

    const url = new URL("https://open-api.tiktokglobalshop.com" + path);
    Object.entries({ ...params, sign: signature }).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tts-access-token": config.accessToken || "",
      },
      body: "{}",
    });

    const rawData = await response.json();

    // Fetch detailed information for each product using getProductDetails
    const detailedProducts = await Promise.all(
      rawData.data?.products?.map(async (product: any) => {
        const productDetailData = await getProductDetails(product.id);
        return productDetailData;
      })
    );

    return { data: { products: detailedProducts } };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

// Modified getAllOrders function
export async function getAllOrders(): Promise<FilteredOrder[]> {
  try {
    const config: TikTokConfig = {
      appKey: process.env.TIKTOK_APP_KEY || "",
      appSecret: process.env.TIKTOK_APP_SECRET || "",
      accessToken: process.env.TIKTOK_ACCESS_TOKEN,
    };

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const path = "/order/202309/orders/search";

    const params = {
      app_key: config.appKey,
      timestamp,
      shop_cipher: process.env.TIKTOK_SHOP_CIPHER || "",
      page_size: "100",
      page_number: "1",
    };

    const signature = generateSignature(config.appSecret, path, params, "{}");

    const url = new URL("https://open-api.tiktokglobalshop.com" + path);
    Object.entries({ ...params, sign: signature }).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tts-access-token": config.accessToken || "",
      },
      body: "{}",
    });

    const data = await response.json();

    // Filter and transform the response data
    if (data.data?.orders) {
      return data.data.orders.map((order: any) => ({
        id: order.id,
        status: order.status,
        create_time: order.create_time,
        payment: {
          sub_total: order.payment.sub_total,
        },
        line_items: order.line_items.map((item: any) => ({
          product_name: item.product_name,
          sku_name: item.sku_name,
          sku_image: item.sku_image,
          sale_price: item.sale_price,
        })),
      }));
    }

    return [];
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}

// Get order financial statement
export async function getOrderFinanceStatement(orderId: string) {
  try {
    const config: TikTokConfig = {
      appKey: process.env.TIKTOK_APP_KEY || "",
      appSecret: process.env.TIKTOK_APP_SECRET || "",
      accessToken: process.env.TIKTOK_ACCESS_TOKEN,
    };

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const path = `/finance/202309/orders/${orderId}/statement_transactions`;

    const params = {
      app_key: config.appKey,
      timestamp,
      shop_cipher: process.env.TIKTOK_SHOP_CIPHER || "",
    };

    const signature = generateSignature(config.appSecret, path, params);

    const url = new URL("https://open-api.tiktokglobalshop.com" + path);
    Object.entries({ ...params, sign: signature }).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
        "x-tts-access-token": config.accessToken || "",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching order finance statement:", error);
    throw error;
  }
}

// New function to get product details
export async function getProductDetails(productId: string) {
  try {
    const config: TikTokConfig = {
      appKey: process.env.TIKTOK_APP_KEY || "",
      appSecret: process.env.TIKTOK_APP_SECRET || "",
      accessToken: process.env.TIKTOK_ACCESS_TOKEN,
    };

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const path = `/product/202309/products/${productId}`;

    const params = {
      app_key: config.appKey,
      timestamp,
      shop_cipher: process.env.TIKTOK_SHOP_CIPHER || "",
    };

    const signature = generateSignature(config.appSecret, path, params);

    const url = new URL("https://open-api.tiktokglobalshop.com" + path);
    Object.entries({ ...params, sign: signature }).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
        "x-tts-access-token": config.accessToken || "",
      },
    });

    const data = await response.json();

    // Map the response data to the desired structure
    const productDetails = {
      id: data.data.id,
      status: data.data.status,
      title: data.data.title,
      category_chains:
        data.data.category_chains?.map((chain: any) => ({
          id: chain.id,
          parent_id: chain.parent_id,
        })) || [],
      brand: {
        id: data.data.brand.id,
        name: data.data.brand.name,
      },
      main_images:
        data.data.main_images?.map((image: any) => ({
          thumb_urls: image.thumb_urls,
        })) || [],
      skus:
        data.data.skus?.map((sku: any) => ({
          id: sku.id,
          seller_sku: sku.seller_sku,
          price: sku.price,
          tax_exclusive_price: sku.price.tax_exclusive_price,
          sale_price: sku.price.sale_price,
          currency: sku.price.currency,
          unit_price: sku.price.unit_price,
          inventory:
            sku.inventory?.map((inv: any) => ({
              quantity: inv.quantity,
            })) || [],
          sales_attributes:
            sku.sales_attributes?.map((attr: any) => ({
              id: attr.id,
              name: attr.name,
            })) || [],
          combined_skus:
            sku.combined_skus?.map((combined: any) => ({
              product_id: combined.product_id,
              sku_id: combined.sku_id,
              sku_count: combined.sku_count,
            })) || [],
          external_urls: sku.external_urls,
        })) || [],
      audit_failed_reasons:
        data.data.audit_failed_reasons?.map((reason: any) => ({
          listing_platform: reason.listing_platform,
          position: reason.position,
          reasons: reason.reasons,
          suggestions: reason.suggestions,
        })) || [],
      listing_platform:
        data.data.audit_failed_reasons?.map(
          (reason: any) => reason.listing_platform
        ) || [],
      external_product_id: data.data.external_product_id,
      product_types: data.data.product_types,
      listing_quality_tier: data.data.listing_quality_tier,
      integrated_platform_statuses:
        data.data.integrated_platform_statuses?.map((status: any) => ({
          platform: status.platform,
          status: status.status,
        })) || [],
      audit: data.data.audit,
    };

    return productDetails;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
}

// Test the function with a sample product ID
(async () => {
  const testProductId = "1730249046581023489"; // Replace with a valid product ID
  await getProductDetails(testProductId);
})();
