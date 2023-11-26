import { useEffect, useState } from "react";
import { getAllProducts } from "../services";

export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllProducts(limit);
        setProducts(res.data.products);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const delay = 3000;
    const timeOut = setTimeout(fetchData, delay);

    return () => clearTimeout(timeOut);
  }, [limit]);

  return { products, loading, error };
};
