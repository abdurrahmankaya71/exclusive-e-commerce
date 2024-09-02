/*eslint-disable */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./ListSlider.module.css";
import Slider from "./Slider";

import star  from "../images/icon/star.png"
import halfStar  from "../images/icon/star-half-filled.png"

import Thenorthcoat  from "../images/products/5.png"
import Guccidufflebag  from "../images/products/6.png"
import RGBliquidCPUCooler  from "../images/products/7.png"
import SmallBookSelf  from "../images/products/9.png"

function ThisMonth() {
  const SLIDE = [
    {
      name: "The north coat",
      price1: "$360",
      price2: "",
      image: Thenorthcoat,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "",
      review: "70",
    },
    {
      name: "Gucci duffle bag",
      price1: "$960",
      price2: "",
      image: Guccidufflebag,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: halfStar,
      },
      offer: "",
      review: "65",
    },
    {
      name: "RGB liquid CPU Cooler",
      price1: "$160",
      price2: "",
      image: RGBliquidCPUCooler,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: halfStar,
      },
      offer: "",
      review: "65",
    },
    {
      name: "Small BookSelf",
      price1: "$360",
      price2: "",
      image: SmallBookSelf,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "",
      review: "65",
    },
  ];

  return (
    <div className="container">
      <div className={styles.sliders}>
        <Swiper modules={[Navigation]} navigation={true} slidesPerView={4} spaceBetween={0} className="mySwiper" 
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}>
          {SLIDE.map((product) => (
            <SwiperSlide key={product.name}>
              <Slider
                name={product.name}
                price1={product.price1}
                price2={product.price2}
                image={product.image}
                rating={product.rating}
                review={product.review}
                offer={product.offer}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to='AllProducts'><button className={styles.button}>View All Products</button></Link>
      </div>
    </div>
  );
}

export default ThisMonth;
