import React from "react";
import axios from "axios";

import { ItemListContainer } from "../components/ItemListContainer";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/?limit=15")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);

  return <ItemListContainer products={products} />;
};

export default Home;
