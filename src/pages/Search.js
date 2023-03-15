import React, { useState } from "react";
import SearchPage from "./SearchEngPage/SearchPage";

export default function Search({ products }) {
  const [searchInput, setSearchInput] = useState("");

  console.log(products)
  function handleInput(event) {
    setSearchInput(event.target.value);
  }

  function handleSearch() {
    products.filter((product)=>{
      if (searchInput == product.title) {
        return <SearchPage product={product} key={product.id} />;
      } else {
        return <h1>Not Found</h1>;
      }
    })
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
        placeholder="Search...."
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-700 focus:border-red-400"
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
