/*eslint-disable */

import { useState } from "react";
import styles from "./Search.module.css";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

import Slider from "./Slider";

import star  from "../images/icon/star.png"
import noStar  from "../images/icon/noStar.png"
import halfStar  from "../images/icon/star-half-filled.png"

import HAVITHVG92Gamepad  from "../images/products/1.png"
import AK900WiredKeyboard  from "../images/products/2.png"
import IPSLCDGamingMonitor  from "../images/products/3.png"
import SSeriesComfortChair  from "../images/products/4.png"
import Thenorthcoat  from "../images/products/5.png"
import Guccidufflebag  from "../images/products/6.png"
import RGBliquidCPUCooler  from "../images/products/7.png"
import SmallBookSelf  from "../images/products/9.png"
import BreedDryDogFood  from "../images/products/10.png"
import CANONEOSDSLRCamera  from "../images/products/11.png"
import ASUSFHDGamingLaptop  from "../images/products/12.png"
import CurologyProductSet  from "../images/products/13.png"
import KidsElectricCar  from "../images/products/14.png"
import JrZoomSoccerCleats  from "../images/products/15.png"
import GP11ShooterUSBGamepad  from "../images/products/16.png"
import QuiltedSatinJacket  from "../images/products/17.png"
import SearchIcon  from "../images/Vector (2).png"

function Search() {
  const ALL_PRODUCT = [
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
      offer: "",
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
      offer: "",
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
      offer: "",
      review: "99",
    },
    {
      name: "S-Series Comfort Chair",
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
      offer: "",
      review: "99",
    },
    {
      name: "The north coat",
      price1: "$260",
      price2: "$360",
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
    {
      name: "Breed Dry Dog Food",
      price1: "$100",
      price2: "",
      image: BreedDryDogFood,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: noStar,
        image5: noStar,
      },
      offer: "",
      review: "35",
    },
    {
      name: "CANON EOS DSLR Camera",
      price1: "$360",
      price2: "",
      image: CANONEOSDSLRCamera,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: noStar,
      },
      offer: "",
      review: "95",
    },
    {
      name: "ASUS FHD Gaming Laptop",
      price1: "$700",
      price2: "",
      image: ASUSFHDGamingLaptop,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "",
      review: "325",
    },
    {
      name: "Curology Product Set",
      price1: "$500",
      price2: "",
      image: CurologyProductSet,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: noStar,
      },
      offer: "",
      review: "145",
    },
    {
      name: "Kids Electric Car",
      price1: "$960",
      price2: "",
      image: KidsElectricCar,
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
    {
      name: "Jr. Zoom Soccer Cleats",
      price1: "$1160",
      price2: "",
      image: JrZoomSoccerCleats,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "",
      review: "45",
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price1: "$660",
      price2: "",
      image: GP11ShooterUSBGamepad,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: halfStar,
      },
      offer: "",
      review: "96",
    },
    {
      name: "Quilted Satin Jacket",
      price1: "$660",
      price2: "",
      image: QuiltedSatinJacket,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: halfStar,
      },
      offer: "",
      review: "53",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredResults = ALL_PRODUCT.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };



  return (
    <div>
        <div className={styles.searchBar}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="What are you looking for?"
            />
            <img src={SearchIcon} alt="" />
        </div>

      {results.length > 0 && (
        <div className={styles.results} >
          {results.map((product) => (
            <Slider
              key={product.name}
              name={product.name}
              price1={product.price1}
              price2={product.price2}
              image={product.image}
              rating={product.rating}
              offer={product.offer}
              review={product.review}
            />
          ) )}
        </div>
      )}
    </div>
  );
}

export default Search;

