import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "15vw", margin: 20 }}>
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>

            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
