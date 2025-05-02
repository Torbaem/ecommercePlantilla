import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { a as $$Base, m as markdownify, c as config } from '../chunks/Base_CG9zL_kJ.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_Dxn7Iszu.mjs';
import { g as getEntry } from '../chunks/_astro_content_DB8juhRg.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const contact = await getEntry(
    "contact",
    "-index"
  );
  const { contact_form_action } = config.params;
  const { title, meta_title, description, image, contact_meta } = contact.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })} ${maybeRenderHead()}<section class="pt-12 xl:pt-24"> <div class="container"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${contact_meta && contact_meta?.map((contact2) => renderTemplate`<div class="p-10 bg-light dark:bg-darkmode-light rounded-md text-center"> <p class="mb-6 h3 font-medium text-text-dark dark:text-darkmode-text-dark">${unescapeHTML(markdownify(contact2.name))}</p> <p>${unescapeHTML(markdownify(contact2.contact))}</p> </div>`)} </div> </div> </section> <section class="section"> <div class="container"> <div class="mx-auto lg:col-10"> <h2 class="mb-14 text-center">We would love to hear from you!</h2> <form class="border border-border dark:border-darkmode-border rounded-md p-10"${addAttribute(contact_form_action, "action")} method="POST"> <div class="mb-6 md:grid grid-cols-2 gap-x-8 max-md:space-y-6"> <div> <label for="name" class="form-label">
First Name <span class="text-red-500">*</span> </label> <input id="name" name="name" class="form-input" placeholder="John" type="text" required> </div> <div> <label for="name" class="form-label"> Last Name </label> <input id="name" name="name" class="form-input" placeholder="Doe" type="text"> </div> </div> <div class="mb-6 md:grid grid-cols-2 gap-x-8 max-md:space-y-6"> <div> <label for="email" class="form-label">
Email Address <span class="text-red-500">*</span> </label> <input id="email" name="email" class="form-input" placeholder="john.doe@email.com" type="email" required> </div> <div> <label for="name" class="form-label">
Subject <span class="text-red-500">*</span> </label> <input id="name" name="name" class="form-input" placeholder="Enquiry About" type="text" required> </div> </div> <div class="mb-6"> <label for="message" class="form-label">
Message <span class="text-red-500">*</span> </label> <textarea id="message" name="message" class="form-input" placeholder="Type your message..."${addAttribute(8, "rows")} required></textarea> </div> <div class="flex justify-end"> <button type="submit" class="btn btn-primary">
Send Message
</button> </div> </form> </div> </div> </section> ` })}`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
