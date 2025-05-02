import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, F as Fragment$1 } from '../chunks/astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { m as markdownify, a as $$Base, $ as $$ImageMod } from '../chunks/Base_CG9zL_kJ.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
/* empty css                                 */
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { $ as $$PageHeader } from '../chunks/PageHeader_Dxn7Iszu.mjs';
import { g as getEntry } from '../chunks/_astro_content_DB8juhRg.mjs';
import { FaHeadset, FaBoxOpen, FaRegCheckCircle } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const Accordion = ({ faqs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return /* @__PURE__ */ jsx(Fragment, { children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: `accordion ${activeTab === index && "active"}`,
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "accordion-header",
            onClick: () => {
              activeTab === index ? setActiveTab(null) : setActiveTab(index);
            },
            children: [
              faq.title,
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "accordion-icon",
                  x: "0px",
                  y: "0px",
                  viewBox: "0 0 512 512",
                  xmlSpace: "preserve",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fill: "currentColor",
                      d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "accordion-content", children: faq.content })
      ]
    },
    index
  )) });
};

const Testimonials = ({
  title,
  testimonials
}) => {
  const [_, setInit] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6", children: /* @__PURE__ */ jsx("h2", { dangerouslySetInnerHTML: { __html: markdownify(title) }, className: "mb-4" }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative",
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        children: /* @__PURE__ */ jsxs(
          Swiper,
          {
            modules: [Pagination, Navigation],
            spaceBetween: 24,
            navigation: {
              prevEl: prevRef.current,
              nextEl: nextRef.current
            },
            onInit: () => setInit(true),
            children: [
              testimonials.map((item, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg relative flex flex-col items-center bg-light px-7 py-10 dark:bg-darkmode-light", children: [
                /* @__PURE__ */ jsx("div", { className: "text-text-dark dark:text-white absolute opacity-25", children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    width: "160",
                    height: "160",
                    viewBox: "0 0 160 160",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M160 110V80H140.156H120.312V78C120.312 71.9375 122.938 64 127.031 57.7812C128.969 54.8125 134.812 48.9688 137.781 47.0312C144 42.9375 151.938 40.3125 158 40.3125H160V30.1562V20H157.25C154.281 20 148.75 20.8125 144.844 21.8438C130.25 25.5937 117 35.3125 109.062 48.0937C104.656 55.2187 102 62.3437 100.594 70.9375C100.062 74.2812 100 76.7188 100 107.281V140H130H160L160 110Z",
                          fill: "#D9D9D9"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M60 110L60 80H40.1562H20.3125V78C20.3125 71.9375 22.9375 64 27.0312 57.7812C28.9687 54.8125 34.8125 48.9688 37.7812 47.0312C44 42.9375 51.9375 40.3125 58 40.3125H60V30.1562V20H57.25C54.2812 20 48.75 20.8125 44.8438 21.8438C30.25 25.5937 17 35.3125 9.0625 48.0937C4.65625 55.2187 2 62.3437 0.59375 70.9375C0.0625 74.2812 0 76.7188 0 107.281V140H30H60V110Z",
                          fill: "#D9D9D9"
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  "blockquote",
                  {
                    className: "mt-14 text-center mx-auto md:col-10 lg:col-8 z-10",
                    dangerouslySetInnerHTML: { __html: markdownify(item.content) }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "mt-11 flex flex-col items-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-text-dark dark:text-white mb-4", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      height: 50,
                      width: 50,
                      className: "rounded-full",
                      src: item.avatar,
                      alt: item.name
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      dangerouslySetInnerHTML: { __html: markdownify(item.name) },
                      className: "h5 font-primary font-semibold"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      dangerouslySetInnerHTML: { __html: markdownify(item.designation) },
                      className: "text-text-dark dark:text-white"
                    }
                  )
                ] })
              ] }) }, index)),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `hidden lg:flex justify-between w-full absolute top-1/2 z-10 px-6 text-text-dark ${isHovered ? "opacity-100 transition-opacity duration-300 ease-in-out" : "opacity-0 transition-opacity duration-300 ease-in-out"}`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        ref: prevRef,
                        className: "p-2 lg:p-4 rounded-md bg-body cursor-pointer shadow-sm",
                        children: /* @__PURE__ */ jsx(HiOutlineArrowNarrowLeft, { size: 24 })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        ref: nextRef,
                        className: "p-2 lg:p-4 rounded-md bg-body cursor-pointer shadow-sm",
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
    )
  ] }) }) });
};

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const about = await getEntry("about", "-index");
  const {
    title,
    meta_title,
    description,
    image,
    about_us,
    faq_section_title,
    button,
    faq_section_subtitle,
    faqs,
    testimonials_section_enable,
    testimonials_section_title,
    testimonials,
    staff_section_enable,
    staff
  } = about.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })} ${maybeRenderHead()}<section> <div class="container"> ${about_us?.map((section, index) => renderTemplate`<div${addAttribute(`lg:flex gap-8 mt-14 lg:mt-28`, "class")}> ${index % 2 === 0 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "ImageMod", $$ImageMod, { "class": "rounded-md mx-auto", "src": section?.image, "width": 536, "height": 449, "alt": section?.title })} <div class="mt-10 lg:mt-0"> <h2>${section?.title}</h2> <p class="mt-4 text-text-light dark:text-darkmode-text-light leading-7">${unescapeHTML(markdownify(section?.content))}</p> </div> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": async ($$result3) => renderTemplate` <div> <h2>${section.title}</h2> <p class="mt-4 text-text-light dark:text-darkmode-text-light leading-7">${unescapeHTML(markdownify(section.content))}</p> </div> ${renderComponent($$result3, "ImageMod", $$ImageMod, { "class": "rounded-md mx-auto mt-10 lg:mt-0", "src": section.image, "width": 536, "height": 449, "alt": section.title })} ` })}`} </div>`)} </div> </section> ${testimonials_section_enable && renderTemplate`${renderComponent($$result2, "Testimonials", Testimonials, { "client:load": true, "title": testimonials_section_title, "testimonials": testimonials, "client:component-hydration": "load", "client:component-path": "@/functional-components/Testimonials", "client:component-export": "default" })}`}<section> <div class="container"> <div class="text-center"> <h2>Our Staff</h2> <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14"> ${staff_section_enable && staff.map(
    (s) => renderTemplate`<div class="border border-border rounded-lg"> <div class="py-6 space-y-2"> <h3 class="h4">${s.name}</h3> <p class="text-text-dark dark:text-darkmode-text-light"> ${s.designation} </p> </div> <div class="bg-light rounded-b-xl mx-auto"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": s.avatar, "alt": `Staff-${s.name}`, "width": 290, "height": 250, "class": "mx-auto w-full h-[250px] rounded-b-xl overflow-hidden" })} </div> </div>`
  )} </div> </div> </div> </section> <section class="section"> <div class="container"> <div class="bg-light px-7 py-20 dark:bg-darkmode-light text-center rounded-md"> <h2>Reasons to shop with us</h2> <div class="row justify-center gap-6 mt-14"> <div class="col-6 md:col-5 lg:col-3"> <div class="flex justify-center"> ${renderComponent($$result2, "FaHeadset", FaHeadset, { "size": 48 })} </div> <h3 class="md:h4 mt-6 mb-4">24/7 Friendly Support</h3> <p>Our support team always ready for you to 7 days a week</p> </div> <div class="col-6 md:col-5 lg:col-3"> <div class="flex justify-center"> ${renderComponent($$result2, "FaBoxOpen", FaBoxOpen, { "size": 48 })} </div> <h3 class="md:h4 mt-6 mb-4">7 Days Easy Return</h3> <p>Product any fault within 7 days for an immediately exchange.</p> </div> <div class="col-6 md:col-5 lg:col-3"> <div class="flex justify-center"> ${renderComponent($$result2, "FaRegCheckCircle", FaRegCheckCircle, { "size": 48 })} </div> <h3 class="md:h4 mt-6 mb-4">Quality Guaranteed</h3> <p>
If your product are not perfect, return them for a full refund
</p> </div> </div> </div> </div> </section> <section> <div class="container"> <div class="bg-light px-7 lg:px-32 py-20 dark:bg-darkmode-light mb-14 xl:mb-28 rounded-md"> <div class="row"> <div class="md:col-5 mx-auto space-y-5 mb-10 md:mb-0"> <h1>${unescapeHTML(markdownify(faq_section_title))}</h1> <p class="md:text-lg">${unescapeHTML(markdownify(faq_section_subtitle))}</p> ${button?.enable && renderTemplate`<a class="btn btn-sm md:btn-lg btn-primary font-medium"${addAttribute(button.link, "href")}> ${button.label} </a>`} </div> <div class="md:col-7"> ${renderComponent($$result2, "Accordion", Accordion, { "client:load": true, "faqs": faqs, "client:component-hydration": "load", "client:component-path": "@/functional-components/Accordion", "client:component-export": "default" })} </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/about.astro", void 0);

const $$file = "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
