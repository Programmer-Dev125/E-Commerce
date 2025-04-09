export async function handleGetCart({ name, email }) {
  const isFetch = await fetch(
    "https://e-commerce-gamma-one-65.vercel.app/api/app",
    {
      headers: {
        "content-type": "application/json",
        "x-request-path": "/get-cart",
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
      return console.log(isResp);
    case 500:
      return console.log(isResp);
    default:
      return console.log(isResp);
  }
}
