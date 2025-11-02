import gsap from "gsap";
import { Check } from "lucide-react";
import { useEffect } from "react";

export default function Streamline() {
  const data = [
    {
      title: "Capture Instantly:",
      description:
        "Never lose a thought. Quickly add tasks or notes from anywhere.",
    },
    {
      title: "Organize Visually:",
      description:
        "Use the grid to arrange your projects in a way that makes sense to you",
    },
    {
      title: "Execute with Focus",
      description:
        "Minimize distractions with a clean interface and focus-enhancing tools.",
    },
  ];

  useEffect(() => {
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

  return (
    <section className="streamline-container w-full min-h-[80dvh] flex max-2xl:px-4 justify-around gap-4 items-center bg-[#FFF04B]/3 max-lg:flex-col-reverse max-lg:py-16 max-lg:justify-center max-lg:gap-20 max-lg:my-20">
      <div className="streamline-left w-[50%] max-lg:w-full h-full flex justify-center items-center">
        <img
          loading="lazy"
          src="/favicon/web-app-manifest-512x512.png"
          className="rounded-2xl rotate-10 w-md max-2xl:w-sm max-sm:w-xs select-none"
          draggable={false}
        />
      </div>
      <div className="streamline-right w-[50%] max-lg:w-full h-full flex flex-col justify-center max-lg:items-center">
        <div className="streamline-right-top flex flex-col gap-8 max-lg:items-center">
          <h2 className="text-6xl font-bold max-w-[17ch] max-lg:text-center max-lg:!w-full max-2xl:text-5xl">
            Streamline Your{" "}
            <span className="text-[#FFF04B] radiate-target">Workflow</span>
          </h2>
          <p className="text-[#686868] text-lg max-w-[60ch] font-semibold max-lg:px-4 max-md:text-base max-sm:max-w-full">
            MIRA is designed to be intuitive and unobstrusive, letting you focus
            on what trully matters: bringing your ideas to life.
          </p>
          <div className="list flex flex-col gap-8 items-start w-full max-md:px-4">
            {data.map((el, i) => (
              <div
                key={i}
                className="flex justify-start max-lg:justify-center items-center gap-2 w-full"
              >
                <Check className="rounded-full bg-[#FFF04B] max-sm:w-[50px] text-black w-[35px] h-[35px] p-1" />
                <p className="text-lg max-2xl:text-base font-light max-w-[60ch]">
                  <span className="font-semibold">{el.title}</span>{" "}
                  {el.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
