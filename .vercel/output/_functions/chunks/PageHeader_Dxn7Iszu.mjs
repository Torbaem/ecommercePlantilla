import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, s as spreadAttributes, r as renderComponent } from './astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { h as humanize } from './Base_CG9zL_kJ.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://astrofront.vercel.app/");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { className } = Astro2.props;
  const paths = Astro2.url.pathname.split("/").filter((x) => x);
  let parts = [
    {
      label: "Home",
      href: "/",
      "aria-label": Astro2.url.pathname === "/" ? "page" : void 0
    }
  ];
  paths.forEach((label, i) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    label !== "page" && parts.push({
      label: humanize(label.replace(".html", "").replace(/[-_]/g, " ")) || "",
      href,
      "aria-label": Astro2.url.pathname === href ? "page" : void 0
    });
  });
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(className, "class")}> <ol class="inline-flex" role="list"> ${parts.map(({ label, ...attrs }, index) => renderTemplate`<li class="mx-1 capitalize" role="listitem"> ${index > 0 && renderTemplate`<span class="inlin-block mr-1">/</span>`} ${index !== parts.length - 1 ? renderTemplate`<a class="text-primary dark:text-darkmode-primary"${spreadAttributes(attrs)}> ${label} </a>` : renderTemplate`<span class="text-text-light dark:text-darkmode-text-light"> ${label} </span>`} </li>`)} </ol> </nav>`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/layouts/components/Breadcrumbs.astro", void 0);

const $$Astro = createAstro("https://astrofront.vercel.app/");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="text-center"> <div class="bg-gradient-to-b from-body to-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-light"> <h1>${humanize(title)}</h1> ${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "className": "mt-6" })} </div> </div> </section>`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/layouts/partials/PageHeader.astro", void 0);

export { $$PageHeader as $ };
