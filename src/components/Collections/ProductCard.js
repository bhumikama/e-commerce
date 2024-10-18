import styles from "./Collection.module.css";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

// ProductCard component accepts product details and a function to handle adding items to the cart
const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className={styles.productContainer} key={product.productID}>
      {/* Product Image Section */}
      <div className={styles.productImageDiv}>
        <img
          src={product.imageUrl}
          alt={product.productName}
          className={styles.front_image}
        />
      </div>

      {/* Cart Icon Section: Clicking the icon adds the product to the cart */}
      <div
        className={styles.productImageDivCart}
        onClick={() => handleAddToCart(product)}
      >
        <FaCartPlus /> {/* Cart icon */}
      </div>

      <div className={styles.productInfo}>
        <div className={styles.productName}>
          {/* Display product name */}
          <h5>{product.productName}</h5>
          {/* Display product price */}
          <p>€{product.productPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
