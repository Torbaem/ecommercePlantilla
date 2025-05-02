import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate } from './astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { c as config } from './Base_CG9zL_kJ.mjs';

const $$Astro = createAstro("https://astrofront.vercel.app/");
const $$FeaturedProducts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturedProducts;
  const { products } = Astro2.props;
  const { currencySymbol } = config.shopify;
  return renderTemplate`${maybeRenderHead()}<div class="row"> ${products.map((product) => {
    const {
      title,
      handle,
      featuredImage,
      priceRange,
      variants,
      compareAtPriceRange
    } = product;
    const defaultVariantId = variants.length > 0 ? variants[0].id : void 0;
    return renderTemplate`<div class="text-center col-6 md:col-4 lg:col-3 mb-8 md:mb-14 group relative"> <div class="relative overflow-hidden"> <img${addAttribute(featuredImage.url || "/images/product_image404.jpg", "src")}${addAttribute(312, "width")}${addAttribute(269, "height")}${addAttribute(featuredImage.altText || "fallback image", "alt")} class="w-[312px] h-[150px] md:h-[269px] object-cover border border-border rounded-md"> ${renderComponent($$result, "AddToCart", null, { "client:only": "react", "variants": product.variants, "availableForSale": product.availableForSale, "handle": handle, "defaultVariantId": defaultVariantId, "stylesClass": "btn btn-primary max-md:btn-sm z-10 absolute bottom-12 md:bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full md:group-hover:-translate-y-6 duration-300 ease-in-out whitespace-nowrap drop-shadow-md", "client:component-hydration": "only", "client:component-path": "@/functional-components/cart/AddToCart", "client:component-export": "AddToCart" })} </div> <div class="py-2 md:py-4 text-center z-20"> <h2 class="font-medium text-base md:text-xl"> <a class="after:absolute after:inset-0"${addAttribute(`/products/${handle}`, "href")}> ${title} </a> </h2> <div class="flex flex-wrap justify-center items-center gap-x-2 mt-2 md:mt-4"> <span class="text-base md:text-xl font-bold text-text-dark dark:text-darkmode-text-dark"> ${currencySymbol} ${priceRange.minVariantPrice.amount} ${compareAtPriceRange?.maxVariantPrice?.currencyCode} </span> ${parseFloat(compareAtPriceRange?.maxVariantPrice.amount) > 0 && renderTemplate`<s class="text-text-light dark:text-darkmode-text-light text-xs md:text-base font-medium"> ${currencySymbol} ${compareAtPriceRange?.maxVariantPrice.amount}${" "} ${compareAtPriceRange?.maxVariantPrice?.currencyCode} </s>`} </div> </div> </div>`;
  })} </div> <div class="flex justify-center"> <a class="btn btn-sm md:btn-lg btn-primary font-medium" href="/products">
+ See All Products
</a> </div>`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/layouts/components/FeaturedProducts.astro", void 0);

export { $$FeaturedProducts as $ };
