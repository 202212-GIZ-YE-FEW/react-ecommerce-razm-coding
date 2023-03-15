import Layout from '@/components/Layout'
import Products from '@/components/products/Products';
import Search from './Search';

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return { props: { products: data } };
};

export default function Home({ products }) {
  return (
    <Layout title='Home Page'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {products.map(product => (
          <Products product={product} key={product.id} ></Products>
        ))}
        <Search products={products}/>
      </div>
    </Layout>
  )
}

