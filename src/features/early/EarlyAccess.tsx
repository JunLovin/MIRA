import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";
import Background from "@/assets/mira-background.jpg";
import Hero from "./components/Hero";
import Possibilities from "./components/Possibilities";

export default function EarlyAccess() {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="scroll-smooth flex flex-col font-inter overflow-hidden min-h-dvh w-full relative z-10 items-center text-white"
      >
        <div className="top-bg absolute top-0 -z-2 h-[90dvh] w-full bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
        <section className="sub-container w-5xl max-lg:w-full mx-auto h-full flex flex-col">
          <Header />
          <div className="flex-1 flex flex-col">
            <Hero />
            <Possibilities />
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
