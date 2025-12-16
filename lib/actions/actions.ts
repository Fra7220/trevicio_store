export const getCollections = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching collections:", error);
    return []; // return empty array instead of crashing
  }
};


export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`)
  return await collection.json()
}

// lib/actions/actions.ts
export const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // fallback to empty array
  }
};


export const getProductDetails = async (productId: string): Promise<ProductType | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);

    if (!res.ok) {
      const text = await res.text();
      console.error(`[getProductDetails] Failed to fetch product ${productId}:`, text);
      return null;
    }

    const product: ProductType = await res.json();

    if (!product._id) {
      console.warn(`[getProductDetails] Product ${productId} missing _id:`, product);
      return null;
    }

    return product;
  } catch (err) {
    console.error(`[getProductDetails] Fetch error for product ${productId}:`, err);
    return null;
  }
};


export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedProducts.json()
}


export const getOrders = async (customerId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Failed to fetch orders:", errorText);
    return { orders: [], customer: null }; // fallback for frontend
  }

  const orders = await res.json();

  // If no orders, still return customer info as null
  return { orders, customer: orders.length > 0 ? { clerkId: orders[0].customerClerkId } : null };
};



export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`)
  return await relatedProducts.json()
}