"use client";

import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { getProductDetails } from "@/lib/actions/actions";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch current signed-in user from the API
  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("Failed to fetch signed-in user");

      const data = await res.json();
      setSignedInUser(data);
      console.log("[Wishlist] Signed-in user:", data);
    } catch (err) {
      console.error("[Wishlist] fetchUser error:", err);
      setError("Could not load user data.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all products in the user's wishlist
  const fetchWishlistProducts = async () => {
    if (!signedInUser?.wishlist?.length) {
      setWishlist([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const products = await Promise.all(
        signedInUser.wishlist.map(async (productId) => {
          try {
            const product = await getProductDetails(productId);
            if (!product) console.warn(`[Wishlist] Product not found: ${productId}`);
            return product ?? null;
          } catch (err) {
            console.error(`[Wishlist] Failed to fetch product ${productId}:`, err);
            return null;
          }
        })
      );

      const validProducts = products.filter((p) => p !== null) as ProductType[];
      setWishlist(validProducts);
      console.log("[Wishlist] Fetched products:", validProducts);
    } catch (err) {
      console.error("[Wishlist] fetchWishlistProducts error:", err);
      setError("Failed to load wishlist products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchUser();
  }, [user]);

  useEffect(() => {
    if (signedInUser) fetchWishlistProducts();
  }, [signedInUser]);

  // Update the signed-in user (used in ProductCard for wishlist toggle)
  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser);
  };

  if (loading) return <Loader />;

  return (
    <div className="px-10 py-5">
      <h1 className="text-heading3-bold my-10">Your Wishlist</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {wishlist.length === 0 && !error ? (
        <p className="text-center text-gray-500">No items in your wishlist</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {wishlist.map(
            (product) =>
              product?._id && (
                <ProductCard
                  key={product._id}
                  product={product}
                  updateSignedInUser={updateSignedInUser}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export const dynamic = "force-dynamic";
export default Wishlist;
