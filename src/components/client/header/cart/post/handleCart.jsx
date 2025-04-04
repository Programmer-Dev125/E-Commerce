export async function handleCart(id, setReceived, setResponse, update) {
  const db = indexedDB.open("client-db");
  db.addEventListener("success", (e) => {
    const database = e.target.result;
    const isResult = database
      .transaction("client-user")
      .objectStore("client-user")
      .get(1);
    isResult.addEventListener("success", async (ev) => {
      const user = ev.target.result;
      if (!user) {
        setReceived(true);
        setResponse({
          danger: true,
          message: "Sign in first",
        });
        setTimeout(() => setReceived(false), 2000);
        return;
      }

      const isFetch = await fetch(
        "https://e-commerce-gamma-one-65.vercel.app/api/app",
        {
          headers: {
            "content-type": "application/json",
            "x-product-id": id,
            "x-current-user": JSON.stringify(user),
            "x-request-path": "/client-cart",
          },
          credentials: "include",
        }
      );
      const isResp = await isFetch.json();
      switch (isFetch.status) {
        case 200:
          setReceived(true);
          update((prev) => (prev = !prev));
          setResponse({
            danger: false,
            message: isResp.success,
          });
          setTimeout(() => {
            setReceived(false);
          }, 1000);
          break;
        case 400:
          setReceived(true);
          setResponse({
            danger: true,
            message: isResp.error,
          });
          setTimeout(() => {
            setReceived(false);
          }, 1000);
          break;
        case 500:
          setReceived(true);
          setResponse({
            danger: true,
            message: isResp.error,
          });
          setTimeout(() => {
            setReceived(false);
          }, 1000);
          break;
        default:
          setReceived(true);
          setResponse({
            danger: true,
            message: "Invalid Request",
          });
          setTimeout(() => {
            setReceived(false);
          }, 1000);
          break;
      }
    });
  });
}
