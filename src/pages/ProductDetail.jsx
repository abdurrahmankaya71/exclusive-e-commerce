/*eslint-disable */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./ProductDetail.module.css"
import StarRating from '../components/StarRating';
import NotFound from './NotFound';

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

import Return  from "../images/Icon-return.png"
import delivery  from "../images/delivery.png"
import love  from "../images/love.png"


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
    name: Guccidufflebag,
    price1: "$960",
    price2: "",
    image: "../images/products/6.png",
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
    name: "Curology Product Set ",
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
  }]
function ProductDetail() {
  const { name } = useParams();


  const product = ALL_PRODUCT.find(p => p.name === name);

  if (!product) {
    return <NotFound/>;
  }

  const [selectedColor, setSelectedColor] = useState('');

  const handleRadioChange = (event) => {
    setSelectedColor(event.target.value);
  };

  let [quantity, setQuantity] = useState(1)

  function handleClickPlus() {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  function handleClickMinus() {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1))
  }

  return (
    <>
    <div className={styles.container}>
      <div>
        <span className={styles.path}>Account / Products / </span>{product.name}
        <div className={styles.gallery}>
          <div className={styles.images}>
            <div><img src={product.image} /></div>
            <div><img src={product.image} /></div>
            <div><img src={product.image} /></div>
            <div><img src={product.image} /></div>
          </div>
          <div className={styles.main}><img src={product.image} /></div>
        </div>
      </div>
      <div className={styles.detail}>
        <h5>{product.name}</h5>
        <div>
          <div>
            <img src={product.rating.image1} alt="" />
            <img src={product.rating.image2} alt="" />
            <img src={product.rating.image3} alt="" />
            <img src={product.rating.image4} alt="" />
            <img src={product.rating.image5} alt="" />
          </div>
          <span>({product.review} Reviews) | </span>
          <span> In Stock</span>
        </div>
        <span className={styles.price}>{product.price2}.00</span>
        <p>
          PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
        </p>
        <hr />
        <div>
            <div className={styles.colorSelector}>
              <span>Colours:</span>
              <label className={`${styles.colorOption} ${selectedColor === 'red' ? styles.selected : ''}`}>
                <input
                  type="radio"
                  value="red"
                  checked={selectedColor === 'red'}
                  onChange={handleRadioChange}
                />
              </label>
              <label className={`${styles.colorOption} ${selectedColor === 'green' ? styles.selected : ''}`}>
                <input
                  type="radio"
                  value="green"
                  checked={selectedColor === 'green'}
                  onChange={handleRadioChange}
                />
              </label>
            </div>
          </div>
            <div className={styles.size}>
              <p>Size: </p>
              <div><span>XS</span></div>
              <div><span>S</span></div>
              <div><span>M</span></div>
              <div><span>L</span></div>
              <div><span>XL</span></div>
            </div>
            <div className={styles.buy}>
              <div className={styles.num}>
                <span onClick={handleClickMinus}>-</span>
                <span>{quantity}</span>
                <span onClick={handleClickPlus}>+</span>
              </div>
              <button>Buy Now</button>
              <img src={love} alt="" />
            </div>
            <div  className={styles.services}>
              <div  className={styles.delivery}>
                <img src={delivery} alt="" />
                <div>
                  <h6>Free Delivery</h6>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <hr />
              <div className={styles.edit}>
                <div className={styles.delivery}>
                  <img src={Return} alt="" />
                  <div>
                    <h6>Return Delivery</h6>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <StarRating/>
    </>
  );
}

export default ProductDetail;


