import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, b as addAttribute, d as renderTemplate } from './astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { m as markdownify, $ as $$ImageMod } from './Base_CG9zL_kJ.mjs';
import { g as getEntry } from './_astro_content_DB8juhRg.mjs';

const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const call_to_action = await getEntry(
    "ctaSection",
    "call-to-action"
  );
  const { data } = call_to_action;
  return renderTemplate`${data.enable && renderTemplate`${maybeRenderHead()}<section class="section"><div class="container"><div class="rounded-xl bg-light px-6 py-8 md:py-16 dark:bg-darkmode-light"><div class="row items-center"><div class="mb-10 md:mb-0 lg:col-6 xl:col-6 mx-auto text-center order-2 lg:order-0"><p class="md:text-lg text-text-dark dark:text-darkmode-text-dark font-bold">${unescapeHTML(markdownify(data.sub_title))}</p><h2 class="my-2 h1">${unescapeHTML(markdownify(data.title))}</h2><p class="mb-6 md:text-lg">${unescapeHTML(markdownify(data.description))}</p>${data.button.enable && renderTemplate`<a class="btn btn-sm md:btn-lg btn-primary font-medium"${addAttribute(data.button.link, "href")}>${data.button.label}</a>`}</div><div class="mx-auto lg:col-5 mb-6 lg:mb-0">${renderComponent($$result, "ImageMod", $$ImageMod, { "src": data.image, "width": 543, "height": 390, "alt": "cta-image", "class": "mx-auto" })}</div></div></div></div></section>`}`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/layouts/partials/CallToAction.astro", void 0);

export { $$CallToAction as $ };
