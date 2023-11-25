import React from "react";
import { trefoil } from "ldrs";

export const LoaderComponent = () => {
  trefoil.register();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <l-trefoil
        size="70"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="2.5"
        color="white"
      ></l-trefoil>
    </div>
  );
};
