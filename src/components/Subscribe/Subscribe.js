import { Button } from "../ui/button";

export default function Subscribe() {
  return (
    <div
      className="px-9 flex items-center justify-between bg-cover bg-center bg-no-repeat flex-wrap h-60 w-full bg-[#f4e5e0]"
      style={{ backgroundImage: `url('/slideshow-pattern.png')` }}
    >
      <div className="px-5">
        <h5 className="text-[#500110] text-3xl">Sign up for our NewsLetter</h5>
        <p className="text-black text-lg">
           Get emails about our <span>special offers</span>
        </p>
      </div>
      <div className="flex w-2/5">
        <input type="text" placeholder="Enter your email address" className="h-12 w-90 px-7 text-lg border-solid outline-none rounded-sm"></input>
        <Button className="bg-[#500110] text-white h-12">Sign Up</Button>
      </div>
    </div>
  );
}
