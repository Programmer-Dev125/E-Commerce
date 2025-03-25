export function handleDb(user) {
  const db = indexedDB.open("ecommerceAdmin");

  db.addEventListener("success", (e) => {
    const database = e.target.result;
    const transaction = database.transaction("admin", "readwrite");
    const store = transaction.objectStore("admin");
    store.add({ id: 1, admin: true, name: user });
  });

  db.addEventListener("error", (e) => {
    console.log(e);
  });
}
