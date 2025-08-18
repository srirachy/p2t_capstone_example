import React from "react";

const Products = ({ products = [] }) => {
  return (
    <section>
      {products?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default Products;
