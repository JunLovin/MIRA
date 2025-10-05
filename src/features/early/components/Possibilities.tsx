import { Grid, ListChecks, Music, Palette } from "lucide-react";
import PossibilityCard from "./possibilities/PossibilityCard";

export default function Possibilities() {
  const data = [
    {
      icon: <ListChecks className="w-8 h-8" />,
      cardTitle: "Dynamic To-Dos",
      cardDescription:
        "More than just a list. Add sub-tasks, set priorities, and watch your progress come to life.",
    },
    {
      icon: <Grid className="w-8 h-8" />,
      cardTitle: "Modular Grid",
      cardDescription:
        "Organize your notes, tasks, ideas in a flexible grid. See the big picture without losing ideas.",
    },
    {
      icon: <Music className="w-8 h-8" />,
      cardTitle: "Dynamic To-Dos",
      cardDescription:
        "Integrated ambient sounds and music player to help you get into a state of deep work.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      cardTitle: "Personalized Themes",
      cardDescription:
        "Make MIRA yours. Customize the look and feel to match your mood and style.",
    },
  ];

  return (
    <>
      <section className="possibilities-section min-h-dvh flex flex-col items-center gap-16 justify-center">
        <h2 className="font-bold text-5xl text-center max-md:text-4xl max-sm:text-4xl">
          A University of Possibilities
        </h2>
        <div className="possibilities-grid grid grid-cols-2 grid-rows-2 h-full max-lg:grid-cols-1 max-lg:grid-rows-4 px-4 gap-12">
          {data.map((data, i) => (
            <PossibilityCard
              key={i}
              icon={data.icon}
              cardTitle={data.cardTitle}
              cardDescription={data.cardDescription}
            />
          ))}
        </div>
      </section>
    </>
  );
}
