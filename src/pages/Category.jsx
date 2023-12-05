import React from "react";

import { ItemListContainer, LoaderComponent } from "../components";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { categoryId } = useParams();

  const { products, loading, error } = useProductsByCategory(categoryId);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer products={products} />
  );
};
