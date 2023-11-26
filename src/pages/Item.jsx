import React from "react";
import axios from "axios";

import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoaderComponent } from "../components/LoaderComponent";

const Item = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          console.err(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [id]);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : (
        <ItemDetailContainer product={product} />
      )}
    </div>
  );
};

export default Item;
