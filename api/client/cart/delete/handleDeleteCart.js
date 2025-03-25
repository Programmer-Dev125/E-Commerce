import { ClientVerify } from "../../../jwt.js";
export async function handleDeleteCart(clmodel, req, res) {
  const cookie = req.headers.cookie;
  if (!cookie) {
    res.writeHead(401, {
      "www-authenticate": "Bearer realm='Missing Authentication key'",
    });
    return res.end(JSON.stringify({ error: "Cookie not available" }));
  }
  const token = cookie.split("=")[1];
  try {
    ClientVerify(token);
  } catch (err) {
    res.writeHead(403, {
      "www-authenticate": "Bearer realm='Invalid Authentication key'",
    });
    return res.end(JSON.stringify({ error: "Invalid Authentication Key" }));
  }
  const productName = req.headers["x-product-id"];
  const currUser = JSON.parse(req.headers["x-current-user"]);
  if (!productName || !currUser) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Missing user and product name" }));
  }
  const hasUser = await clmodel.find({
    name: currUser.name,
    email: currUser.email,
  });
  if (hasUser.length === 0) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Invalid user" }));
  }
  const delCartItem = await clmodel.findOneAndUpdate(
    {
      name: currUser.name,
      email: currUser.email,
    },
    {
      $pull: { cart: productName },
    }
  );
  if (!delCartItem) {
    res.writeHead(500);
    return res.end(JSON.stringify({ error: "Failed to delete cart item" }));
  }
  res.writeHead(200);
  return res.end(JSON.stringify({ success: "Cart item deleted" }));
}
