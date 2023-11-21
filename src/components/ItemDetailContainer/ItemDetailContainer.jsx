import React from "react";
import { Card } from "react-bootstrap";

export const ItemDetailContainer = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Card key={product.id} style={{ width: "15vw", margin: 20 }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
