export const dynamic = "force-dynamic";

import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  if (!collectionDetails) {
    return <p className="text-center py-10">Collection not found.</p>;
  }

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      {/* Collection Image */}
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt={collectionDetails.title}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      {/* Collection Title */}
      <p className="text-heading3-bold text-grey-2 text-center">
        {collectionDetails.title}
      </p>

      {/* Collection Description */}
      {collectionDetails.description && (
        <p className="text-body-medium text-blue-900 text-center max-w-3xl whitespace-pre-line leading-relaxed">
          {collectionDetails.description}
        </p>
      )}

      {/* Products */}
      {Array.isArray(collectionDetails.products) &&
        collectionDetails.products.length > 0 && (
          <div className="flex flex-wrap gap-16 justify-center">
            {collectionDetails.products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

      {/* Empty State */}
      {Array.isArray(collectionDetails.products) &&
        collectionDetails.products.length === 0 && (
          <p className="text-grey-1 text-center py-10">
            No products available in this collection yet.
          </p>
        )}
    </div>
  );
};

export default CollectionDetails;
