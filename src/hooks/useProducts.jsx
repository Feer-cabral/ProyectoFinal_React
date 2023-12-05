import { useEffect, useState } from "react";
import {
  getAllProducts,
  getSingleProducts,
  getProductsByCategory,
} from "../services";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
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
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => setError(true))
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
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading, error };
};

// Filtrar productos por categoria
export const useProductByCategory = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProductsByCategory(categoryId)
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { products, loading, error };
};
