const defaultSort = {
  title: "Relevance",
  slug: null,
  sortKey: "CREATED_AT",
  reverse: false
};
const sorting = [
  defaultSort,
  {
    title: "Trending",
    slug: "trending-desc",
    sortKey: "BEST_SELLING",
    reverse: false
  },
  // asc
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: "PRICE",
    reverse: false
  },
  // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true
  }
];
const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";
const DEFAULT_OPTION = "Default Title";
const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-01/graphql.json";

const isObject = (object) => {
  return typeof object === "object" && object !== null && !Array.isArray(object);
};
const isShopifyError = (error) => {
  if (!isObject(error)) return false;
  if (error instanceof Error) return true;
  return findError(error);
};
function findError(error) {
  if (Object.prototype.toString.call(error) === "[object Error]") {
    return true;
  }
  const prototype = Object.getPrototypeOf(error);
  return prototype === null ? false : findError(prototype);
}

const imageFragment = (
  /* GraphQL */
  `
  fragment image on Image {
    url
    altText
    width
    height
  }
`
);

const seoFragment = (
  /* GraphQL */
  `
  fragment seo on SEO {
    description
    title
  }
`
);

const productFragment = (
  /* GraphQL */
  `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
    vendor
    collections(first: 100) {
      nodes {
        title
        products(first: 100) {
          edges {
            node {
              title
              vendor
            }
          }
        }
      }
    }
  }
  ${imageFragment}
  ${seoFragment}
`
);

const cartFragment = (
  /* GraphQL */
  `
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions {
                name
                value
              }
              product {
                ...product
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
  ${productFragment}
`
);

const editCartItemsMutation = (
  /* GraphQL */
  `
  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`
);
const removeFromCartMutation = (
  /* GraphQL */
  `
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${cartFragment}
`
);

const createCustomerMutation = (
  /* GraphQL */
  `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        firstName
        lastName
        email
        phone
        acceptsMarketing
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`
);
const getCustomerAccessTokenMutation = (
  /* GraphQL */
  `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`
);
const getUserDetailsQuery = (
  /* GraphQL */
  `
  query getOrders($input: String!) {
    customer(customerAccessToken: $input) {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
`
);

const getCartQuery = (
  /* GraphQL */
  `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${cartFragment}
`
);

const collectionFragment = (
  /* GraphQL */
  `
  fragment collection on Collection {
    handle
    title
    description
    image {
      altText
      url
    }
    seo {
      ...seo
    }
    updatedAt
    products(first: 100) {
      edges {
        node {
          id
        }
      }
    }
  }
  ${seoFragment}
`
);
const getCollectionsQuery = (
  /* GraphQL */
  `
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`
);
const getCollectionProductsQuery = (
  /* GraphQL */
  `
  query getCollectionProducts(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
    $filterCategoryProduct: [ProductFilter!]
  ) {
    collection(handle: $handle) {
      products(
        sortKey: $sortKey
        reverse: $reverse
        first: 100
        filters: $filterCategoryProduct
      ) {
        edges {
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`
);

const getProductQuery = (
  /* GraphQL */
  `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`
);
const getProductsQuery = (
  /* GraphQL */
  `
  query getProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
    $cursor: String
  ) {
    products(
      sortKey: $sortKey
      reverse: $reverse
      query: $query
      first: 12
      after: $cursor
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
      }
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`
);
const getProductRecommendationsQuery = (
  /* GraphQL */
  `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`
);
const getHighestProductPriceQuery = (
  /* GraphQL */
  `
  query getHighestProductPrice {
    products(first: 1, sortKey: PRICE, reverse: true) {
      edges {
        node {
          variants(first: 1) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`
);

const getVendorsQuery = (
  /* GraphQL */
  `
  query getVendors {
    products(first: 250) {
      edges {
        node {
          vendor
        }
      }
    }
  }
`
);

const domain = "";
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = undefined                                                      ;
async function shopifyFetch({
  headers,
  query,
  variables
}) {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
        ...headers
      },
      body: JSON.stringify({
        ...query && { query },
        ...variables && { variables }
      })
    });
    if (!result.ok) {
      throw new Error(`Request failed with status ${result.status}`);
    }
    const body = await result.json();
    if (body.errors) {
      throw body.errors[0];
    }
    return {
      status: result.status,
      body
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || "unknown",
        status: e.status || 500,
        message: e.message,
        query
      };
    }
    throw {
      error: e,
      query
    };
  }
}
const removeEdgesAndNodes = (array) => {
  return array.edges.map((edge) => edge?.node);
};
const reshapeCart = (cart) => {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: "0.0",
      currencyCode: "USD"
    };
  }
  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines)
  };
};
const reshapeCollection = (collection) => {
  if (!collection) {
    return void 0;
  }
  return {
    ...collection,
    path: `/products/${collection.handle}`
  };
};
const reshapeCollections = (collections) => {
  const reshapedCollections = [];
  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection);
      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }
  return reshapedCollections;
};
const reshapeImages = (images, productTitle) => {
  const flattened = removeEdgesAndNodes(images);
  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`
    };
  });
};
const reshapeProduct = (product, filterHiddenProducts = true) => {
  if (!product || filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG)) {
    return void 0;
  }
  const { images, variants, ...rest } = product;
  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants)
  };
};
const reshapeProducts = (products) => {
  const reshapedProducts = [];
  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);
      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }
  return reshapedProducts;
};
async function removeFromCart(cartId, lineIds) {
  const res = await shopifyFetch({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds
    }});
  return reshapeCart(res.body.data.cartLinesRemove.cart);
}
async function updateCart(cartId, lines) {
  const res = await shopifyFetch({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines
    }});
  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}
async function getCart(cartId) {
  const res = await shopifyFetch({
    query: getCartQuery,
    variables: { cartId }});
  if (!res.body.data.cart) {
    return void 0;
  }
  return reshapeCart(res.body.data.cart);
}
async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
  filterCategoryProduct
}) {
  const res = await shopifyFetch({
    query: getCollectionProductsQuery,
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
      filterCategoryProduct
    }
  });
  if (!res.body.data.collection) {
    return { pageInfo: null, products: [] };
  }
  const pageInfo = res.body.data?.collection?.products?.pageInfo;
  return {
    pageInfo,
    products: reshapeProducts(
      removeEdgesAndNodes(res.body.data.collection.products)
    )
  };
}
async function createCustomer(input) {
  const res = await shopifyFetch({
    query: createCustomerMutation,
    variables: {
      input
    }});
  const customer = res.body.data?.customerCreate?.customer;
  const customerCreateErrors = res.body.data?.customerCreate?.customerUserErrors;
  return { customer, customerCreateErrors };
}
async function getCustomerAccessToken({
  email,
  password
}) {
  const res = await shopifyFetch({
    query: getCustomerAccessTokenMutation,
    variables: { input: { email, password } }
  });
  const token = res.body.data?.customerAccessTokenCreate?.customerAccessToken?.accessToken;
  const customerLoginErrors = res?.body?.data?.customerAccessTokenCreate?.customerUserErrors;
  return { token, customerLoginErrors };
}
async function getUserDetails(accessToken) {
  const response = await shopifyFetch({
    query: getUserDetailsQuery,
    variables: {
      input: accessToken
    }});
  return response.body.data;
}
async function getCollections() {
  const res = await shopifyFetch({
    query: getCollectionsQuery});
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
  const collections = [
    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith("hidden")
    )
  ];
  return collections;
}
async function getProduct(handle) {
  const res = await shopifyFetch({
    query: getProductQuery,
    variables: {
      handle
    }
  });
  return reshapeProduct(res.body.data.product, false);
}
async function getProductRecommendations(productId) {
  const res = await shopifyFetch({
    query: getProductRecommendationsQuery,
    variables: {
      productId
    }
  });
  return reshapeProducts(res.body.data.productRecommendations);
}
async function getVendors({
  query,
  reverse,
  sortKey
}) {
  const res = await shopifyFetch({
    query: getVendorsQuery,
    variables: {
      query,
      reverse,
      sortKey
    }
  });
  const products = removeEdgesAndNodes(res.body.data.products);
  const vendorProductCounts = [];
  products.forEach((product) => {
    const vendor = product.vendor;
    if (vendor) {
      const existingVendor = vendorProductCounts.find(
        (v) => v.vendor === vendor
      );
      if (existingVendor) {
        existingVendor.productCount++;
      } else {
        vendorProductCounts.push({ vendor, productCount: 1 });
      }
    }
  });
  return vendorProductCounts;
}
async function getProducts({
  query,
  reverse,
  sortKey,
  cursor
}) {
  const res = await shopifyFetch({
    query: getProductsQuery,
    variables: {
      query,
      reverse,
      sortKey,
      cursor
    }
  });
  const pageInfo = res.body.data?.products?.pageInfo;
  return {
    pageInfo,
    products: reshapeProducts(removeEdgesAndNodes(res.body.data.products))
  };
}
async function getHighestProductPrice() {
  try {
    const res = await shopifyFetch({
      query: getHighestProductPriceQuery
    });
    const highestProduct = res?.body?.data?.products?.edges[0]?.node;
    const highestProductPrice = highestProduct?.variants?.edges[0]?.node?.price;
    return highestProductPrice || null;
  } catch (error) {
    console.log("Error fetching highest product price:", error);
    throw error;
  }
}

export { DEFAULT_OPTION as D, getUserDetails as a, getProducts as b, createCustomer as c, getProduct as d, getProductRecommendations as e, defaultSort as f, getCustomerAccessToken as g, getCollectionProducts as h, getCollections as i, getVendors as j, getHighestProductPrice as k, getCart as l, removeFromCart as r, sorting as s, updateCart as u };
