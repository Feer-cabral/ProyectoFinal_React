import React from "react";
import { Button } from "react-bootstrap";
import { AddItemButton } from "../AddItemButton";

export const ItemCountComponent = () => {
  const [count, setCount] = React.useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClean = () => {
    setCount(1);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={count}
          style={{
            color: "white",
            backgroundColor: "maroon",
            border: "2px solid white",
            borderRadius: "10px",
            margin: 10,
            marginLeft: 60,
          }}
          disabled
        />
      </div>
      <div style={{ display: "flex" }}>
        <Button
          onClick={handleAdd}
          style={{
            margin: 10,
            color: "red",
            backgroundColor: "lightgrey",
            border: "none",
          }}
        >
          Añadir
        </Button>
        <AddItemButton count={count} handleClean={handleClean} />
        <Button
          onClick={handleRemove}
          style={{
            margin: 10,
            color: "red",
            backgroundColor: "lightgrey",
            border: "none",
          }}
        >
          Quitar
        </Button>
      </div>
    </div>
  );
};
