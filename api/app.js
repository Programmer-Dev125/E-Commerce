import mongoose, { Schema } from "mongoose";
import { handleLogin } from "./login/login.js";
import { handleAddProduct } from "./add-product/addProduct.js";
import { handleFetch } from "./fetch/fetch.js";
import { createReadStream, existsSync } from "node:fs";
import { handleClientLogin } from "./client/sign/login.js";
import { handleClientSign } from "./client/sign/sign.js";
import { handleCart } from "./client/cart/cart.js";
import { handleGetCart } from "./client/cart/get/handleGetCart.js";
import { handleDeleteCart } from "./client/cart/delete/handleDeleteCart.js";
import { handleContact } from "./client/contact/handleContact.js";

let conn = null;
let model, productModel, clientsModel, contactModel;

async function connectDB() {
  if (conn) return conn; // Reuse existing connection

  conn = await mongoose.createConnection(process.env.MONGO_URL).asPromise();
  console.log("MongoDB Connected");

  model = conn.model(
    "isModal",
    new Schema(
      { id: Number, name: String, password: String },
      { autoIndex: false, autoCreate: false }
    ),
    process.env.USER
  );

  productModel = conn.model(
    "productModel",
    new Schema(
      {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true, unique: true },
        price: { type: Number },
        img: { type: Buffer, required: true },
      },
      { autoIndex: false, autoCreate: false }
    ),
    process.env.PRODUCTS
  );

  clientsModel = conn.model(
    "clientModal",
    new Schema(
      {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        date: { type: String, required: true },
        cart: { type: Array },
        bought: { type: Array },
      },
      { autoIndex: false, autoCreate: false }
    ),
    process.env.USER
  );

  contactModel = conn.model(
    "contactModel",
    new Schema(
      {
        id: { type: Number, required: true, unique: true },
        email: { type: String, required: true, unique: true },
      },
      { autoIndex: false, autoCreate: false }
    ),
    process.env.CONTACT
  );

  return conn;
}

export default async function handleServer(req, res) {
  await connectDB();

  res.setHeader(
    "access-control-allow-origin",
    "https://e-commerce-gamma-one-65.vercel.app"
  );
  res.setHeader("access-control-allow-methods", "GET, POST, DELETE");
  res.setHeader(
    "access-control-allow-headers",
    "content-type, x-product-id, x-current-user, x-request-path"
  );
  res.setHeader("content-type", "application/json");
  res.setHeader("access-control-allow-credentials", "true");

  if (req.url.startsWith("/images")) {
    const path = `.${req.url}`;
    if (existsSync(path)) {
      res.writeHead(200, { "content-type": "image/png" });
      const read = createReadStream(path).pipe(res);
      read.on("end", () => {
        res.end();
      });
      return;
    }
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Image doesn't exists" }));
  }

  const reqPath = req.headers["x-request-path"];
  if (!reqPath) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Request path not included" }));
  }

  switch (true) {
    case req.method === "OPTIONS":
      res.writeHead(200);
      res.end();
      break;
    case req.method === "GET" && reqPath === "/products":
      handleFetch(productModel, res);
      break;
    case req.method === "POST" && reqPath === "/login":
      handleLogin(model, req, res);
      break;
    case req.method === "POST" && reqPath === "/addProduct":
      handleAddProduct(productModel, req, res);
      break;
    case req.method === "POST" && reqPath === "/client-login":
      handleClientLogin(clientsModal, req, res);
      break;
    case req.method === "POST" && reqPath === "/client-signup":
      handleClientSign(clientsModal, req, res);
      break;
    case req.method === "GET" && reqPath === "/client-cart":
      handleCart(clientsModal, productModel, req, res);
      break;
    case req.method === "GET" && reqPath === "/get-cart":
      handleGetCart(clientsModal, productModel, req, res);
      break;
    case req.method === "DELETE" && reqPath === "/del-cart":
      handleDeleteCart(clientsModal, req, res);
      break;
    case req.method === "POST" && reqPath === "/contact":
      handleContact(contactModel, req, res);
      break;
    default:
      res.writeHead(405);
      res.end(JSON.stringify({ error: "Invalid Request Method or pathname" }));
      break;
  }
}
