import Layout from '@/components/Layout';
import Products from '@/components/products/Products';
import { useState } from 'react';

export const getStaticProps = async () => {
	const res = await fetch('https://fakestoreapi.com/products');
	const data = await res.json();
	return { props: { products: data } };
};

export default function Home({ products }) {
	const [currentProducts, setProducts] = useState(products);
	return (
		<Layout title="Home Page" setProducts={setProducts}>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
				{currentProducts.map((product) => (
					<Products product={product} key={product.id}></Products>
				))}
			</div>
		</Layout>
	);
}
