import Link from "next/link";
import Image from "next/image";
import { getPaginatedProducts, getTotalProductsCount } from "../../../../sanity/sanity-utils";
import ProductsHeader from "@/components/ProductsHeader";
import ProductsOrders from "@/components/ProductsOrders";
import ProductsPagination from "@/components/ProductsPagination";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Products({ searchParams }: Props) {
  const params = await searchParams; // ✅ Await before using properties
  const currentPage = parseInt(params.page ?? "1", 10);
  const pageSize = 25;

  const [products, totalProducts] = await Promise.all([
    getPaginatedProducts(currentPage, pageSize),
    getTotalProductsCount(),
  ]);

  const totalPages = Math.ceil(totalProducts / pageSize);

  return (
    <>
      <ProductsHeader />

      <div className="container mx-auto">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-5 lg:space-y-0 lg:gap-x-6 gap-y-12">
              {products.map((product) => (
                <div key={product._id} className="group relative">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      className="w-full rounded-sm object-cover max-sm:h-80 sm:aspect-2/1 lg:aspect-square opacity-95 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300"
                    />
                  )}
                  <h3 className="mt-6 text-base font-semibold text-gray-900 text-center">
                    <Link href={`/products/${product.slug}`}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  {product.description && (
                    <p className="text-sm text-gray-500 text-center">
                      {product.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <ProductsPagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
      </div>

      <ProductsOrders />
    </>
  );
}
