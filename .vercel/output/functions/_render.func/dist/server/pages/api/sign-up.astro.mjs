import { c as createCustomer, g as getCustomerAccessToken } from '../../chunks/index_BPCM2MGm.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const firstName = formData.get("firstName")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    if (!email || !password || !firstName) {
      return new Response("Email and password are required", { status: 400 });
    }
    const { customer, customerCreateErrors } = await createCustomer({
      email,
      password,
      firstName
    });
    if (customerCreateErrors && customerCreateErrors.length > 0) {
      return new Response(JSON.stringify({ errors: customerCreateErrors }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { token } = await getCustomerAccessToken({ email, password });
    const response = new Response(JSON.stringify({ customer, token }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
    response.headers.set("Set-Cookie", `token=${token}; Path=/; SameSite=Lax`);
    return response;
  } catch (error) {
    console.error("Error in API:", error);
    return new Response(
      JSON.stringify({
        errors: [
          {
            code: "INTERNAL_ERROR",
            message: error.message || "An unknown error occurred"
          }
        ]
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
