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
    return (
      <p className="text-center py-10 text-sm sm:text-base">
        Collection not found.
      </p>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 py-5 flex flex-col items-center gap-6 sm:gap-8">
      {/* Collection Image */}
      <div className="w-full">
        <Image
          src={collectionDetails.image}
          width={1500}
          height={1000}
          alt={collectionDetails.title}
          className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover rounded-lg sm:rounded-xl"
          priority
        />
      </div>

      {/* Collection Title */}
      <p className="text-lg sm:text-2xl md:text-heading3-bold text-grey-2 text-center px-2">
        {collectionDetails.title}
      </p>

      {/* Collection Description */}
      {collectionDetails.description && (
        <p className="text-sm sm:text-base md:text-body-medium text-blue-900 text-center max-w-3xl whitespace-pre-line leading-relaxed px-2">
          {collectionDetails.description}
        </p>
      )}

      {/* Products */}
      {Array.isArray(collectionDetails.products) &&
        collectionDetails.products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-12 md:gap-16 w-full justify-items-center">
            {collectionDetails.products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

      {/* Empty State */}
      {Array.isArray(collectionDetails.products) &&
        collectionDetails.products.length === 0 && (
          <p className="text-grey-1 text-center py-10 text-sm sm:text-base">
            No products available in this collection yet.
          </p>
        )}
    </div>
  );
};

export default CollectionDetails;
