import React, { useState } from "react";
import { data } from "../data";
import { FaSearch, FaTshirt, FaUser } from "react-icons/fa";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");

  const handleCategoryChange = (selected) => {
    setCategory(category === selected ? "" : selected);
  };

  const handleGenderChange = (selected) => {
    setGender(gender === selected ? "" : selected);
  };

  const filteredData = data.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.searchCode.toLowerCase().includes(searchText.toLowerCase());
    const matchCategory = category ? item.categoryType === category : true;
    const matchGender = gender ? item.Gender === gender : true;
    return matchSearch && matchCategory && matchGender;
  });

  const categories = [...new Set(data.map((item) => item.categoryType))];
  const genders = [...new Set(data.map((item) => item.Gender))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f9fc] to-[#e3efff] dark:from-[#111827] dark:to-[#1f2937] p-4 sm:p-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10">

        {/* Sidebar */}
        <aside className="w-full lg:w-72 bg-white dark:bg-[#1e1e1e] shadow-xl rounded-2xl p-6 space-y-8 h-fit self-start">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              🎯 Seen a product on Instagram or Reels?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Just type the <strong>product name</strong> or <strong>search code</strong> to find it instantly!
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by name or code"
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender Filters */}
          <div>
            <h4 className="text-md font-semibold mb-3 text-gray-800 dark:text-white">Filter by Gender</h4>
            {genders.map((gen, i) => (
              <label
                key={i}
                className={`flex items-center gap-2 text-sm mb-3 cursor-pointer transition ${gender === gen ? "text-blue-600" : "text-gray-700 dark:text-gray-200 hover:text-blue-600"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={gender === gen}
                  onChange={() => handleGenderChange(gen)}
                  className="accent-blue-500 w-4 h-4"
                />
                <FaUser className="text-blue-400" />
                {gen}
              </label>
            ))}
          </div>

          {/* Category Filters */}
          <div>
            <h4 className="text-md font-semibold mb-3 text-gray-800 dark:text-white">Filter by Category</h4>
            {categories.map((cat, i) => (
              <label
                key={i}
                className={`flex items-center gap-2 text-sm mb-3 cursor-pointer transition ${category === cat ? "text-blue-600" : "text-gray-700 dark:text-gray-200 hover:text-blue-600"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={category === cat}
                  onChange={() => handleCategoryChange(cat)}
                  className="accent-blue-500 w-4 h-4"
                />
                <FaTshirt className="text-blue-400" />
                {cat}
              </label>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((ele, i) => (
            <div
              key={i}
              className="flex flex-col justify-between h-[500px] bg-white dark:bg-black rounded-2xl shadow-md dark:shadow-[0_0_30px_10px_rgba(0,183,255,0.15)] p-4 hover:scale-[1.02] transition duration-300"
            >
              {/* Product Image */}
              <div className="w-full h-60 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={ele?.url}
                  alt={ele?.title}
                />
              </div>

              {/* Product Info */}
              <div className="mt-4 flex-grow">
                <img
                  src={ele?.websiteLogo}
                  alt="Website Logo"
                  className="w-20 mb-2 rounded"
                />
                <h2 className="text-sm font-bold text-gray-800 dark:text-white line-clamp-2">
                  {ele?.title}
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                  {ele?.description}
                </p>
                <p className="mt-2 font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="text-red-500">{ele?.discount}</span>
                  {ele?.price}
                </p>
              </div>

              {/* Buy Now Button */}
              <button
                onClick={() => window.open(ele.affiliateLink, "_blank")}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
              >
                Buy Now
              </button>
            </div>
          ))}

          {filteredData.length === 0 && (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-300">
              No matching products found.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;