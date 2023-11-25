import React from "react";

import { ItemListContainer } from "../components/ItemListContainer";
import { LoaderComponent } from "../components/LoaderComponent";
import { useAllProducts } from "../hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useAllProducts(15);

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

export default Home;
