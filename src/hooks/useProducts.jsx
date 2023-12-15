import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

// Llamar a todos los productos con el limite establecido
export const useAllProducts = (collectionName) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

// Llamar a un unico producto a traves del id
export const useSingleProduct = (collectionName, id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const singleProduct = doc(db, collectionName, id);

    getDoc(singleProduct)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading, error };
};

// Filtrar productos por categoria
export const useProductByCategory = (collectionName, categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const categoryProduct = collection(db, collectionName);

    const categoryQuery = query(
      categoryProduct,
      where("category", "==", categoryId)
    );

    getDocs(categoryQuery)
      .then((res) => {
        const data = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { products, loading, error };
};
