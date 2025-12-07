// lib/actions/actions.ts

export const getCollections = async (): Promise<CollectionType[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("[getCollections] NEXT_PUBLIC_API_URL is not defined");
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/collections`);
    const text = await res.text();
    if (!res.ok) {
      console.error(`[getCollections] Server returned error:`, text);
      return [];
    }
    try {
      return JSON.parse(text) as CollectionType[];
    } catch (err) {
      console.error("[getCollections] Failed to parse JSON:", text, err);
      return [];
    }
  } catch (err) {
    console.error("[getCollections] Network or fetch error:", err);
    return [];
  }
};

export const getCollectionDetails = async (collectionId: string): Promise<CollectionType | null> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("[getCollectionDetails] NEXT_PUBLIC_API_URL is not defined");
    return null;
  }

  try {
    const res = await fetch(`${apiUrl}/collections/${collectionId}`);
    const text = await res.text();
    if (!res.ok) {
      console.error(`[getCollectionDetails] Failed to fetch collection ${collectionId}:`, text);
      return null;
    }
    try {
      return JSON.parse(text) as CollectionType;
    } catch (err) {
      console.error(`[getCollectionDetails] Failed to parse JSON for collection ${collectionId}:`, text, err);
      return null;
    }
  } catch (err) {
    console.error(`[getCollectionDetails] Fetch error for collection ${collectionId}:`, err);
    return null;
  }
};

export const getProducts = async (): Promise<ProductType[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("[getProducts] NEXT_PUBLIC_API_URL is not defined");
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/products`);
    const text = await res.text();
    if (!res.ok) {
      console.error(`[getProducts] Failed to fetch products:`, text);
      return [];
    }
    try {
      return JSON.parse(text) as ProductType[];
    } catch (err) {
      console.error("[getProducts] Failed to parse JSON:", text, err);
      return [];
    }
  } catch (err) {
    console.error("[getProducts] Network or fetch error:", err);
    return [];
  }
};

export const getProductDetails = async (productId: string): Promise<ProductType | null> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("[getProductDetails] NEXT_PUBLIC_API_URL is not defined");
    return null;
  }

  try {
    const res = await fetch(`${apiUrl}/products/${productId}`);
    const text = await res.text();
    if (!res.ok) {
      console.error(`[getProductDetails] Failed to fetch product ${productId}:`, text);
      return null;
    }
    try {
      return JSON.parse(text) as ProductType;
    } catch (err) {
      console.error(`[getProductDetails] Failed to parse JSON for product ${productId}:`, text, err);
      return null;
    }
  } catch (err) {
    console.error(`[getProductDetails] Network or fetch error for product ${productId}:`, err);
    return null;
  }
};

export const getSearchedProducts = async (query: string): Promise<ProductType[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("[getSearchedProducts] NEXT_PUBLIC_API_URL is not defined");
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/search/${query}`);
    const text = await res.text();
    if (!res.ok) {
      console.error(`[getSearchedProducts] Search failed for "${query}":`, text);
      return [];
    }
    try {
      return JSON.parse(text) as ProductType[];
    } catch (err) {
      console.error(`[getSearchedProducts] Failed to parse JSON for search "${query}":`, text, err);
      return [];
    }
  } catch (err) {
    console.error(`[getSearchedProducts] Network or fetch error for search "${query}":`, err);
    return [];
  }
};

export const getOrders = async (customerId: string): Promise<OrderType[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("[getOrders] NEXT_PUBLIC_API_URL is not defined");
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/orders/customers/${customerId}`);
    const text = await res.text();
    if (!res.ok) {
      console.error(`[getOrders] Failed to fetch orders for customer ${customerId}:`, text);
      return [];
    }
    try {
      return JSON.parse(text) as OrderType[];
    } catch (err) {
      console.error(`[getOrders] Failed to parse JSON for customer ${customerId}:`, text, err);
      return [];
    }
  } catch (err) {
    console.error(`[getOrders] Network or fetch error for customer ${customerId}:`, err);
    return [];
  }
};

export const getRelatedProducts = async (productId: string): Promise<ProductType[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("[getRelatedProducts] NEXT_PUBLIC_API_URL is not defined");
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/products/${productId}/related`);
    const text = await res.text();
    if (!res.ok) {
      console.error(`[getRelatedProducts] Failed to fetch related products for ${productId}:`, text);
      return [];
    }
    try {
      return JSON.parse(text) as ProductType[];
    } catch (err) {
      console.error(`[getRelatedProducts] Failed to parse JSON for related products ${productId}:`, text, err);
      return [];
    }
  } catch (err) {
    console.error(`[getRelatedProducts] Network or fetch error for product ${productId}:`, err);
    return [];
  }
};
