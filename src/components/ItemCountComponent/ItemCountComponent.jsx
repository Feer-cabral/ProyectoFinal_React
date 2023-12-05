import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const ItemCountComponent = () => {
  const { cantidadItems, setCantidadItems } = useContext(CartContext);

  const [count, setCount] = React.useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    setCantidadItems(cantidadItems + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
    setCantidadItems(cantidadItems - 1);
  };

  const handleClean = () => {
    setCount(0);
    setCantidadItems(0);
  };

  return (
    <div>
      <Button onClick={handleAdd}>Añadir</Button>
      <input type="number" value={count} />
      <Button onClick={handleRemove}>Quitar</Button>
      <Button onClick={handleClean}>Limpiar</Button>
    </div>
  );
};

export default ItemCountComponent;
