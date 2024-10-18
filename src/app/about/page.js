import React from "react";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            About <span className="text-gray-700 font-medium">US</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 justify-center items-center">
       <img className="w-full md:max-w-[450px]" src="/about_image.jpg" alt=""></img>
       <div className="flex flex-col gap-6 justify-center text-gray-600 md:w-2/4">
       <p>Our journey began with a simple idea: to create a platform that celebrates individuality and offers a curated selection of high-quality products designed to enhance everyday life.</p>
       <p>What started as a small idea quickly grew into something bigger. We knew that people were looking for more than just products—they wanted to discover items that matched their personal style and values. This realization pushed us to create a brand that was about connecting with our customers and offering them something unique.</p>
       <b className="text-gray-800">Our Mission</b>
       <p>Our mission is to deliver a seamless and personalized shopping experience, offering high-quality products that cater to the evolving needs of our customers. We strive to build lasting relationships through exceptional service, innovative solutions, and a commitment to sustainability.</p>
       </div>
      </div>
    </div>
  );
}

export default About;
