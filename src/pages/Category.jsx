import React from "react";

import { ItemListContainer } from "../components";
import { useParams } from "react-router-dom";
import { useProductByCategory } from "../hooks/useProducts";

export const Category = () => {
  const { categoryId } = useParams();
  const { products } = useProductByCategory("products", categoryId, "category");

  return <ItemListContainer products={products} />;
};
