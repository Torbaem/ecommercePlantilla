import { a as createComponent, r as renderComponent, d as renderTemplate } from '../chunks/astro/server_BpBavlwa.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { a as $$Base } from '../chunks/Base_CG9zL_kJ.mjs';
export { renderers } from '../renderers.mjs';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const form = new FormData();
      form.append("firstName", formData.firstName || "");
      form.append("email", formData.email);
      form.append("password", formData.password);
      const response = await fetch("/api/sign-up", {
        method: "POST",
        body: form
        // Use FormData
      });
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const responseData = await response.json();
        if (response.ok) {
          setErrorMessages([]);
          localStorage.setItem("user", JSON.stringify(responseData));
          window.location.href = "/";
        } else {
          const errors = responseData.errors || [
            { message: "Sign-up failed." }
          ];
          setErrorMessages(errors.map((error) => error.message));
        }
      } else {
        setErrorMessages(["Invalid response from the server."]);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setErrorMessages(["An error occurred. Please try again."]);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "col-11 sm:col-9 md:col-7 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "max-md:h1 md:mb-2", children: "Create an account" }),
      /* @__PURE__ */ jsx("p", { className: "md:text-lg", children: "Create an account and start using..." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSignUp, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            name: "firstName",
            className: "form-input",
            placeholder: "Enter your name",
            type: "text",
            onChange: handleChange,
            value: formData.firstName,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "form-label mt-8", children: "Email Address" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            name: "email",
            className: "form-input",
            placeholder: "Type your email",
            type: "email",
            onChange: handleChange,
            value: formData.email,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "form-label mt-8", children: "Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            name: "password",
            className: "form-input",
            placeholder: "********",
            type: "password",
            onChange: handleChange,
            value: formData.password,
            required: true
          }
        )
      ] }),
      errorMessages.length > 0 && errorMessages.map((error, index) => /* @__PURE__ */ jsxs("p", { className: "font-medium text-red-500 mt-2", children: [
        "*",
        error
      ] }, index)),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "btn btn-primary md:text-lg md:font-medium w-full mt-10",
          children: loading ? /* @__PURE__ */ jsx(BiLoaderAlt, { className: "animate-spin mx-auto", size: 26 }) : "Sign Up"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 text-sm md:text-base mt-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-text-light dark:text-darkmode-text-light", children: "I have read and agree to the" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "underline font-medium text-text-dark dark:text-darkmode-text-dark",
          href: "/terms-services",
          children: "Terms & Conditions"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2 text-sm md:text-base mt-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-text-light dark:text-darkmode-text-light", children: "Have an account?" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "underline font-medium text-text-dark dark:text-darkmode-text-dark",
          href: "/login",
          children: "Login"
        }
      )
    ] })
  ] }) }) }) });
};

const $$SignUp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Sign Up" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignUpForm", SignUpForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/functional-components/SignUpForm", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/sign-up.astro", void 0);

const $$file = "C:/Users/Torbaem/Documents/vscode/ProyectosWeb/astrofront-astro-main/src/pages/sign-up.astro";
const $$url = "/sign-up";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SignUp,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
