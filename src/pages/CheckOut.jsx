import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CheckOut.module.css";

import payment from "../images/Frame 834.png"

function CheckOut() {
  const location = useLocation();
  const navigate = useNavigate();

  const checkoutData = location.state;

  if (!checkoutData) {
    navigate("/Cart");
    return null;
  }

  return (
    <div className={styles.page}>
      <span>
        Home / Cart / <span> CheckOut</span>
      </span>
      <h1>Billing Details</h1>
      <div className={styles.container}>
        <div className={styles.form}>
          <span>First Name*</span>
          <input type="text" />
          <span>Company Name</span>
          <input type="text" />
          <span>Street Address*</span>
          <input type="text" />
          <span>Apartment, floor, etc. (optional)</span>
          <input type="text" />
          <span>Town/City*</span>
          <input type="text" />
          <span>Phone Number*</span>
          <input type="text" />
          <span>Email Address*</span>
          <input type="text" />
        </div>
        <div className={styles.total}>
            <div>
                {checkoutData.products.map((product, index) => (
                    <div key={index} className={styles.product}>
                        <div>
                            <img src={product.image} alt={product.name} width="50" />
                            <span>{product.name}  x{product.quantity} </span>
                        </div>
                        <span> ${product.subtotal}</span>
                    </div>
                ))}
            </div>
            <div className={styles.Price}>
                <span>Subtotal: </span>
                <span>${checkoutData.totalPrice}</span>
            </div>
            <hr />
            <div className={styles.Price}>
                <span>Shipping:</span>
                <span>Free</span>
            </div>
            <hr />
            <div className={styles.Price}>
                <span>Total: </span>
                <span>${checkoutData.totalPrice}</span>
            </div>
            <div className={styles.payment}>
                <div className={styles.radio}>
                    <div>
                      <div className={styles.bank}>
                          <input type="radio" value='bank' id="bank" name="payment" />
                          <label htmlFor="bank">Bank</label>
                      </div>
                      <img src={payment} alt="" />
                    </div>
                </div>
                  <div className={styles.cash}>
                      <input type="radio" value='Cash' name="payment" id="Cash"/>
                      <label htmlFor="Cash">Cash on delivery</label>
                  </div>
                <div className={styles.coupon}>
                    <input type="text" placeholder="Coupon Code" />
                    <button className={styles.apply}>Apply Coupon</button>
                </div>
                <button className={styles.apply}>Place Order</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
