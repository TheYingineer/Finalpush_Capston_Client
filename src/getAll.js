import React from "react";

export const getAll = (props) => {
  const { component: Component } = props;
  return (
    <ul>
      {props.items.map((x) => (
        <Component product_name ={x.product_name} />,
        <Component product_description ={x.product_description} />,
        <Component price = {x.price} />
      ))}
    </ul>
  );
};
