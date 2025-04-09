export function handleInsertDb(name, email) {
  const db = indexedDB.open("user");
  db.addEventListener("success", (e) => {
    const database = e.target.result;
    database.transaction("user", "readwrite").objectStore("user").add({
      id: 1,
      name: name,
      email: email,
    });
  });
}
