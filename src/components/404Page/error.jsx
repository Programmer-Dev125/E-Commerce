export default function ErrorPage() {
  function handleLocation() {
    window.location.pathname = "/";
  }
  return (
    <div className="error-page">
      <div className="error-page-content">
        <h2>Page Not Found</h2>
        <button onClick={handleLocation}>Go back to the Home</button>
      </div>
    </div>
  );
}
