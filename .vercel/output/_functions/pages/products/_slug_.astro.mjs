import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../../chunks/astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { $ as $$FeaturedProducts } from '../../chunks/FeaturedProducts_CDqRSTHu.mjs';
import { a as $$Base, c as config } from '../../chunks/Base_CG9zL_kJ.mjs';
import { d as getProduct, e as getProductRecommendations } from '../../chunks/index_BPCM2MGm.mjs';
import { g as getEntry } from '../../chunks/_astro_content_DB8juhRg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astrofront.vercel.app/");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const product = await getProduct(slug);
  const paymentSection = await getEntry(
    "paymentSection",
    "payments-and-delivery"
  );
  const { payment_methods, estimated_delivery } = paymentSection.data;
  if (!product) {
    return Astro2.redirect("/404");
  }
  const {
    id,
    title,
    description,
    descriptionHtml,
    priceRange,
    compareAtPriceRange,
    images,
    options,
    variants,
    tags
  } = product;
  const relatedProducts = await getProductRecommendations(id);
  const defaultVariantId = variants.length > 0 ? variants[0].id : void 0;
  const { currencySymbol } = config.shopify;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="md:section-sm"> <div class="container"> <div class="row justify-center">  <div class="col-10 md:col-8 lg:col-6"> ${renderComponent($$result2, "ProductGallery", null, { "client:only": "react", "images": images, "client:component-hydration": "only", "client:component-path": "@/functional-components/product/ProductGallery", "client:component-export": "default" })} </div>  <div class="col-10 md:col-8 lg:col-5 md:ml-7 py-6 lg:py-0"> <h1 class="text-3xl md:h2 mb-2 md:mb-6">${title}</h1> <div class="flex gap-2 items-center"> <h4 class="text-text-light dark:text-darkmode-text-light max-md:h2"> ${currencySymbol} ${priceRange?.minVariantPrice.amount}${" "} ${priceRange?.minVariantPrice?.currencyCode} </h4> ${parseFloat(compareAtPriceRange?.maxVariantPrice.amount) > 0 ? renderTemplate`<s class="text-text-light max-md:h3 dark:text-darkmode-text-light"> ${currencySymbol}${" "} ${compareAtPriceRange?.maxVariantPrice?.amount}${" "} ${compareAtPriceRange?.maxVariantPrice?.currencyCode} </s>` : ""} </div> <div class="my-10 md:my-10 space-y-6 md:space-y-10"> <div> ${options && renderTemplate`${renderComponent($$result2, "VariantSelector", null, { "client:only": "react", "options": options, "variants": variants, "images": images, "client:component-hydration": "only", "client:component-path": "@/functional-components/product/VariantSelector", "client:component-export": "VariantSelector" })}`} </div> </div> <div class="flex gap-4 mt-8 md:mt-10 mb-6"> ${renderComponent($$result2, "AddToCart", null, { "client:only": "react", "variants": product?.variants, "availableForSale": product?.availableForSale, "stylesClass": "btn max-md:btn-sm btn-primary", "handle": null, "defaultVariantId": defaultVariantId, "client:component-hydration": "only", "client:component-path": "@/functional-components/cart/AddToCart", "client:component-export": "AddToCart" })} </div> <div class="mb-8 md:mb-10"> <p class="p-2 max-md:text-sm rounded-md bg-light dark:bg-darkmode-light inline"> ${estimated_delivery} </p> </div> <div class="flex flex-wrap items-center gap-3"> <h5 class="max-md:text-base">Payment:</h5> ${payment_methods?.map(
    (payment) => renderTemplate`<img${addAttribute(payment.image_url, "src")}${addAttribute(payment.name, "alt")}${addAttribute(44, "width")}${addAttribute(32, "height")}>`
  )} </div> <hr class="my-6 border border-border dark:border-border/40"> <div class="flex gap-3 items-center mb-6"> <h5 class="max-md:text-base">Share:</h5> ${renderComponent($$result2, "SocialShare", null, { "socialName": title, "className": "social-icons", "pathname": Astro2.url.pathname, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/functional-components/SocialShare", "client:component-export": "default" })} </div> ${tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-3 items-center"> <h5 class="max-md:text-base">Tags:</h5> ${renderComponent($$result2, "ShowTags", null, { "client:only": "react", "tags": tags, "client:component-hydration": "only", "client:component-path": "@/functional-components/product/ShowTags", "client:component-export": "default" })} </div>`} </div> </div> </div> </section> ${description && renderTemplate`<section> <div class="container"> <div class="row"> <div class="col-10 lg:col-11 mx-auto mt-12"> ${renderComponent($$result2, "Tabs", null, { "client:only": "react", "descriptionHtml": descriptionHtml, "client:component-hydration": "only", "client:component-path": "@/functional-components/product/Tabs", "client:component-export": "default" })} </div> </div> </div> </section>`}<section class="section"> <div class="container"> ${relatedProducts?.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="text-center mb-6 md:mb-14"> <h2 class="mb-2">Related Products</h2> </div> ${renderComponent($$result3, "FeaturedProducts", $$FeaturedProducts, { "products": relatedProducts.slice(0, 4) })} ` })}`} </div> </section> ` })}`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/products/[slug].astro", void 0);

const $$file = "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/products/[slug].astro";
const $$url = "/products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
