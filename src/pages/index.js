import React from "react";

function Products({ products }) {
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
export default Products;

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};