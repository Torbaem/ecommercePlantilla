import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { a as $$Base } from '../chunks/Base_CG9zL_kJ.mjs';
import { s as sorting, f as defaultSort, h as getCollectionProducts, b as getProducts, i as getCollections, j as getVendors, k as getHighestProductPrice } from '../chunks/index_BPCM2MGm.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DmDIpAsX.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrofront.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const searchParams = Astro2.url.searchParams;
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const sort = searchParamsObject.sort || "";
  const searchValue = searchParamsObject.q || "";
  const minPrice = searchParamsObject.minPrice || "";
  const maxPrice = searchParamsObject.maxPrice || "";
  const brand = searchParamsObject.b || "";
  const category = searchParamsObject.c || "all";
  const tag = searchParamsObject.t || "";
  const cursor = searchParamsObject.cursor || null;
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  let productsData;
  let vendorsWithCounts = [];
  let categoriesWithCounts = [];
  {
    let queryString = "";
    if (minPrice || maxPrice) {
      queryString += `variants.price:<=${maxPrice} variants.price:>=${minPrice}`;
    }
    if (searchValue) {
      queryString += ` ${searchValue}`;
    }
    if (brand) {
      Array.isArray(brand) ? queryString += `${brand.map((b) => `(vendor:${b})`).join(" OR ")}` : queryString += `vendor:"${brand}"`;
    }
    if (tag) {
      queryString += ` ${tag}`;
    }
    const query = {
      sortKey,
      reverse,
      query: queryString,
      cursor: cursor || void 0
    };
    try {
      productsData = category && category !== "all" ? await getCollectionProducts({
        collection: category,
        sortKey,
        reverse
      }) : await getProducts(query);
    } catch (error) {
      console.error("Error fetching products:", error);
      productsData = { products: [] };
    }
    const uniqueVendors = [
      ...new Set(
        (productsData?.products || []).map(
          (product) => String(product?.vendor || "")
        )
      )
    ];
    const uniqueCategories = [
      ...new Set(
        (productsData?.products || []).flatMap(
          (product) => product.collections.nodes.map(
            (collectionNode) => collectionNode.title || ""
          )
        )
      )
    ];
    vendorsWithCounts = uniqueVendors.map((vendor) => {
      const productCount = (productsData?.products || []).filter(
        (product) => product?.vendor === vendor
      ).length;
      return { vendor, productCount };
    });
    categoriesWithCounts = uniqueCategories.map((category2) => {
      const productCount = (productsData?.products || []).filter(
        (product) => product.collections.nodes.some(
          (collectionNode) => collectionNode.title === category2
        )
      ).length;
      return { category: category2, productCount };
    });
  }
  const categories = await getCollections();
  const vendors = await getVendors({});
  const tags = [
    ...new Set(
      productsData?.products.flatMap((product) => product.tags)
    )
  ];
  const maxPriceData = await getHighestProductPrice();
  const initialProducts = productsData.products;
  const initialPageInfo = productsData.pageInfo;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Products" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ProductLayouts", null, { "categories": categories, "vendors": vendors, "tags": tags, "maxPriceData": maxPriceData, "vendorsWithCounts": vendorsWithCounts, "categoriesWithCounts": categoriesWithCounts, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/functional-components/product/ProductLayouts", "client:component-export": "default" })} ${maybeRenderHead()}<div class="container"> <div class="row"> <div class="col-3 hidden lg:block -mt-14"> ${renderComponent($$result2, "ProductFilters", null, { "categories": categories, "vendors": vendors, "tags": tags, "maxPriceData": maxPriceData, "vendorsWithCounts": vendorsWithCounts, "categoriesWithCounts": categoriesWithCounts, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/functional-components/ProductFilters", "client:component-export": "default" })} </div> ${renderComponent($$result2, "ProductLayoutViews", null, { "initialProducts": initialProducts, "initialPageInfo": initialPageInfo, "sortKey": sortKey, "reverse": reverse, "searchValue": searchValue, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/functional-components/ProductLayoutViews", "client:component-export": "default" })} ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} </div> </div> ` })}`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/products/index.astro", void 0);

const $$file = "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
