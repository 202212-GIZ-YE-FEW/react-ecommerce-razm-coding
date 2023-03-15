import React, { useState } from 'react';

export default function Search({ setProducts }) {
	const [searchInput, setSearchInput] = useState('');

	function handleInput(event) {
		setSearchInput(event.target.value);
	}

	async function handleSearch(e) {
		e.preventDefault();
		const res = await fetch('https://fakestoreapi.com/products');
		const data = await res.json();
		const products = data.filter(({ title }) => {
			return title.includes(searchInput);
		});
		setProducts(products);
	}

	return (
		<div className="relative mt-3 justify-center">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<svg
					aria-hidden="true"
					className="w-5 h-5 text-gray-500 dark:text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					></path>
				</svg>
			</div>
			<form onSubmit={handleSearch}>
				<input
					type="search"
					placeholder="Search ..."
					className="block py-4 px-10 pl-10 text-sm border border-gray-300 rounded-lg bg-slate-700 focus:border-red-400"
					value={searchInput}
					onChange={handleInput}
				/>
			</form>
		</div>
	);
}
