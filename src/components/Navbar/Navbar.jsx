import Search from './Search';
import Link from 'next/link';
import React from 'react';
import Nav from './Nav';

const routes = [
	{ name: "Home", path: '/'},
	{ name: 'Cart', path: '/cart' },
	{ name: 'Login', path: '/login' },
];

export default function Navbar({setProducts}) {
	return (
		<div>
			<nav className="flex h-12 justify-between shadow-lg items-center px-4 py-10 bg-gray-600">
				<Link href="/" className="text-lg font-bold">
					Razm E-Commerce
				</Link>
				<div className="flex gap-4">
					{routes.map(({name, path}, index) => (
						<Link className="" key={index} href={path}>
							<Nav name={name} />
						</Link>
					))}
				</div>
				<div>
					<Search setProducts={setProducts} />
				</div>
			</nav>
		</div>
	);
}
