import React, { useState } from "react";
import Products from "./Product";
import useDarkSide from "../../Navigation/hooks/useDarkSide";
import logoBlack from '../../Images/dealsticklogoblack.jpg';

const Home = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      {/* Products */}
      <Products searchText={searchText} setSearchText={setSearchText} />

      {/* Footer-style Description Section */}
      <section className="bg-white dark:bg-black dark:text-white text-black text-center px-4 py-10 shadow-[0_-2px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_-2px_12px_rgba(0,183,255,0.08)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            What is <img src={logoBlack} alt="Dealstick Logo" className="w-36 mx-auto mt-2" />
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Dealstick is your go-to platform to explore the latest and trending affiliate products.
            Whether you're shopping fashion, gadgets, or home essentials — we make it easy to find quality deals curated from across the web.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
