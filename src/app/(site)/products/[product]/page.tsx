import { getProduct } from "../../../../../sanity/sanity-utils";
import ProductClient from "./ProductClient";

type Props = {
  params: Promise<{ product: string }>; // params is a Promise now
};

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const { product: slug } = resolvedParams;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductClient product={product} />;
}