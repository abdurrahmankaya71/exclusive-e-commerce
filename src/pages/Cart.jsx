import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import styles from "./Cart.module.css";

import cancel from "../images/cancel-icon.png"
import Down from "../images/Drop-Down-Small.png"
import Up from "../images/Drop-Up-Small.png"

function Cart() {
  const { cart, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const updateQuantity = (index, amount) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(newQuantities[index] + amount, 1);
      return newQuantities;
    });
  };

  const getPriceNumber = (price) => {
    return parseFloat(price.replace("$", ""));
  };

  const totalPrice = cart.reduce((total, product, index) => {
    return total + getPriceNumber(product.price1) * quantities[index];
  }, 0);

  return (
    <div className={styles.cartPage}>
      <span>
        Home / <span>Cart</span>
      </span>
      <div className={styles.title}>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cart.map((product, index) => (
              <div key={product.name} className={styles.cartItem}>
                <div className={styles.items}>
                  <div className={styles.product}>
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                  </div>
                  <span> ${getPriceNumber(product.price1)}</span>
                  <div className={styles.quantity}>
                    <span>0{quantities[index]}</span>
                    <div className={styles.arrow}>
                      <img
                        src={Up}
                        onClick={() => updateQuantity(index, 1)}
                      />
                      <img
                        src={Down}
                        onClick={() => updateQuantity(index, -1)}
                      />
                    </div>
                  </div>
                  <span>
                    {" "}
                    ${getPriceNumber(product.price1) * quantities[index]}
                  </span>
                  <img
                    className={styles.cancel}
                    src={cancel}
                    onClick={() => removeFromCart(product.name)}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className={styles.footer}>
        <div className={styles.buttons}>
          <Link to="/">
            <button>Return To Shop</button>
          </Link>
          <button>Update Cart</button>
        </div>
        <div className={styles.final}>
          <div className={styles.coupon}>
            <input type="text" placeholder="Coupon Code" />
            <button className={styles.apply}>Apply Coupon</button>
          </div>
          <div className={styles.total}>
            <h6>Cart Total</h6>
            <div className={styles.Price}>
              <span>Subtotal: </span>
              <span>${totalPrice}</span>
            </div>
            <hr />
            <div className={styles.Price}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className={styles.Price}>
              <span>Total: </span>
              <span>${totalPrice}</span>
            </div>
            <Link
              to="/CheckOut"
              state={{
                products: cart.map((product, index) => ({
                  name: product.name,
                  image: product.image,
                  quantity: quantities[index],
                  subtotal: getPriceNumber(product.price1) * quantities[index],
                })),
                totalPrice,
              }}
            >
              <button className={styles.checkout}>Procees to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
