import { useEffect, useState } from "react";
import ErrorPage from "./components/404Page/error.jsx";
import Nav from "./components/admin/admin.jsx";
import Client from "./components/client/client.jsx";

export default function App() {
  const [isError, setIsError] = useState(false);
  const path = window.location.pathname;
  if (
    path === "/admin" ||
    path === "/admin/products" ||
    path === "/admin/users" ||
    path === "/admin/orders"
  ) {
    return (
      <div className="admin-page pt30">
        <div className="w85 mauto">
          <Nav isError={isError} />
        </div>
      </div>
    );
  } else if (path === "/" || path === "/products") {
    return (
      <div className="client-page">
        <Client />
      </div>
    );
  } else {
    useEffect(() => {
      setIsError(true);
    });
    return <ErrorPage />;
  }
}
