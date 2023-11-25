import { useEffect, useState } from "react";
import { getAllProducts } from "../services";

export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllProducts(limit)
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);
  return { products, loading, error };
};
