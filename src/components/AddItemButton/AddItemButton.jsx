import React from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddItemButton = ({
  label = "Subir al carrito",
  count,
  handleClean,
}) => {
  const { cantidadItems, setCantidadItems } = React.useContext(CartContext);

  const handleAddCart = () => {
    setCantidadItems(cantidadItems + count);
    handleClean();
    message();
  };

  const message = () => {
    toast.success("Su producto fue agregado al carrito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <Button
        onClick={handleAddCart}
        style={{ backgroundColor: "maroon", border: "none", margin: 10 }}
      >
        {label}
      </Button>
      <ToastContainer />
    </div>
  );
};
