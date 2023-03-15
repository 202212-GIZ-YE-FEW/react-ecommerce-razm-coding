import Layout from '@/components/Layout';
import Link from 'next/link';
import React from "react";


export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const paths = products.map((product) => {
    return { params: { pid: String(product.id) } }
  });
  return { paths, fallback: false, };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch("https://fakestoreapi.com/products/" + params.pid);
  const data = await res.json();
  return { props: { product: data, } }
};

export default function ProductPage({ product }) {
  return (
    <Layout title={product.title}>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
          <img
            src={product.image}
            alt={product.title}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className='text-lg'>{product.title}</h1>
            </li>
            <li>Category: {product.title}</li>
            <li>Brand: {product.brand}</li>
            <li>{product.rating.rate} of {product.numReviews} reviews</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className='card p-5'>
            <div className='mp-2 flex justify-between'>
              <div>Price: </div>
              <div>${product.price}</div>
            </div>
            <div className='mp-2 flex justify-between'>
              <div>Status: </div>
              <div>{product.rating.count > 0 ? `${product.rating.count} Still in Stock` : 'Unavalible'}</div>
            </div>
            <button className='primary-button w-full'>Add to cart</button>
          </div>
        </div>
      </div>
      <Link href="/">Go Back</Link>
    </Layout>
  );
}