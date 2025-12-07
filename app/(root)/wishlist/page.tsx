"use client"

import Loader from "@/components/Loader"
import ProductCard from "@/components/ProductCard"
import { getProductDetails } from "@/lib/actions/actions"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"

const Wishlist = () => {
  const { user } = useUser()

  const [loading, setLoading] = useState(true)
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null)
  const [wishlist, setWishlist] = useState<ProductType[]>([])

  // Fetch user and their wishlist products together
  useEffect(() => {
    const fetchUserAndWishlist = async () => {
      if (!user) return

      setLoading(true)

      try {
        // Fetch full user data
        const res = await fetch("/api/users")
        const data: UserType = await res.json()
        setSignedInUser(data)

        // Fetch wishlist products safely
        const wishlistProducts = await Promise.all(
          (data.wishlist || []).map(async (productId) => {
            try {
              return await getProductDetails(productId)
            } catch (err) {
              console.error(`Failed to fetch product ${productId}`, err)
              return null
            }
          })
        )

        // Remove any nulls if fetch failed
        setWishlist(wishlistProducts.filter(Boolean) as ProductType[])
      } catch (err) {
        console.error("Failed to fetch user or wishlist", err)
      } finally {
        setLoading(false)
      }
    }

    fetchUserAndWishlist()
  }, [user])

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser)
  }

  if (loading) return <Loader />

  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">Your Wishlist</p>

      {wishlist.length === 0 ? (
        <p>No items in your wishlist</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {wishlist.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              updateSignedInUser={updateSignedInUser}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const dynamic = "force-dynamic"

export default Wishlist
