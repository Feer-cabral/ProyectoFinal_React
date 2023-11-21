import React from "react";
import axios from "axios";

import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  }, [id]);

  return <ItemDetailContainer product={product} />;
};

export default Item;
