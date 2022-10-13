import React from "react";

export const ProductItem = (props) => {
  return (
    <li>
      {props.product_name}
      {props.product_description}
      {props.price}
    </li>
  );
};
