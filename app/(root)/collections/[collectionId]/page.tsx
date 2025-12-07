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
      <Image
        src={collectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>

      {Array.isArray(collectionDetails.products) && collectionDetails.products.length > 0 && (
        <div className="flex flex-wrap gap-16 justify-center">
          {collectionDetails.products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionDetails;
