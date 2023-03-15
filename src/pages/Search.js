import React, { useState } from "react";

export default function Search({ products }) {
  const [searchInput, setSearchInput] = useState("");

  function handleInput(event) {
    setSearchInput(event.target.value);
  }

  function handleSearch() {
    for (const element of products) {
      if (element.title == searchInput) {
        <div>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <img src={product.image} alt={product.title} />
                <h1>{product.title}</h1>
                <Link href={`/item/${product.id}`}>View Product</Link>
              </div>
            );
          })}
        </div>;
      }
    }
  }

  return (
    <div className="relative mt-3 justify-center">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search ....."
        className="block py-4 px-10 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-700 focus:border-red-400"
        value={searchInput}
        onChange={handleInput}
      />
      <button
        onClick={handleSearch}
        className="text-white absolute right-2.5 bottom-2.5 bg-red-400 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-2"
      >
        Search
      </button>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
