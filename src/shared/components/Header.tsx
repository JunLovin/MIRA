import { Link } from "react-router-dom";
import Pricing from "@/assets/pricing.png";
import { useState } from "react";
import Toast from "./ui/Toast";

export default function Header() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleComingSoon = () => {
    if (isToastVisible) return;
    setIsToastVisible(true);
  };

  return (
    <>
      <Toast
        isVisible={isToastVisible}
        setIsVisible={setIsToastVisible}
        className="font-semibold text-lg select-none"
      >
        Coming Soon!
      </Toast>
      <div
        className="h-50 w-full flex justify-between items-center select-none max-2xl:h-30 max-lg:px-6 max-md:h-30 max-sm:h-20"
        draggable={false}
      >
        <div className="header-left flex justify-center items-center gap-2">
          <div className="logo-container">
            <img
              src="favicon/favicon-96x96.png"
              alt="MIRA Logo"
              className="rounded-2xl size-16  select-none max-sm:size-12"
              draggable={false}
            />
          </div>
          <h2 className="font-bold text-3xl max-sm:text-2xl">MIRA</h2>
        </div>
        <div className="header-right flex justify-center items-center gap-6 max-sm:gap-4">
          <div className="pricing max-sm:hidden">
            <img
              src={Pricing}
              alt="Pricing - Coming soon"
              className="w-22 select-none mt-0.5"
              draggable={false}
            />
          </div>
          <Link
            to="/"
            onClick={handleComingSoon}
            className="font-bold text-xl max-sm:text-lg"
          >
            Login
          </Link>
          <Link to="/" onClick={handleComingSoon}>
            <button className="px-8 py-2 rounded-full bg-[#FFF04B] text-black font-bold text-xl cursor-pointer active:bg-[#e7d944] transition max-sm:text-lg max-sm:px-4">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
