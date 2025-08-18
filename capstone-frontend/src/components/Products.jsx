import React from "react";

const Products = ({ products = [] }) => {
  return (
    <section>
      {products?.map((product) => (
        <section key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </section>
      ))}
    </section>
  );
};

export default Products;
