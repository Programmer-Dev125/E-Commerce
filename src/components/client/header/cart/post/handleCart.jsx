export async function handleCart(id, setReceived, setResponse) {
  const db = indexedDB.open("client-db");
  db.addEventListener("success", (e) => {
    const database = e.target.result;
    const isResult = database
      .transaction("client-user")
      .objectStore("client-user")
      .get(1);
    isResult.addEventListener("success", async (ev) => {
      const user = ev.target.result;
      if (!Object.hasOwn(user, "signin") || !Object.hasOwn(user, "email")) {
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
      switch (isFetch.status) {
        case 200:
          {
            const isResp = await isFetch.json();
            setReceived(true);
            setResponse({
              danger: false,
              message: isResp.success,
            });
            setTimeout(() => {
              setReceived(false);
            }, 800);
          }
          break;
        case 400:
          {
            const isResp = await isFetch.json();
            setReceived(true);
            setResponse({
              danger: true,
              message: isResp.error,
            });
            setTimeout(() => {
              setReceived(false);
            }, 800);
          }
          break;
        case 500:
          {
            const isResp = await isFetch.json();
            setReceived(true);
            setResponse({
              danger: true,
              message: isResp.error,
            });
            setTimeout(() => {
              setReceived(false);
            }, 800);
          }
          break;
        default:
          setReceived(true);
          setResponse({
            danger: true,
            message: "Invalid Request",
          });
          setTimeout(() => {
            setReceived(false);
          }, 800);
          break;
      }
    });
  });
}
