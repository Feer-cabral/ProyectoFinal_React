import React from "react";

import { ItemCountComponent } from "../components";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import { Card } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const { product, loading, error } = useSingleProduct("products", productId);
  return (
    <Card
      key={product.id}
      style={{
        width: "20rem",
        margin: "20px auto",
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      }}
    >
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ItemCountComponent />
    </Card>
  );
};
