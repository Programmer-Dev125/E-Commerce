import { Form } from "multiparty";
import { readFileSync, writeFileSync } from "node:fs";

export function handleForm(model, req, res) {
  const form = new Form();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: "Failed to parse form" }));
      return;
    }
    res.writeHead(200);
    return res.end(JSON.stringify({data: [fields, files]}));
  //   const { productName, productPrice } = fields;
  //   const { productFile } = files;
  //   if (!productName[0] || !productPrice[0] || !productFile[0]) {
  //     res.writeHead(400);
  //     res.end(JSON.stringify({ error: "Missing Request Body" }));
  //     return;
  //   }
  //   const isName = /^[0-9A-Za-z ]*$/.test(productName[0]);
  //   const isPrice = /^[0-9]*$/.test(parseInt(productPrice[0]));
  //   if (!isName || !isPrice) {
  //     res.writeHead(400);
  //     res.end(JSON.stringify({ error: "Invalid Request Body" }));
  //     return;
  //   }
  //   if (!productFile[0].headers["content-type"].startsWith("image/")) {
  //     res.writeHead(400);
  //     res.end(JSON.stringify({ error: "Invalid Image" }));
  //     return;
  //   }

  //   const hasProductName = await model.exists({
  //     name: productName[0],
  //   });
  //   if (hasProductName !== null) {
  //     res.writeHead(400);
  //     res.end(JSON.stringify({ error: "Product Name Already exists" }));
  //     return;
  //   }

  //   const data = readFileSync(productFile[0].path);
  //   const imageName = `/${productName[0] + "-img.png"}`;
  //   let isFile = "";
  //   for (let i = 0; i < imageName.length; i++) {
  //     if (imageName[i] === " ") continue;
  //     isFile += imageName[i];
  //   }
  //   const writeFile = writeFileSync(`./images${isFile}`, data, "binary");
  //   if (writeFile !== undefined) {
  //     res.writeHead(400);
  //     res.end(JSON.stringify({ error: "Failed to create image" }));
  //     return;
  //   }
  //   const isId = await model.estimatedDocumentCount();
  //   const toInsert = await model.create([
  //     {
  //       id: isId + 1,
  //       name: productName[0].trim(),
  //       price: parseInt(productPrice[0]),
  //       img: `/images${isFile}`,
  //       date: `${new Date().toDateString()}`,
  //     },
  //   ]);
  //   if (!toInsert) {
  //     res.writeHead(500);
  //     res.end(JSON.stringify({ error: "Failed to submit data" }));
  //     return;
  //   }
  //   res.writeHead(200);
  //   res.end(JSON.stringify({ success: "Product created" }));
  // });
}
