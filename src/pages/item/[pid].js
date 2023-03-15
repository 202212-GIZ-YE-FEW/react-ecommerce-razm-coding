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
      <div className='grid md:grid-cols-4 md:gap-3 items-center lg:pr-4'>
        <div className='md:col-span-2'>
          <img
            className='lg:max-h-[38vw] lg:w-[45vw]'
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <ul className='text-center'>
            <li>
              <h1 className='text-xl font-bold'><span className='underline'>Title<br /></span>{product.title}</h1>
            </li>
            <br />
            <li><span className='font-bold'>Category <br /></span> {product.title}</li>
            <br />
            <li className='font-bold'>Rating:<span className='px-5'>{product.rating.rate}</span></li>
            <br />
            <li><span className='font-bold'>Description <br /></span> {product.description}</li>
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
            </div><br />
            <Link href='' className='primary-button block'>Add to cart</Link>
          </div>
          <Link href="/" className='primary-button block text-center'>Go Back</Link>
        </div>
      </div>
    </Layout>
  );
}