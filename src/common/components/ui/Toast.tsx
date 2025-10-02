import ToastBackground from "@/assets/toast_background.png";
import type { ToastProps } from "@/utilities/types/toast.type";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Toast({
  type = "default",
  children,
  className,
  isVisible,
  setIsVisible,
}: ToastProps) {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    if (toastRef.current) {
      gsap.fromTo(
        toastRef.current,
        { x: 190, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.5,
        },
      );
    }

    const showToastTimeout = setTimeout(() => {
      gsap.fromTo(
        toastRef.current,
        { x: 0, autoAlpha: 1 },
        { x: 190, autoAlpha: 0, duration: 0.5 },
      );
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 2000);

    setIsVisible(true);

    return () => clearInterval(showToastTimeout);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div
          style={{
            backgroundImage: `url(${ToastBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          ref={toastRef}
          draggable={false}
          title={`Toast type ${type}`}
          className={`toast fixed bottom-8 right-8 text-[#FFF04B] w-3xs h-25 p-4 rounded-xl flex justify-center items-center ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
}
