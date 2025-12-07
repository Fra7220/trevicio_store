// lib/actions/actions.ts

export const getCollections = async (): Promise<CollectionType[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
    if (!res.ok) throw new Error(`Failed to fetch collections: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("[getCollections] Error fetching collections:", error);
    return []; // fallback to empty array
  }
};

export const getCollectionDetails = async (collectionId: string): Promise<CollectionType | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`);
    if (!res.ok) {
      const text = await res.text();
      console.error(`[getCollectionDetails] Failed to fetch collection ${collectionId}:`, text);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(`[getCollectionDetails] Fetch error for collection ${collectionId}:`, err);
    return null;
  }
};

export const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  if (!res.ok) {
    console.error("Failed to fetch products:", res.statusText);
    return []; // fallback to empty array
  }
  return await res.json();
}

export const getProductDetails = async (productId: string): Promise<ProductType | null> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
  if (!res.ok) return null;
  return await res.json() as ProductType;
}


export const getSearchedProducts = async (query: string): Promise<ProductType[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`);
    if (!res.ok) throw new Error(`Search failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`[getSearchedProducts] Error searching for "${query}":`, err);
    return [];
  }
};

export const getOrders = async (customerId: string): Promise<OrderType[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`);
    if (!res.ok) return [];
    return await res.json() as OrderType[];
  } catch (err) {
    console.error(err);
    return [];
  }
}


export const getRelatedProducts = async (productId: string): Promise<ProductType[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`);
    if (!res.ok) throw new Error(`Failed to fetch related products: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`[getRelatedProducts] Error fetching related products for ${productId}:`, err);
    return [];
  }
};
