import Layout from '@/components/Layout';
import { Store } from '@/components/Store';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from "react";


export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const paths = products.map((product) => ({ params: { pid: String(product.id) } }));
  return { paths, fallback: false, };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch("https://fakestoreapi.com/products/" + params.pid);
  const data = await res.json();
  return { props: { product: data } }
};

export default function ProductPage({ product }) {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { id } = query;
  const Product = product.find((product) => product.id.toString() === id);
  if (!Product) {
    return <div>Product Not Found</div>
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.id === Product.id)
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (Product.rating.count < quantity) {
      alert('Out of stock')
    } else
      dispatch({ type: 'CART_ADD_ITEM', payload: { ...Product, quantity: quantity } })
  };
  return (
    <Layout title={product.title}>
      <div className='grid lg:grid-cols-3 lg:gap-3 items-center lg:pr-4 lg:mt-[3vw] md:mt-[4.5vw] sm:mt-[7vw]'>
        <div className='md:col-spa'>
          <img
            className='lg:max-h-[33vw] lg:w-[45vw] md:max-h-[38vw]'
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
            <li><span className='font-bold'>Description <br /></span> {product.description}</li><br />
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
            <button className='primary-button w-full' onClick={addToCartHandler}>Add to cart</button>
          </div>
          <Link href="/" className='primary-button block text-center'>Go Back</Link>
        </div>
      </div>
    </Layout>
  );
}