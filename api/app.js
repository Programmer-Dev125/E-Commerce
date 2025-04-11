import mongoose, { Schema } from "mongoose";
import { createServer } from "node:http";
import { handleFetch } from "./fetch/fetch.js";
import { handleClientLogin } from "./client/sign/login.js";
import { handleClientSign } from "./client/sign/sign.js";
import { handleCart } from "./client/cart/cart.js";
import { handleGetCart } from "./client/cart/get/handleGetCart.js";
import { handleDeleteCart } from "./client/cart/delete/handleDeleteCart.js";
import { handleContact } from "./client/contact/handleContact.js";
import { handleCookie } from "./handleCookie.js";
import { ClientVerify } from "./jwt.js";

export async function handleDb() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URL);
  }
}

const productModel = mongoose.model(
  "toProduct",
  new Schema(
    {
      id: { type: Number, required: true, unique: true },
      name: { type: String, required: true, unique: true },
      price: { type: Number, required: true },
      img: { type: Buffer, required: true },
    },
    { autoIndex: false, autoCreate: false }
  ),
  process.env.PRODUCTS
);

const clientsModel = mongoose.model(
  "clientModal",
  new Schema(
    {
      id: { type: Number, required: true, unique: true },
      name: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      date: { type: Date, required: true },
      cart: { type: Array },
      bought: { type: Array },
    },
    { autoIndex: false, autoCreate: false }
  ),
  process.env.USER
);

const contactModel = mongoose.model(
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

// createServer(async (req, res) => {

// }).listen(5000, "localhost");

export default async function handleServer(req, res) {
  try {
    await handleDb();
  } catch (err) {
    console.log("error connecting to database");
  }

  res.setHeader("access-control-allow-origin", "http://localhost:5173");
  res.setHeader("access-control-allow-methods", "GET, POST, DELETE");
  res.setHeader(
    "access-control-allow-headers",
    "content-type, x-product-id, x-current-user, x-request-path"
  );
  res.setHeader("content-type", "application/json");
  res.setHeader("access-control-allow-credentials", "true");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  const reqPath = req.headers["x-request-path"];
  if (!reqPath) {
    res.writeHead(400);
    return res.end(JSON.stringify({ error: "Request path not included" }));
  }

  switch (true) {
    case req.method === "GET" && reqPath === "/products":
      handleFetch(productModel, res);
      break;
    case req.method === "POST" && reqPath === "/login":
      handleClientLogin(clientsModel, req, res);
      break;
    case req.method === "POST" && reqPath === "/signup":
      handleClientSign(clientsModel, req, res);
      break;
    case req.method === "GET" && reqPath === "/add-cart":
      handleCookie(req, res, ClientVerify).then((val) => {
        if (val) {
          handleCart(clientsModel, productModel, req, res);
        }
      });
      break;
    case req.method === "GET" && reqPath === "/get-cart":
      handleCookie(req, res, ClientVerify).then((val) => {
        if (val) {
          handleGetCart(clientsModel, productModel, req, res);
        }
      });
      break;
    case req.method === "DELETE" && reqPath === "/del-cart":
      handleCookie(req, res, ClientVerify).then((val) => {
        if (val) {
          handleDeleteCart(clientsModel, req, res);
        }
      });
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
