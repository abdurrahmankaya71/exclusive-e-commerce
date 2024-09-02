/*eslint-disable */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import styles from "./ListSlider.module.css";

import { Navigation } from "swiper/modules";

import Slider from "./Slider";

import HAVITHVG92Gamepad  from '../images/products/1.png'
import AK900WiredKeyboard  from '../images/products/2.png'
import IPSLCDGamingMonitor  from '../images/products/3.png'
import SSeriesComfortChair  from '../images/products/4.png'
import JrZoomSoccerCleats  from '../images/products/15.png'
import star  from "../images/icon/star.png"
import noStar  from "../images/icon/noStar.png"
import halfStar  from "../images/icon/star-half-filled.png"

function ListSlider() {
  // const ALL_PRODUCT = [
  //   {
  //     name: "HAVIT HV-G92 Gamepad",
  //     price1: "$120",
  //     price2: "$160",
  //     image: "/src/images/products/1.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: star,
  //     },
  //     offer: "",
  //     review: "88",
  //   },
  //   {
  //     name: "AK-900 Wired Keyboard",
  //     price1: "$960",
  //     price2: "$1160",
  //     image: "/src/images/products/2.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: noStar,
  //     },
  //     offer: "",
  //     review: "75",
  //   },
  //   {
  //     name: "IPS LCD Gaming Monitor",
  //     price1: "$370",
  //     price2: "$400",
  //     image: "/src/images/products/3.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: star,
  //     },
  //     offer: "",
  //     review: "99",
  //   },
  //   {
  //     name: "S-Series Comfort Chair ",
  //     price1: "$375",
  //     price2: "$400",
  //     image: "/src/images/products/4.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: halfStar,
  //     },
  //     offer: "",
  //     review: "99",
  //   },
  //   {
  //     name: "The north coat",
  //     price1: "$260",
  //     price2: "$360",
  //     image: "/src/images/products/5.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: star,
  //     },
  //     offer: "",
  //     review: "70",
  //   },
  //   {
  //     name: "Gucci duffle bag",
  //     price1: "$960",
  //     price2: "",
  //     image: "/src/images/products/6.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: halfStar,
  //     },
  //     offer: "",
  //     review: "65",
  //   },
  //   {
  //     name: "RGB liquid CPU Cooler",
  //     price1: "$160",
  //     price2: "",
  //     image: "/src/images/products/7.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: halfStar,
  //     },
  //     offer: "",
  //     review: "65",
  //   },
  //   {
  //     name: "Small BookSelf",
  //     price1: "$360",
  //     price2: "",
  //     image: "/src/images/products/9.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: star,
  //     },
  //     offer: "",
  //     review: "65",
  //   },
  //   {
  //     name: "Breed Dry Dog Food",
  //     price1: "$100",
  //     price2: "",
  //     image: "/src/images/products/10.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: noStar,
  //       image5: noStar,
  //     },
  //     offer: "",
  //     review: "35",
  //   },
  //   {
  //     name: "CANON EOS DSLR Camera",
  //     price1: "$360",
  //     price2: "",
  //     image: "/src/images/products/11.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: noStar,
  //     },
  //     offer: "",
  //     review: "95",
  //   },
  //   {
  //     name: "ASUS FHD Gaming Laptop",
  //     price1: "$700",
  //     price2: "",
  //     image: "/src/images/products/12.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: star,
  //     },
  //     offer: "",
  //     review: "325",
  //   },
  //   {
  //     name: "Curology Product Set ",
  //     price1: "$500",
  //     price2: "",
  //     image: "/src/images/products/13.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: noStar,
  //     },
  //     offer: "",
  //     review: "145",
  //   },
  //   {
  //     name: "Kids Electric Car",
  //     price1: "$960",
  //     price2: "",
  //     image: "/src/images/products/14.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: star,
  //     },
  //     offer: "",
  //     review: "65",
  //   },
  //   {
  //     name: "Jr. Zoom Soccer Cleats",
  //     price1: "$1160",
  //     price2: "",
  //     image: "/src/images/products/15.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: star,
  //     },
  //     offer: "",
  //     review: "45",
  //   },
  //   {
  //     name: "GP11 Shooter USB Gamepad",
  //     price1: "$660",
  //     price2: "",
  //     image: "/src/images/products/16.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: halfStar,
  //     },
  //     offer: "",
  //     review: "96",
  //   },
  //   {
  //     name: "Quilted Satin Jacket",
  //     price1: "$660",
  //     price2: "",
  //     image: "/src/images/products/17.png",
  //     rating: {
  //       image1: star,
  //       image2: star,
  //       image3: star,
  //       image4: star,
  //       image5: halfStar,
  //     },
  //     offer: "",
  //     review: "53",
  //   },
  // ];

  const SLIDER_PRODUCT1 = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price1: "$120",
      price2: "$160",
      image: HAVITHVG92Gamepad,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "-40%",
      review: "88",
    },
    {
      name: "AK-900 Wired Keyboard",
      price1: "$960",
      price2: "$1160",
      image: AK900WiredKeyboard,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: noStar,
      },
      offer: "-35%",
      review: "75",
    },
    {
      name: "IPS LCD Gaming Monitor",
      price1: "$370",
      price2: "$400",
      image: IPSLCDGamingMonitor,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "-30%",
      review: "99",
    },
    {
      name: "S-Series Comfort Chair ",
      price1: "$375",
      price2: "$400",
      image: SSeriesComfortChair,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: halfStar,
      },
      offer: "-25%",
      review: "99",
    },
    {
      name: "Jr. Zoom Soccer Cleats",
      price1: "$260",
      price2: "$360",
      image: JrZoomSoccerCleats,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "-40$",
      review: "70",
    },
  ];

  return (
    <div className="container">
      <div className={styles.sliders}>
        <Swiper
          navigation={true}
          slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="mySwiper"
        >
          {SLIDER_PRODUCT1.map((product) => (
            <SwiperSlide key={product.name}>
              <Slider
                name={product.name}
                price1={product.price1}
                price2={product.price2}
                image={product.image}
                rating={product.rating}
                offer={product.offer}
                review={product.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to='/AllProducts'><button className={styles.button}>View All Products</button></Link>
      </div>
    </div>
  );
}

export default ListSlider;
