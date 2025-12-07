"use client";
import Collections from "./Collections";

export default function CollectionsSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Collections</h2>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
        Unique, stylish, and functional items across every category – curated for your lifestyle.
      </p>
      <Collections />
      <p className="text-gray-600 max-w-3xl mx-auto text-center mt-6">
        Each collection brings you closer to modern elegance, quality craftsmanship, and exceptional value.
      </p>
    </section>
  );
}
