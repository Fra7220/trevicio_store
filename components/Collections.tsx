"use client";

import { useEffect, useState } from "react";
import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = () => {
  const [collections, setCollections] = useState<CollectionType[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchCollections = async () => {
      const data = await getCollections();
      setCollections(data);
    };

    fetchCollections();
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>

      {collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {collections.slice(0, visibleCount).map((collection) => (
              <Link
                href={`/collections/${collection._id}`}
                key={collection._id}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </Link>
            ))}
          </div>

          {visibleCount < collections.length && (
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

export default Collections;
