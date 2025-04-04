export async function handleDelete(name, update, setReceived, setResponse) {
  const db = indexedDB.open("client-db");
  db.addEventListener("success", (e) => {
    const database = e.target.result;
    const isGet = database
      .transaction("client-user")
      .objectStore("client-user")
      .get(1);
    isGet.addEventListener("success", async (ev) => {
      const user = ev.target.result;
      const isFetch = await fetch(
        "https://e-commerce-gamma-one-65.vercel.app/api/app",
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            "x-product-id": name,
            "x-current-user": JSON.stringify(user),
            "x-request-path": "/del-cart",
          },
          credentials: "include",
        }
      );
      switch (isFetch.status) {
        case 200:
          {
            const isResp = await isFetch.json();
            update((prev) => (prev = !prev));
            setReceived(true);
            setResponse({
              danger: false,
              message: isResp.success,
            });
            setTimeout(() => {
              setReceived(false);
            }, 1000);
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
