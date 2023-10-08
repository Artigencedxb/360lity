import Image from "next/image";
import Showcase from "../components/Showcase";
import Projects from "../components/Projects";
import Blog from "@/components/Blog";
import Aboutus from "@/components/Aboutus";
import Contactus from "@/components/Contactus";
import Explore from "@/components/Explore";

export default function Home() {
  return (
    <div className="">
      <Showcase />
      <Projects />
      <Blog />
      <Aboutus />
      <Explore />
      <Contactus />
    </div>
  );
}
