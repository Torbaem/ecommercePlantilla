const C={title:"Relevance",slug:null,sortKey:"CREATED_AT",reverse:!1},j=[C,{title:"Trending",slug:"trending-desc",sortKey:"BEST_SELLING",reverse:!1},{title:"Latest arrivals",slug:"latest-desc",sortKey:"CREATED_AT",reverse:!0},{title:"Price: Low to high",slug:"price-asc",sortKey:"PRICE",reverse:!1},{title:"Price: High to low",slug:"price-desc",sortKey:"PRICE",reverse:!0}],k="Default Title",v="/api/2023-01/graphql.json",I=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),h=e=>I(e)?e instanceof Error?!0:g(e):!1;function g(e){if(Object.prototype.toString.call(e)==="[object Error]")return!0;const t=Object.getPrototypeOf(e);return t===null?!1:g(t)}const $=`
  fragment image on Image {
    url
    altText
    width
    height
  }
`,A=`
  fragment seo on SEO {
    description
    title
  }
`,w=`
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
  ${$}
  ${A}
`,d=`
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
  ${w}
`,T=`
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${d}
`,E=`
  mutation createCart($lineItems: [CartLineInput!]) {
    cartCreate(input: { lines: $lineItems }) {
      cart {
        ...cart
      }
    }
  }
  ${d}
`,D=`
  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${d}
`,P=`
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${d}
`,O=`
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
`,R=`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${d}
`,S="",b=`${S}${v}`,F=void 0;async function u({headers:e,query:t,variables:o}){try{const a=await fetch(b,{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":F,...e},body:JSON.stringify({...t&&{query:t},...o&&{variables:o}})});if(!a.ok)throw new Error(`Request failed with status ${a.status}`);const r=await a.json();if(r.errors)throw r.errors[0];return{status:a.status,body:r}}catch(a){throw h(a)?{cause:a.cause?.toString()||"unknown",status:a.status||500,message:a.message,query:t}:{error:a,query:t}}}const L=e=>e.edges.map(t=>t?.node),l=e=>(e.cost?.totalTaxAmount||(e.cost.totalTaxAmount={amount:"0.0",currencyCode:"USD"}),{...e,lines:L(e.lines)});async function q(){const e=await u({query:E});return l(e.body.data.cartCreate.cart)}async function _(e,t){const o=await u({query:T,variables:{cartId:e,lines:t}});return l(o.body.data.cartLinesAdd.cart)}async function B(e,t){const o=await u({query:P,variables:{cartId:e,lineIds:t}});return l(o.body.data.cartLinesRemove.cart)}async function K(e,t){const o=await u({query:D,variables:{cartId:e,lines:t}});return l(o.body.data.cartLinesUpdate.cart)}async function M(e){const t=await u({query:R,variables:{cartId:e}});if(t.body.data.cart)return l(t.body.data.cart)}async function N(e){return(await u({query:O,variables:{input:e}})).body.data}/*! js-cookie v3.0.5 | MIT */function p(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)e[a]=o[a]}return e}var U={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function f(e,t){function o(r,c,n){if(!(typeof document>"u")){n=p({},t,n),typeof n.expires=="number"&&(n.expires=new Date(Date.now()+n.expires*864e5)),n.expires&&(n.expires=n.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var i in n)n[i]&&(s+="; "+i,n[i]!==!0&&(s+="="+n[i].split(";")[0]));return document.cookie=r+"="+e.write(c,r)+s}}function a(r){if(!(typeof document>"u"||arguments.length&&!r)){for(var c=document.cookie?document.cookie.split("; "):[],n={},s=0;s<c.length;s++){var i=c[s].split("="),y=i.slice(1).join("=");try{var m=decodeURIComponent(i[0]);if(n[m]=e.read(y,m),r===m)break}catch{}}return r?n[r]:n}}return Object.create({set:o,get:a,remove:function(r,c){o(r,"",p({},c,{expires:-1}))},withAttributes:function(r){return f(this.converter,p({},this.attributes,r))},withConverter:function(r){return f(p({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var H=f(U,{path:"/"});export{k as D,H as a,_ as b,q as c,C as d,N as e,M as g,B as r,j as s,K as u};
