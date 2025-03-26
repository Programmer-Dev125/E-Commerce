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
  req.on("end", () => {
    const isObj = JSON.parse(body);
    if (
      !Object.hasOwn(isObj, "name") ||
      !Object.hasOwn(isObj, "price") ||
      !Object.hasOwn(isObj, "img")
    ) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Missing request body" }));
    }
    (async () => {
      const hasNameExists = await model.findOne({ name: isObj.name });
      if (Object.hasOwn(hasNameExists, "name")) {
        res.writeHead(400);
        return res.end(
          JSON.stringify({
            error: "Product Name already exists, give product a unique name",
          })
        );
      }
      const isId = await model.estimatedDocumentCount();
      const toCreate = await model.create([
        {
          id: isId + 1,
          name: isObj.name.trim(),
          price: parseInt(isObj.price),
          img: Buffer.from(isObj.img),
        },
      ]);
      if (!toCreate) {
        res.writeHead(400);
        return res.end(JSON.stringify({ error: "Failed to create product" }));
      }
      res.writeHead(200);
      return res.end(JSON.stringify({ success: "Product Created" }));
    })();
  });
}
