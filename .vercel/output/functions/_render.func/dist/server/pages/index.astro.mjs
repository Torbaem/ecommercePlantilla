import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { $ as $$FeaturedProducts } from '../chunks/FeaturedProducts_CDqRSTHu.mjs';
import { c as config, a as $$Base } from '../chunks/Base_CG9zL_kJ.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
/* empty css                                 */
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { h as getCollectionProducts, i as getCollections } from '../chunks/index_BPCM2MGm.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_DmDIpAsX.mjs';
export { renderers } from '../renderers.mjs';

const SkeletonCategory = () => {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-x-6", children: Array(3).fill(0).map((_, index) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-[150px] md:h-[250px] lg:h-[306px] rounded-md animate-pulse bg-neutral-200 dark:bg-neutral-700"
      },
      index
    );
  }) });
};

const CollectionsSlider = ({ collections }) => {
  const [_, setInit] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [collectionsData, setCollectionsData] = useState([]);
  const [loadingCollectionsData, setLoadingCollectionsData] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    setCollectionsData(collections);
    setLoadingCollectionsData(false);
  }, [collections]);
  if (loadingCollectionsData) {
    return /* @__PURE__ */ jsx(SkeletonCategory, {});
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: /* @__PURE__ */ jsxs(
        Swiper,
        {
          modules: [Pagination, Navigation],
          slidesPerView: 2,
          spaceBetween: 10,
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          },
          navigation: {
            prevEl: prevRef.current,
            nextEl: nextRef.current
          },
          onInit: () => setInit(true),
          children: [
            collectionsData?.map((item) => {
              const { title, handle, image } = item;
              return /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "text-center relative", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: image?.url,
                    width: 424,
                    height: 306,
                    alt: title,
                    className: "h-[150px] md:h-[250px] lg:h-[306px] object-cover rounded-md"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "py-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "mb-2 font-medium h4", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      className: "after:absolute after:inset-0",
                      href: `/products?c=${handle}`,
                      children: title
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("p", { className: "text-text-light dark:text-darkmode-text-light text-xs md:text-xl", children: [
                    item.products?.edges.length,
                    " items"
                  ] })
                ] })
              ] }) }, handle);
            }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `hidden md:block w-full absolute top-[33%] z-10 px-4 text-text-dark ${isHovered ? "opacity-100 transition-opacity duration-300 ease-in-out" : "opacity-0 transition-opacity duration-300 ease-in-out"}`,
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      ref: prevRef,
                      className: "p-2 lg:p-3 rounded-md bg-body cursor-pointer shadow-sm absolute left-4",
                      children: /* @__PURE__ */ jsx(HiOutlineArrowNarrowLeft, { size: 24 })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      ref: nextRef,
                      className: "p-2 lg:p-3 rounded-md bg-body cursor-pointer shadow-sm absolute right-4",
                      children: /* @__PURE__ */ jsx(HiOutlineArrowNarrowRight, { size: 24 })
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
};

const HeroSlider = ({ products }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Swiper,
    {
      pagination: {
        clickable: true,
        bulletClass: "banner-pagination-bullet",
        bulletActiveClass: "banner-pagination-bullet-active"
      },
      modules: [Pagination],
      children: products?.map((item) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "row items-center px-7 xl:px-16", children: [
        /* @__PURE__ */ jsx("div", { className: "sm:col-12 lg:col-6 order-2 lg:order-0", children: /* @__PURE__ */ jsxs("div", { className: "text-center py-10 lg:py-0", children: [
          item?.description && /* @__PURE__ */ jsx("p", { className: "mb-2 lg:mb-3 text-text-light dark:text-darkmode-text-light font-medium md:text-xl", children: item.description }),
          /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("h1", { className: "mb-4 lg:mb-10 col-10 sm:col-8 lg:col-12 mx-auto", children: item.title }) }),
          item.handle && /* @__PURE__ */ jsx(
            "a",
            {
              className: "btn btn-sm md:btn-lg btn-primary font-medium",
              href: `products/${item.handle}`,
              children: "Shop Now"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "sm:col-12 lg:col-6", children: item.featuredImage && /* @__PURE__ */ jsx(
          "img",
          {
            src: item.featuredImage.url,
            className: "mx-auto w-[388px] lg:w-full",
            width: "507",
            height: "385",
            alt: "banner image"
          }
        ) })
      ] }) }, item.id))
    }
  ) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { collections } = config.shopify;
  const sliderImages = await getCollectionProducts({
    collection: collections.hero_slider
  });
  const heroProducts = sliderImages.products;
  const collectionProducts = await getCollections();
  const { products: featuredProducts } = await getCollectionProducts({
    collection: collections.featured_products,
    reverse: false
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container"> <div class="bg-gradient py-10 rounded-md"> ${renderComponent($$result2, "HeroSlider", HeroSlider, { "products": heroProducts, "client:load": true, "client:component-hydration": "load", "client:component-path": "src/layouts/functional-components/HeroSlider", "client:component-export": "default" })} </div> </div> </section> <section class="section"> <div class="container"> <div class="text-center mb-6 md:mb-14"> <h2>Collections</h2> </div> ${renderComponent($$result2, "CollectionsSlider", CollectionsSlider, { "client:load": true, "collections": collectionProducts, "client:component-hydration": "load", "client:component-path": "@/functional-components/CollectionsSlider", "client:component-export": "default" })} </div> </section> <section> <div class="container"> <div class="text-center mb-6 md:mb-14"> <h2 class="mb-2">Featured Products</h2> <p class="md:h5">Explore Today's Featured Picks!</p> </div> ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, { "products": featuredProducts })} </div> </section> ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ` })}`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
