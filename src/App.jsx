import ErrorPage from "./components/404Page/error.jsx";
import Nav from "./components/admin/admin.jsx";
import Client from "./components/client/client.jsx";

export default function App() {
  const path = window.location.pathname;
  if (path === "/admin" || path === "/admin/add-product") {
    return (
      <div className="admin-page pt30">
        <div className="w85 mauto">
          <Nav />
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
    return <ErrorPage />;
  }
}
