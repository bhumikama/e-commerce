"use client";
import React, { useContext, useState } from "react";
import styles from "./Collection.module.css";
import { CartContext } from "@/app/context/CartContext";
import ProductCard from "./ProductCard";
import productList from "../../../constants/Products";

// CollectionSection component handles the display of product categories and tabs for an e-commerce section.
const CollectionSection = () => {
  // Get the handleAddToCart function from CartContext
  const { handleAddToCart } = useContext(CartContext);

  // State to track which tab is active (default is "All")
  const [activeTab, setActiveTab] = useState("All");

  // Array of available tabs for product categories
  const tabs = ["All", "Trending", "New", "Top Rated"];

  // Sample limited product list to be shown (can be replaced with dynamic data)

  return (
    <div className={styles.collectionProducts}>
      {/* Section header */}
      <h2>
        Buzzworthy
        <span> Products</span>
      </h2>

      {/* Tabs for navigating between different product categories */}
      <div className={styles.collectionTabs}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <p
              key={index}
              className={tab === activeTab ? "active" : ""} // Apply 'active' class to the current active tab
              onClick={() => setActiveTab(tab)} // Switch tabs when clicked
            >
              {tab}
            </p>
          ))}
        </div>

        {/* Content for each tab */}
        <div className={styles.trendyTabContent}>
          {/* "All" tab: Display all products */}
          {activeTab === "All" && (
            <div className={styles.trendyMainContainer}>
              {productList.map((product) => (
                <ProductCard
                  key={product.productID}
                  product={product}
                  handleAddToCart={handleAddToCart} // Pass add-to-cart functionality to the product card
                />
              ))}
            </div>
          )}

          {/* "New" tab: Display products in reverse order */}
          {activeTab === "New" && (
            <div className={styles.trendyMainContainer}>
              {productList.reverse().map((product) => (
                <ProductCard
                  key={product.productID}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}

          {/* "Top Rated" tab: Display products sorted by rating */}
          {activeTab === "Top Rated" && (
            <div className={styles.trendyMainContainer}>
              {[...productList]
                .sort((a, b) => b.productRating - a.productRating) // Sort products by rating
                .map((product) => (
                  <ProductCard
                    key={product.productID}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
            </div>
          )}

          {/* "Trending" tab: Display products sorted by sales count */}
          {activeTab === "Trending" && (
            <div className={styles.trendyMainContainer}>
              {[...productList]
                .sort((a, b) => b.salesCount - a.salesCount) // Sort products by sales count
                .map((product) => (
                  <ProductCard
                    key={product.productID}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
