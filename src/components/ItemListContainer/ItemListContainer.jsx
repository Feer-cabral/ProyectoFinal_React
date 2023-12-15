import React from "react";

import { Card, Button } from "react-bootstrap";
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
          <Card key={product.id} style={{ width: "15vw", margin: 25 }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
            </Card.Body>
            <Link to={`/item/${product.id}`}>
              <Button
                style={{
                  backgroundColor: "black",
                  marginLeft: "30px",
                  marginBottom: "10px",
                  border: "none",
                }}
              >
                Ver mas detalles
              </Button>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};
