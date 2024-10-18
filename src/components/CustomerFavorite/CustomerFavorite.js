// components/LimitedProductSlider.js
"use client";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from "@/app/context/CartContext";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCartPlus } from "react-icons/fa";

// Sample limited edition product data
const favoriteList = [
  {
    productID: 11,
    imageUrl: "/domino-studio-164_6wVEHfI-unsplash.jpg",
    productName: "Nike Air",
    productPrice: 57,
  },
  {
    productID: 12,
    imageUrl: "/products/heels.jpg",
    productName: "Blue Heels",
    productPrice: 45,
  },
  {
    productID: 13,
    imageUrl: "/products/earphones.jpg",
    productName: "AirPods",
    productPrice: 125,
    productReviews: "1k+ reviews",
  },
  {
    productID: 14,
    imageUrl: "/products/bag.jpg",
    productName: "Mango Bag",
    productPrice: 27,
  },
  {
    productID: 15,
    imageUrl: "/products/rayban.jpg",
    productName: "Raybans Sunglasses",
    productPrice: 43,
  },
];

// CustomerFavorite component to display fast-selling products
const CustomerFavorite = () => {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <div className="my-10 px-4 md:px-32">
      <h2 className="text-center text-3xl font-medium uppercase mb-5">
        Fast Selling Products
      </h2>

      {/* Swiper component to create a slider for products */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        navigation // Enables navigation arrows
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // Allows autoplay to continue after user interactions
        }}
      >
        {/* Mapping through favoriteList to create a slide for each product */}
        {favoriteList.map((product) => (
          <SwiperSlide key={product.productID}>
            <div className="relative h-[310px] overflow-hidden transition-all duration-300 group">
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" // Image scales on hover
              />

              {/* Cart button overlay on the image */}
              <div
                className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow cursor-pointer"
                onClick={() => handleAddToCart(product)} // Adding product to cart on click
              >
                <FaCartPlus className="text-gray-600" />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col">
                <h5 className="text-lg font-normal">{product.productName}</h5>
                <p className="text-sm">${product.productPrice}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerFavorite;
