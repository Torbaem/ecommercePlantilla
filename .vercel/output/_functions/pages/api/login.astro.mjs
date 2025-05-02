import { g as getCustomerAccessToken, a as getUserDetails } from '../../chunks/index_BPCM2MGm.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return new Response(
        JSON.stringify({
          errors: [{ message: "Email and password are required." }]
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { token, customerLoginErrors } = await getCustomerAccessToken({
      email,
      password
    });
    if (customerLoginErrors?.length > 0) {
      return new Response(JSON.stringify({ errors: customerLoginErrors }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { customer } = await getUserDetails(token);
    const response = new Response(JSON.stringify({ ...customer, token }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
    response.headers.set("Set-Cookie", `token=${token}; Path=/; SameSite=Lax`);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(
      JSON.stringify({
        errors: [
          {
            code: "INTERNAL_ERROR",
            message: error.message || "An unknown error occurred"
          }
        ]
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
