import Background from "@/assets/mira-background.jpg";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import Hero from "./sections/Hero";
import Possibilities from "./sections/Possibilities";
import Streamline from "./sections/Streamline";
import Cta from "./sections/Cta";

export default function Landing() {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        className="scroll-smooth flex flex-col font-inter overflow-hidden min-h-dvh w-full relative z-10 items-center text-white"
      >
        <div className="top-bg absolute top-0 -z-2 h-[90dvh] w-full bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
        <section className="sub-container h-full w-full flex flex-col">
          <header className="w-5xl max-lg:w-full mx-auto">
            <Header />
          </header>
          <div className="flex-1 flex flex-col">
            <Hero />
            <Possibilities />
            <Streamline />
            <Cta />
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
