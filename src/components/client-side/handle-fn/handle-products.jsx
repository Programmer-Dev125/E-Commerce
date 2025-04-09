export async function handleProducts() {
  const isFetch = await fetch(
    "https://e-commerce-gamma-one-65.vercel.app/api/app",
    {
      headers: {
        "content-type": "application/json",
        "x-request-path": "/products",
      },
    }
  );
  let isResp = await isFetch.json();
  switch (isFetch.status) {
    case 200:
      for (let i = 0; i < isResp.length; i++) {
        isResp[i].img = URL.createObjectURL(
          new Blob([new Uint8Array(isResp[i].img.data)], { type: "images/png" })
        );
        isResp[i].price += "$";
      }
      return isResp;
    case 400:
      return alert("Failed to fetch products");
    case 500:
      return alert("Server failed to fetch products");
    default:
      return alert("Invalid Request");
  }
}
