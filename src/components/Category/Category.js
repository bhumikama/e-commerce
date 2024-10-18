import React from "react";

// CollectionBox component to display a collection of products
const CollectionBox = () => {
  return (
    <>
      {/* Main container for the collection with responsive grid layout */}
      <div className="grid grid-cols-1 gap-8 px-16 py-16 h-auto collection xl:grid-cols-2 xl:px-40">
        {/* Left side collection box with background image and product info */}
        <div className="bg-cover bg-top bg-[url('/c-d-x-PDX_a_82obo-unsplash.jpg')] p-8 h-full flex flex-col justify-end bg-[#eff0f1] collectionLeft">
          {/* Subheading for the collection */}
          <p className="uppercase text-sm col-p">Must-Haves</p>

          <h3 className="uppercase text-xl font-medium col-h3">
            <span className="font-bold"> WIRELESS </span>Headphones
          </h3>
          <div>
            <h5 className="text-xs uppercase font-medium relative inline-block">
              Browse Now
              <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-black"></span>
            </h5>
          </div>
        </div>

        {/* Right side collection grid with two items */}
        <div className="grid grid-rows-2 gap-8 collectionRight">
          {/* First right-side collection box */}
          <div className="bg-cover bg-center bg-[url('/marek-prygiel-7RLztM4KdcE-unsplash.jpg')] p-8 h-[15rem] flex flex-col justify-end bg-[#eff0f1]">
            <p className="uppercase text-sm col-p">Hot List</p>
            <h3 className="uppercase text-xl font-medium col-h3">
              <span className="font-bold">Watch</span> Collection
            </h3>
            <div>
              <h5 className="text-xs uppercase font-medium relative inline-block">
                Browse Now
                <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-black"></span>
              </h5>
            </div>
          </div>

          {/* Second right-side collection box */}
          <div className="bg-cover bg-center bg-[url('/products/karsten-winegeart-XFV51iCfdrw-unsplash.jpg')] p-8 h-[15rem] flex flex-col justify-end bg-[#f4e5e0]">
            <p className="uppercase text-sm col-p">Explore Now</p>
            <h3 className="uppercase text-xl font-medium col-h3">
              <span className="font-bold"> Latest StreetWear</span>
            </h3>
            <div>
              <h5 className="text-xs uppercase font-medium relative inline-block">
                Browse Now
                <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-black"></span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionBox;
