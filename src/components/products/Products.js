import Link from 'next/link';

export default function Products({ product }) {
  return (
    <div className='card flex flex-col justify-between'>
      <Link href={`/item/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          width={720}
          height={720}
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

