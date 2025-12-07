"use client";
import ProductList from "./ProductList";

export default function ProductListSection() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
        Handpicked for quality, performance, and style – these are the products everyone is talking about!
      </p>
      <ProductList />
      <p className="text-gray-600 max-w-3xl mx-auto text-center mt-6">
        Limited stock available! Shop now to get the best deals and enjoy premium items delivered straight to your door.
      </p>
    </section>
  );
}
