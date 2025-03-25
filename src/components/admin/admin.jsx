import { useEffect, useState } from "react";
import Login from "./login/login";
import AddProduct from "./add-product/addproduct";

export default function Nav() {
  const [admin, setAdmin] = useState("/");

  useEffect(() => {
    const db = indexedDB.open("ecommerceAdmin");
    db.addEventListener("upgradeneeded", (e) => {
      const database = e.target.result;
      database.createObjectStore("admin", { keyPath: "id" });
    });
    db.addEventListener("success", (e) => {
      const database = e.target.result;
      const transaction = database.transaction("admin");
      const store = transaction.objectStore("admin");
      const hasAdmin = store.get(1);
      hasAdmin.addEventListener("success", (ev) => {
        if (!localStorage.getItem("admin") || !e.target.result) {
          console.log("No Admin");
          setAdmin("/");
          return;
        }
        setAdmin("/add-product");
      });
      hasAdmin.addEventListener("error", (ev) => {
        console.log(ev.target.result);
      });
    });
  }, []);

  return (
    <div className="admin-section">
      {admin === "/" && <Login onLogin={(val) => setAdmin(val)} />}
      {admin === "/add-product" && <AddProduct />}
    </div>
  );
}
