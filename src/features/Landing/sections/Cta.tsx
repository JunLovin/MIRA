import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";

export default function Cta() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    gsap.fromTo(
      ".radiate-target",
      {
        textShadow: "0 0 5px #FFF04B, 0 0 15px #FFF04B",
      },
      {
        textShadow: "0 0 10px #FFF04B, 0 0 20px #FFF04B, 0 0 10px #FFF04B",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      },
    );
  }, []);

  const getEarlyAccess = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#hero",
        offsetY: 180,
      },
      duration: 1.5,
    });
  };

  return (
    <section className="cta-container h-[80dvh] flex flex-col items-center gap-16 justify-center w-5xl max-5xl max-lg:w-full mx-auto max-md:h-[70dvh]">
      <div className="cta flex flex-col items-center justify-center gap-6">
        <h2 className="text-6xl font-bold text-center max-lg:text-5xl max-sm:text-4xl">
          Ready to{" "}
          <span className="text-[#FFF04B] radiate-target">Radiate</span>?
        </h2>
        <p className="text-[#686868] font-semibold text-xl max-w-[50ch] text-center max-lg:text-lg max-sm:text-base max-sm:px-4">
          Be the first to experience a new way of organizing your life. Join the
          waitlist now.
        </p>
        <button
          onClick={getEarlyAccess}
          className="bg-[#FFF04B] text-lg rounded-lg px-8 py-4 font-semibold text-black active:bg-[#e7d944] cursor-pointer transition max-sm:text-base"
        >
          Get Early Access
        </button>
      </div>
    </section>
  );
}
