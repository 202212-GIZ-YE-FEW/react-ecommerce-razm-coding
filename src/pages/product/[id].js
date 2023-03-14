import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';


export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();
  const paths = products.map((product) => ({ params: { id: product.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return { props: { product: [product] } };
};




export default function ProductScreen({ product }) {
  const { query } = useRouter();
  const { id } = query;
  const Product = product.find((product) => product.id.toString() === id);
  if (!Product) {
    return <div>Product Not Found</div>
  }
  return <div title={Product.title}>
    <div className='grid md:grid-cols-4 md:gap-3'>
      <div className='md:col-span-2'>
        <Image
          src={Product.image}
          alt={Product.title}
          width={720}
          height={720}
          layout="responsive"
        />
      </div>
      <div>
        <ul>
          <li>
            <h1 className='text-lg'>{Product.title}</h1>
          </li>
          <li>Category: {Product.title}</li>
          <li>Brand: {Product.brand}</li>
          <li>{Product.rating.rate} of {Product.numReviews} reviews</li>
          <li>Description: {Product.description}</li>
        </ul>
      </div>
      <div>
        <div className='card p-5'>
          <div className='mp-2 flex justify-between'>
            <div>Price</div>
            <div>${Product.price}</div>
          </div>
          <div className='mp-2 flex justify-between'>
            <div>Status</div>
            <div>{Product.rating.count > 0 ? 'In Stock' : 'Unavalible'}</div>
          </div>
          <button className='primary-button w-full'>Add to cart</button>
        </div>
      </div>
    </div>
    <Link href="/">Go Back</Link>
  </div>;
}