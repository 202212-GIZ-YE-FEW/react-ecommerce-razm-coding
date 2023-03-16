import React, { useState } from "react";

function Filter({ setProducts }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategory(event) {
    setSelectedCategory(event.target.value);
    filterDisplay(event.target.value);
  }

  async function filterDisplay(category) {
    console.log("on catogry");
    const url =
      category === "All"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  }

  async function categories() {
    const resCat = await fetch("https://fakestoreapi.com/products/categories");
    const dataCat = await resCat.json();
    return dataCat;
  }

  return (
    <div className="relative mt-3 justify-center">
      <select
        onChange={handleCategory}
        className="block py-4 px-10 pl-10 border border-gray-300 rounded-lg bg-slate-700 focus:border-red-400"
      >
        <option value="All">Categories</option>
        <option value={categories()[0]} className="text-white">
          electronics
        </option>
        <option value={categories()[1]} className="text-white">
          jewelery
        </option>
        <option value={categories()[2]} className="text-white">
          men's clothing
        </option>
        <option value={categories()[3]} className="text-white">
          women's clothing
        </option>
      </select>
    </div>
  );
}

export default Filter;
