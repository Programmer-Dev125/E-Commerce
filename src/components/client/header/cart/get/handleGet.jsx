export async function handleGet(setCarts, user) {
  const isFetch = await fetch("http://localhost:3000/get-cart", {
    headers: {
      "content-type": "application/json",
      "x-current-user": JSON.stringify(user),
    },
    credentials: "include",
  });
  switch (isFetch.status) {
    case 200:
      {
        const isResp = await isFetch.json();
        if (isResp.success) return;
        setCarts(isResp);
      }
      break;
    case 400:
      {
        const isResp = await isFetch.json();
        console.log(isResp);
      }
      break;
    default:
      console.log("Invalid Method");
      break;
  }
}
