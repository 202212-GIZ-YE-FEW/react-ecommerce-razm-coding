import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar/Navbar';

export default function Layout({ title, setProducts, children }) {
	return (
		<>
			<Head>
				<title>{title ? title + ' - Razm' : 'Razm E-Commerce'}</title>
				<meta name="description" content="Razm E-Commerce" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="min-h-screen flex flex-col justify-between bg-zinc-900 text-slate-200">
				<header className="fixed w-full z-10">
					<Navbar setProducts={setProducts} />
				</header>
				<main className="my-10">{children}</main>
				<footer className="flex h-10 justify-center items-center shadow-inner py-10 bg-gray-700">
					<p>Copyright &copy; 2023 By Razm Coding</p>
				</footer>
			</div>
		</>
	);
}
