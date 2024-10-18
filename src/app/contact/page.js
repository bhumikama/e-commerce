import React from "react";
import Subscribe from "@/components/Subscribe/Subscribe";
function Contact() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            Contact <span className="text-gray-700 font-medium">US</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center items-center">
        <img
          className="w-full md:max-w-[480px]"
          src="/contact_us.jpg"
          alt=""
        ></img>
        <div className="flex flex-col gap-6 justify-center items-start text-gray-600 md:w-2/4">
          <p className="text-gray-600 text-xl font-semibold">Our Store</p>
          <p className="text-gray-500">
            2300 Kongens Nytrov <br></br>
            Copenhagen, Denmark
          </p>
          <p>
            Tel : (+45) 22001100 <br></br> Email : info@shop.in
          </p>
          <p></p>
        </div>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
}

export default Contact;
