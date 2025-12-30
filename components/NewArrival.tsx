import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const NewArrival = async () => {
  const products = await getProducts();

  // Get last 2 products (newest)
  const newArrivals = products?.slice(-2).reverse();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      

      {!newArrivals || newArrivals.length === 0 ? (
        <p className="text-body-bold">No new arrivals</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {newArrivals.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewArrival;
