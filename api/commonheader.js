export function handleHeader(res) {
  res.setHeader(
    "access-control-allow-origin",
    "https://e-commerce-gamma-one-65.vercel.app"
  );
  res.setHeader("access-control-allow-methods", "GET, POST, DELETE");
  res.setHeader(
    "access-control-allow-headers",
    "content-type, x-product-id, x-current-user"
  );
  res.setHeader("content-type", "application/json");
  res.setHeader("access-control-allow-credentials", "true");
}
