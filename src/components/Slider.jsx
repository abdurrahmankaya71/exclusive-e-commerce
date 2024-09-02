/*eslint-disable */

import styles from "./Slider.module.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../WishlistContext.jsx";
import { useCart } from "../CartContext";

import Heart1 from "../images/heart_668687.png"
import Heart from "../images/icon/FillHeart.png"
import Eye from "../images/icon/FillEye.png"

function Slider({ name, price1, price2, image, rating, offer, review }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart, removeFromCart } = useCart();

  const isInWishlist = wishlist.some((item) => item.name === name);
  const inCart = cart.some((item) => item.name === name);

  const handleAddToWishlist = () => {
    const product = { name, price1, image, rating, review, offer };
    addToWishlist(product);
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(name);
  };

  const handleAddToCart = () => {
    addToCart({ name, price1, image, rating, offer, review });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(name);
  };

  const OFFER = {
    width: "55px",
    height: "26px",
    textAlign: "center",
    background: "red",
    color: "white",
    position: "absolute",
    top: "10px",
    left: "10px",
    borderRadius: "4px",
  };

  const DISPLAY = {
    display: "none",
  };

  const NEW = {
    height: "26px",
    textAlign: "center",
    background: "#00FF66",
    color: "white",
    position: "absolute",
    top: "10px",
    left: "10px",
    borderRadius: "4px",
    padding: "4px 12px",
  };

  const appliedStyle = offer === "NEW" ? NEW : offer === "" ? DISPLAY : OFFER;

  return (
    <div className={styles.slide}>
      <div className={styles.image}>
        <img src={image} alt={name} />
        <div className={styles.heart}>
          {isInWishlist ? (
            <img
              className={styles.img}
              src={Heart1}
              onClick={handleRemoveFromWishlist}
              alt="Remove from Wishlist"
            />
          ) : (
            <img
              src={Heart}
              onClick={handleAddToWishlist}
              alt="Add to Wishlist"
            />
          )}
        </div>
        <div className={styles.eye}>
          <Link to={`/${name}`}>
            <img src={Eye} alt=""  loading="lazy" />
          </Link>
        </div>
        <span style={appliedStyle}>{offer}</span>
        {inCart ? (
          <button className={styles.remove} onClick={handleRemoveFromCart}>Remove From Cart</button>
        ) : (
          <button className={styles.add}  onClick={handleAddToCart}>Add To Cart</button>
        )}
      </div>
      <div className={styles.captions}>
        <h5>{name}</h5>
        <div className={styles.price}>
          <span className={styles.price}>{price1}</span>
          <span>{price2}</span>
        </div>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <img src={rating.image1} alt="" />
            <img src={rating.image2} alt="" />
            <img src={rating.image3} alt="" />
            <img src={rating.image4} alt="" />
            <img src={rating.image5} alt="" />
            <span>({review})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
