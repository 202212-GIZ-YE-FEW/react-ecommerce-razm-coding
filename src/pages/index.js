import Link from "next/link";
import React from "react";

function Products({ products }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <Link href={`/item/${product.id}`}>View Product</Link>
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