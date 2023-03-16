import Link from 'next/link';


export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return { props: { products: data } };
};

export default function Products({ product }) {
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
      <button className='primary-button' type='button'>Add To Cart</button>
    </div>
  );
}

