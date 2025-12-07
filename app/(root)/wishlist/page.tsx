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

  // Fetch user data from your API
  const getUser = async () => {
    try {
      console.log("Fetching signed-in user...")
      const res = await fetch("/api/users")
      const data = await res.json()
      console.log("User data fetched:", data)
      setSignedInUser(data)
      setLoading(false)
    } catch (err) {
      console.error("[users_GET] Error:", err)
    }
  }

  useEffect(() => {
    if (user) {
      getUser()
    }
  }, [user])

  // Fetch wishlist products
  const getWishlistProducts = async () => {
    if (!signedInUser) return
    setLoading(true)
    console.log("Fetching wishlist products for user:", signedInUser)

    try {
      const wishlistProducts = await Promise.all(
        signedInUser.wishlist.map(async (productId) => {
          const res = await getProductDetails(productId)
          console.log("Product fetched:", res)
          return res
        })
      )

      // Filter out nulls before updating state
      const filteredProducts = wishlistProducts.filter(
        (product): product is ProductType => product !== null
      )

      console.log("Filtered wishlist products:", filteredProducts)
      setWishlist(filteredProducts)
    } catch (err) {
      console.error("[wishlist_FETCH] Error fetching products:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts()
    }
  }, [signedInUser])

  const updateSignedInUser = (updatedUser: UserType) => {
    console.log("Updating signed-in user:", updatedUser)
    setSignedInUser(updatedUser)
  }

  if (loading) return <Loader />

  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">Your Wishlist</p>

      {wishlist.length === 0 && <p>No items in your wishlist</p>}

      <div className="flex flex-wrap justify-center gap-16">
        {wishlist.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            updateSignedInUser={updateSignedInUser}
          />
        ))}
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic"

export default Wishlist
