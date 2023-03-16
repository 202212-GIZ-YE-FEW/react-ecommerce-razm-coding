import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../Store';


export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return { props: { products: data } };
};

export default function Products({ product }) {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id)
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.rating.count < quantity) {
      alert('Out of stock')
    } else
      dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: quantity } })
    router.push('/Cart/cart')
  };
  return (
    <div className='card flex flex-col justify-between mt-[6vw]'>
      <Link href={`/item/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="rounded shadow-lg h-[50vw] lg:h-[15vw] md:h-[15vw] sm:h-[50vw] w-[100%]"
        />
      </Link>
      <div className='py-2'>
        <Link href={`/item/${product.id}`}>
          <h2 className='text-lg'>{product.title}</h2>
        </Link>
        <p>{product.category}</p>
        <p> ${product.price}</p>
      </div>
      <button className='primary-button' type='button' onClick={addToCartHandler}>Add To Cart</button>
    </div>
  );
}

