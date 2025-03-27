export async function handleGet(setCarts, user) {
  const isFetch = await fetch(
    "https://e-commerce-gamma-one-65.vercel.app/api/app",
    {
      headers: {
        "content-type": "application/json",
        "x-current-user": JSON.stringify(user),
        "x-request-path": "/get-cart",
      },
      credentials: "include",
    }
  );
  switch (isFetch.status) {
    case 200:
      {
        let isResp = [];
        isResp = await isFetch.json();
        if (isResp.success) return;
        for (let i = 0; i < isResp.length; i++) {
          isResp[i].img = URL.createObjectURL(
            new Blob([new Uint8Array(isResp[i].img.data)], {
              type: "image/png",
            })
          );
        }
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
