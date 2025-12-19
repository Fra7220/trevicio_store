"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-body-bold text-center py-10">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Products</p>

      {products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-16">
            {products.slice(0, visibleCount).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {visibleCount < products.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="
                mt-8 px-8 py-3 rounded-full
                bg-black text-white font-semibold
                shadow-lg
                transition-all duration-300
                hover:bg-gray-800 hover:scale-105
              "
            >
              Show More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
