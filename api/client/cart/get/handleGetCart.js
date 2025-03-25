import { ClientVerify } from "../../../jwt.js";
export async function handleGetCart(clmodel, prmodel, req, res) {
  const cookie = req.headers.cookie;
  if (!cookie) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "cookie header not represent" }));
  }
  const token = cookie.split("=")[1];
  try {
    const verify = ClientVerify(token);
  } catch (err) {
    res.writeHead(400, {
      "www-authenticate": "Bearer realm='Invalid Authentication key'",
    });
    return res.end(JSON.stringify({ error: "Invalid Authentication Key" }));
  }
  const user = JSON.parse(req.headers["x-current-user"]);
  if (!user) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Invalid user" }));
  }
  const hasUser = await clmodel.findOne({ name: user.name, email: user.email });
  if (!hasUser) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Invalid user" }));
  }
  const products = await prmodel.find(
    {
      name: { $in: hasUser.cart },
    },
    { _id: 0, __v: 0 }
  );
  if (products.length === 0) {
    res.writeHead(200);
    return res.end(JSON.stringify({ success: "No Product inside the cart" }));
  }
  res.writeHead(200);
  res.end(JSON.stringify(products));
}
