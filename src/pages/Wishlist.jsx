// /* eslint-disable */

import { Link } from "react-router-dom";
import { useWishlist } from "../WishlistContext.jsx";
import { useCart } from "../CartContext.jsx";
import styles from "./Wishlist.module.css";

import Delete from "/src/images/delete.png"

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { cart, addToCart, removeFromCart } = useCart();

  const handleAddAllToCart = () => {
    wishlist.forEach((product) => {
      const isInCart = cart.some((cartItem) => cartItem.name === product.name);
      if (!isInCart) {
        addToCart(product);
      }
    });
  };

  const isInCart = (productName) => {
    return cart.some((item) => item.name === productName);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (productName) => {
    removeFromCart(productName);
  };

  const handleRemoveFromWishlist = (productName) => {
    removeFromWishlist(productName);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.wishlist}>
      <h2>Wishlist ({wishlist.length})</h2>
      <button className={styles.Button} onClick={handleAddAllToCart}>Move All to Bag</button>
      </div>
      {wishlist.length === 0 ? (
        <p>No products in your wishlist.</p>
      ) : (
        <div className={styles.list}>
          {wishlist.map((product) => (
            <div key={product.name} className={styles.slide}>
              <div className={styles.image}>
                <img src={product.image} />
                <div className={styles.heart}>
                  <img
                    className={styles.img}
                    src={Delete}
                    alt="Remove from Wishlist"
                    onClick={() => handleRemoveFromWishlist(product.name)}
                  />
                </div>
                <div className={styles.eye}>
                  <Link to={`${product.name}`}></Link>
                </div>
                {isInCart(product.name) ? (
                  <p
                    className={styles.remove}
                    onClick={() => handleRemoveFromCart(product.name)}
                  >
                    Remove From Cart
                  </p>
                ) : (
                  <p onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </p>
                )}
              </div>
              <div className={styles.captions}>
                <h5>{product.name}</h5>
                <div className={styles.price}>
                  <span>{product.price1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;

