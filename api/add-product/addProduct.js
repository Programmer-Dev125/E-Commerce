import { handleVerify } from "../jwt.js";

export function handleAddProduct(model, req, res) {
  const cookie = req.headers.cookie;
  if (!cookie) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "Request should include credentials" }));
    return;
  }
  const key = cookie.split("=")[1];
  try {
    handleVerify(key);
  } catch (err) {
    res.writeHead(403, {
      "www-authenticate": "Bearer realm='Invalid Authentication Key'",
    });
    return res.end(JSON.stringify({ error: "Invalid Authentication Key" }));
  }
  let body = "";
  req.on("data", (data) => {
    body += data;
  });
  req.on("end", async () => {
    const isId = await model.estimatedDocumentCount();
    const { productName, productPrice, img } = JSON.parse(body);
    const toInsert = await model.create([
      {
        id: isId + 1,
        name: productName,
        price: parseInt(productPrice),
        img: Buffer.from(img),
      },
      { ordered: true },
    ]);
    if (!Object.hasOwn(toInsert, "name")) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Failed to create product" }));
    }
    res.writeHead(200);
    return res.end(JSON.stringify({ success: "Product Created" }));
  });
}
