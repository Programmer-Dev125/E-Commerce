import { handleVerify } from "../jwt.js";
import { handleDb } from "../app.js";

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
    await handleDb();
    const isId = await model.estimatedDocumentCount();
    const { productName, productPrice, img } = JSON.parse(body);
    const toInsert = new model({
      id: isId + 1,
      name: productName,
      price: parseInt(productPrice),
      img: Buffer.from(img),
    });
    const isSaved = await toInsert.save();
    if (!isSaved) {
      res.writeHead(500);
      return res.end(JSON.stringify({ error: "server failed to add product" }));
    }
    res.writeHead(200);
    return res.end(JSON.stringify({ success: "Product Created" }));
  });
}
