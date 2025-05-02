import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { a as $$Base } from '../chunks/Base_CG9zL_kJ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm text-center"> <div class="container"> <div class="row justify-center"> <div class="sm:col-10 md:col-8 lg:col-6"> <span class="text-[8rem] block font-bold text-text-dark dark:text-darkmode-text-dark">
404
</span> <h1 class="h2 mb-4">Page not found</h1> <div class="content"> <p>
The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
</p> </div> <a href="/" class="btn btn-primary mt-8"> Back to home </a> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/404.astro", void 0);

const $$file = "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
