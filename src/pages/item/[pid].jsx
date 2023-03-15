// import { useRouter } from 'next/router';
import Link from 'next/link';
// import Image from 'next/legacy/image';

import React from "react";

function ProductPage( {product} ) {
  return (
       <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            {/* <p>{product.rating.map((r) => <p>{r.rate} {r.count}</p>) } </p> */}
             <Link href="/">Go Back</Link>
          </div>
 
  );
}

export default ProductPage;

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const paths = products.map((product) => {
    return {
      params: { 
        pid: String(product.id) 
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch("https://fakestoreapi.com/products/" + params.pid );
  const data = await res.json();
  return {
    props: {
      product: data,
    }
  };
};