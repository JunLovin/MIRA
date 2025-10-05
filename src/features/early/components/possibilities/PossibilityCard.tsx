import type { ReactNode } from "react";
import Background from "@/assets/mira-background.jpg";

export default function PossibilityCard({
  icon,
  cardTitle,
  cardDescription,
}: {
  icon: ReactNode;
  cardTitle: string;
  cardDescription: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="possibility-card flex h-60 w-full flex-col select-none items-start justify-between p-6 rounded-xl relative"
    >
      <div className="absolute -z-2 inset-0 bg-[#FFF04B]/50 blur-md animate-pulse" />
      <div className="icon bg-[#FFF04B] p-4 rounded-lg text-black">{icon}</div>
      <div className="card-content flex flex-col gap-2">
        <h3 className="font-semibold text-2xl">{cardTitle}</h3>
        <p className="font-medium text-[#666666] text-lg">{cardDescription}</p>
      </div>
    </div>
  );
}
