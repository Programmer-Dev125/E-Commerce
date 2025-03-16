import { createContext } from "react";

const userContext = createContext({
  user: "",
  email: "",
});

const productContext = createContext({
  product: "",
  price: "",
});
