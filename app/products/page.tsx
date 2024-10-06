import prisma from "@/lib/prisma";

async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        salesSummaries: {
          orderBy: {
            lastUpdated: "desc",
          },
          take: 1,
        },
      },
    });

    return products.map((product) => ({
      id: product.id,
      product_name: product.productName,
      units_sold: product.salesSummaries[0]?.unitsSold || 0,
      gross_sales: product.salesSummaries[0]?.grossSales || 0,
      net_sales: product.salesSummaries[0]?.netSales || 0,
      refunds: product.salesSummaries[0]?.refunds || 0,
      ads_cost: product.salesSummaries[0]?.adsCost || 0,
      gross_profit: product.salesSummaries[0]?.grossProfit || 0,
      net_profit: product.salesSummaries[0]?.netProfit || 0,
      margin: product.salesSummaries[0]?.margin || 0,
      roi: product.salesSummaries[0]?.roi || 0,
      sellable_returns: product.salesSummaries[0]?.sellableReturns || 0,
      last_updated: product.salesSummaries[0]?.lastUpdated || null,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Product Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 border-b">Product Name</th>
              <th className="py-3 px-4 border-b">Units Sold</th>
              <th className="py-3 px-4 border-b">Gross Sales</th>
              <th className="py-3 px-4 border-b">Net Sales</th>
              <th className="py-3 px-4 border-b">Refunds</th>
              <th className="py-3 px-4 border-b">Ads Cost</th>
              <th className="py-3 px-4 border-b">Gross Profit</th>
              <th className="py-3 px-4 border-b">Net Profit</th>
              <th className="py-3 px-4 border-b">Margin</th>
              <th className="py-3 px-4 border-b">ROI</th>
              <th className="py-3 px-4 border-b">Sellable Returns</th>
              <th className="py-3 px-4 border-b">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-3 px-4 border-b">{product.product_name}</td>
                <td className="py-3 px-4 border-b text-right">
                  {product.units_sold}
                </td>
                <td className="py-3 px-4 border-b text-right">
                  ${product.gross_sales.toFixed(2)}
                </td>
                <td className="py-3 px-4 border-b text-right">
                  ${product.net_sales.toFixed(2)}
                </td>
                <td className="py-3 px-4 border-b text-right">
                  {product.refunds}
                </td>
                <td className="py-3 px-4 border-b text-right">
                  ${product.ads_cost.toFixed(2)}
                </td>
                <td className="py-3 px-4 border-b text-right">
                  ${product.gross_profit.toFixed(2)}
                </td>
                <td className="py-3 px-4 border-b text-right">
                  ${product.net_profit.toFixed(2)}
                </td>
                <td className="py-3 px-4 border-b text-right">
                  {product.margin.toFixed(2)}%
                </td>
                <td className="py-3 px-4 border-b text-right">
                  {product.roi.toFixed(2)}%
                </td>
                <td className="py-3 px-4 border-b text-right">
                  {product.sellable_returns}
                </td>
                <td className="py-3 px-4 border-b text-right">
                  {product.last_updated
                    ? new Date(product.last_updated).toLocaleString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
