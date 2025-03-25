import { ClientVerify } from "../../jwt.js";

export async function handleCart(model, productModel, req, res) {
  const cookie = req.headers.cookie;
  if (!cookie) {
    res.writeHead(401, {
      "www-authenticate":
        "Bearer realm='Missing Authentication token';charset='utf8'",
    });
    return res.end(JSON.stringify({ error: "Credentials missing" }));
  }
  const token = cookie.split("=")[1];
  const verify = ClientVerify(token);
  if (!Object.hasOwn(verify, "client")) {
    res.writeHead(403, {
      "www-authenticate":
        "Bearer realm='Invalid Authentication token';charset='utf8'",
    });
    return res.end(JSON.stringify({ error: "Invalid Authentication Token" }));
  }
  const productId = req.headers["x-product-id"];
  const currUser = JSON.parse(req.headers["x-current-user"]);
  if (!productId || !currUser || !currUser.name || !currUser.email) {
    res.writeHead(400);
    return res.end(
      JSON.stringify({ error: "Missing Product Name or Username in request" })
    );
  }
  const hasProductExists = await productModel.findOne({
    id: productId,
  });
  const hasClientExists = await model.findOne({
    name: currUser.name,
    email: currUser.email,
  });
  if (!hasProductExists) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "product doesn't exists" }));
  }
  if (!hasClientExists) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "user doesn't exists" }));
  }
  console.log(hasProductExists, hasClientExists);
  for (let i = 0; i < hasClientExists.cart.length; i++) {
    if (hasClientExists.cart[i] === hasProductExists.name) {
      res.writeHead(400);
      return res.end(
        JSON.stringify({ error: "Products is already in the cart" })
      );
    }
  }

  const addCart = await model.findOneAndUpdate(
    { name: currUser.name, email: currUser.email },
    { $push: { cart: hasProductExists.name } },
    { new: true }
  );
  if (!addCart) {
    res.writeHead(500);
    return res.end(JSON.stringify({ error: "Product Failed to add to cart" }));
  }
  res.writeHead(200);
  return res.end(JSON.stringify({ success: "Product Added to cart" }));
}
