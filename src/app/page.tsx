import Image from "next/image";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="px-[1rem] md:px-[10rem] h-full">
      <Showcase />
      <Projects />
    </div>
  );
}
