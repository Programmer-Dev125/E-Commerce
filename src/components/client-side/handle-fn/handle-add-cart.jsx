export async function handleAddCart(id, { name, email }) {
  if (!id) return;
  if (!name || !email) {
    return { message: { error: "Logged-in first" } };
  }
  const isFetch = await fetch(
    "https://e-commerce-gamma-one-65.vercel.app/api/app",
    {
      headers: {
        "x-request-path": "/add-cart",
        "x-product-id": id,
        "x-current-user": JSON.stringify({ name: name, email: email }),
      },
      credentials: "include",
    }
  );
  const isResp = await isFetch.json();
  switch (isFetch.status) {
    case 200:
      return { carts: isResp, message: "Added to cart" };
    case 400:
      return { message: isResp };
    case 500:
      return { message: isResp };
    default:
      return { message: "Invalid Request" };
  }
}
