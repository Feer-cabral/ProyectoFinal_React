import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context";

const CardWidgetComponent = () => {
  const { cantidadItems } = React.useContext(CartContext);

  const iconStyles = {
    fontSize: "1.3rem",
    paddingRight: "10px",
    color: "#742525",
  };
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} style={iconStyles} />
      <span style={{ fontSize: "1.3rem" }}>{cantidadItems}</span>
    </div>
  );
};

export default CardWidgetComponent;
