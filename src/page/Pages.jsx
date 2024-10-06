import React from "react";
import { ShopAppBar } from "./appBar/ShopAppBar";
import Home from "./home/Home";
import { Product } from "./products/Product";
export const Page = () => {
  return (
    <div className="page-wrapper">
      <ShopAppBar />
      <Home />
      <Product />
    </div>
  );
};
