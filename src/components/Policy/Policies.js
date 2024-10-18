export default function Policies() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-11 sm:gap-2 text-center py-16 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src="exchange_icon.png" alt="" className="w-12 m-auto mb-4"></img>
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src="quality_icon.png" alt="" className="w-12 m-auto mb-4"></img>
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <img src="support_img.png" alt="" className="w-12 m-auto mb-4"></img>
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
}
