// Shopify Storefront API GraphQL Client
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "verona-8561.myshopify.com";
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "7d9bf99c26db75b78ba4c74df303da51";

export async function shopifyFetch<T>({
  query,
  variables = {},
}: {
  query: string;
  variables?: Record<string, any>;
}): Promise<T | null> {
  const endpoint = `https://${domain}/api/2024-04/graphql.json`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });

    const json = await response.json();
    if (json.errors) {
      console.error("Shopify Storefront API Errors:", json.errors);
      return null;
    }

    return json.data;
  } catch (error) {
    console.error("Failed to fetch from Shopify:", error);
    return null;
  }
}

// GraphQL Queries for Products
export const GET_ALL_PRODUCTS_QUERY = `
  query getAllProducts($first: Int = 20) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 2) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`;
