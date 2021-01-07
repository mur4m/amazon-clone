import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/CyberMonday/Fuji_TallHero_CM_en_US_2x._CB416093103_.jpg"
          alt="top banner"
        />

        <div className="home_row">
          <Product
            title="Ada Lovelace (Little People, BIG DREAMS, 10)"
            price={12.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81437Hh1hBL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            title="Holder Retro Tabletop for Hydroponics Home Garden Office Decoration"
            price={20.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/71GrAWYYDyL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="Macaron Color Bling Lightweight Soft TPU Case Cover"
            price={7.5}
            rating={1}
            image="https://m.media-amazon.com/images/I/61-v71olNIL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            title="Solar Charger 24000mAh, waterproof, all phones"
            price={38.75}
            rating={5}
            image="https://m.media-amazon.com/images/I/71BaktTEjlL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            title="12''3D HD Screen Magnifier, Foldable Mobile Phone Screen"
            price={12.05}
            rating={2}
            image="https://m.media-amazon.com/images/I/61iwBmp+fZL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            title="Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor"
            price={379.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81bkp5rYYuL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
