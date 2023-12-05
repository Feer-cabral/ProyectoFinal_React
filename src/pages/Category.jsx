import React from "react";

import { ItemListContainer, LoaderComponent } from "../components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const Category = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  // const { products, loading, error } = useProductsByCategory(categoryId);

  useEffect(() => {
    const db = getFirestore();

    const categoryQuery = query(
      collection(db, "products"),
      where("category", "==", categoryId)
    );

    getDocs(categoryQuery)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.err(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer products={products} />
  );
};
