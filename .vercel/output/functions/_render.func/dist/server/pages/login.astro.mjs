import { a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as renderScript } from '../chunks/astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { a as $$Base } from '../chunks/Base_CG9zL_kJ.mjs';
import { BiLoaderAlt } from 'react-icons/bi';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Login" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row"> <div class="col-11 sm:col-9 md:col-7 mx-auto"> <div class="mb-14 text-center"> <h2 class="max-md:h1 md:mb-2">Login</h2> <p class="md:text-lg">
Please fill your email and password to login
</p> </div> <form id="loginForm"> <div> <label class="form-label">Email Address</label> <input class="form-input" placeholder="Type your email" type="email" name="email" required> </div> <div> <label class="form-label mt-8">Password</label> <input class="form-input" placeholder="********" type="password" name="password" required> </div> <div id="errorMessages" class="mt-2"></div> <button type="submit" class="btn btn-primary md:text-lg md:font-medium w-full mt-10"> <span id="buttonText">Log In</span> ${renderComponent($$result2, "BiLoaderAlt", BiLoaderAlt, { "className": "animate-spin mx-auto hidden", "size": 26, "id": "loader" })} </button> </form> <div class="flex gap-x-2 text-sm md:text-base mt-4"> <p class="text-text-light dark:text-darkmode-text-light">
Don't have an account?
</p> <a class="underline font-medium text-text-dark dark:text-darkmode-text-dark" href="/sign-up">
Register
</a> </div> </div> </div> </div> </section> ${renderScript($$result2, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/login.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/login.astro", void 0);

const $$file = "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
