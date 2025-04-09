export async function handleRemoveCart(id, productName, { name, email }) {
  if (!id) return;
  if (!name || !email) {
    return { message: { error: "Logged in first" } };
  }
  const isFetch = await fetch(
    "https://e-commerce-gamma-one-65.vercel.app/api/app",
    {
      method: "DELETE",
      headers: {
        "x-request-path": "/del-cart",
        "x-product-id": productName,
        "x-current-user": JSON.stringify({ name: name, email: email }),
      },
      credentials: "include",
    }
  );
  const isResp = await isFetch.json();
  switch (isFetch.status) {
    case 200:
      return isResp;
    case 400:
      return isResp;
    case 500:
      return { error: "Server error" };
    default:
      return { error: "Invalid Request" };
  }
}
