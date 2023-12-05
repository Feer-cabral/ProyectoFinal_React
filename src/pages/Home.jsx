import React from "react";

import { LoaderComponent, ItemListContainer } from "../components";
import { useAllProducts } from "../hooks/useProducts";

export const Home = () => {
  const { products, loading, error } = useAllProducts("products");

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};
