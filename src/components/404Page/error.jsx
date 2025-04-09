import { Link } from "react-router";
export default function ErrorPage() {
  return (
    <section className="error-page col">
      <h2>Return to Home Page</h2>
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </section>
  );
}
