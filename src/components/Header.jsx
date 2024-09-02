/*eslint-disable */

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import Search from "./Search";
import { useWishlist } from "../WishlistContext";
import { useCart } from "../CartContext";

import Wishlist from "../images/Vector.png"
import Cart from "../images/Vector(1).png"

function Header() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [dropDownOn, setDropDownOn] = useState(false);
  function dropDownCategories() {
    if (!dropDownOn) {
      setDropDownOn(true);
    } else {
      setDropDownOn(false);
    }
  }

  const [dropDownOnUser, setDropDownOnUser] = useState(false);
  const [onClick, setOnClick] = useState(false);
  function dropDownUser() {
    if (!dropDownOnUser) {
      setDropDownOnUser(true);
    } else {
      setDropDownOnUser(false);
    }
    if (!onClick) {
      setOnClick(true);
    } else {
      setOnClick(false);
    }
  }

  return (
    <>
      <div className={styles.top_header}>
        <div className={styles.container}>
          <div className={styles.languages}>
            <p>
              Summer Sale For All Swim Suite And Free Express Delivery-OFF 50%!{" "}
              <a href="#">Shop Now</a>
            </p>
            <select name="">
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.headerBorder}>
        <div className={styles.container}>
          <nav>
            <div className={styles.containerHeader}>
              <span className={styles.categories} onClick={dropDownCategories}>
                Exclusive
              </span>
              <ul
                className={`${styles.navLinks} ${
                  menuOpen ? styles.showMenu : ""
                } ${styles.links} `}
              >
                <li>
                  <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="Contact" onClick={closeMenu}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to="About" onClick={closeMenu}>About</NavLink>
                </li>
                <li>
                  <NavLink to="SignUp" onClick={closeMenu}>
                    Sign<span>.</span>Up
                  </NavLink>
                </li>
              </ul>
              <div className={styles.burgerIcon} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div>
              <div className={styles.searchAndIcon}>
                <Search />
                <div className={styles.icon}>
                  <Link to="/wishlist">
                    <img
                      className={styles.favorite}
                      src={Wishlist}
                      alt=""
                      loading="lazy"
                    />
                  </Link>
                  {wishlist.length > 0 && (
                    <span className={styles.wishlist}>{wishlist.length}</span>
                  )}
                  <Link to="/Cart">
                    <img
                      src={Cart}
                      alt=""
                      loading="lazy"
                    />
                  </Link>
                  {cart.length > 0 && (
                    <span className={styles.cart}>{cart.length}</span>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.container}>
        <ul
          style={{ display: dropDownOn ? "block" : "none" }}
          className={styles.dropDownCategories}
        >
          <li>
            Woman’s Fashion{" "}
            <img src="/src/images/Vector(3).png" alt="" loading="lazy" />
          </li>
          <li>
            Men’s Fashion{" "}
            <img src="/src/images/Vector(3).png" alt="" loading="lazy" />
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Sports & Outdoor</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
