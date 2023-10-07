import Image from "next/image";
import Showcase from "../components/Showcase";
import Projects from "../components/Projects";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="">
      <Showcase />
      <Projects />
      <Blog />
    </div>
  );
}
