import { getShowcaseProducts } from "@/actions/tiktok";

export default async function ShowcaseProductsPage() {
  const showcaseData = await getShowcaseProducts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">TikTok Showcase Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showcaseData.data?.products?.map((product: any) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm">
            {product.images?.[0] && (
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
            )}
            <h2 className="font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>

      {/* Add error handling */}
      {showcaseData.error && (
        <div className="text-red-500 mt-4">
          Error: {showcaseData.error.message}
        </div>
      )}
    </div>
  );
}
