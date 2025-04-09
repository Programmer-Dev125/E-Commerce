import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchModel";
import cartModelReducer from "./cartModel";
import productsReducer from "./product-slice";
import cartReducer from "./cart-slice";
import menuReducer from "./menu-slice";
import bioReducer from "./bio-slice";
import spinReducer from "./spinner-slice";
import responseReducer from "./response-slice";

export const store = configureStore({
  reducer: {
    searchModel: searchReducer,
    cartModel: cartModelReducer,
    products: productsReducer,
    carts: cartReducer,
    menu: menuReducer,
    bio: bioReducer,
    spin: spinReducer,
    response: responseReducer,
  },
});
