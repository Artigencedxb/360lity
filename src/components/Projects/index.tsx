"use client";
import { useProjects } from "@/api/project";
import Header from "@/common/Header";
import ProjectsBox from "./Projectbox";
import { useLottie } from "lottie-react";
import animation from "../../../public/animation.json";
import Head from "next/head";

const Projects = () => {
  const { data, isPending } = useProjects(undefined, undefined, "priority");
  console.log(data, "data");
  const projects = data?.data?.project;

  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <>
      <div className="py-[4.3rem] md:py-10">
        <Header heading="Projects" />
        <div className="mt-5">
          {isPending && <div>{View}</div>}
          {!projects?.length && !isPending && (
            <div className="py-16 text-center text-2xl font-medium">
              No projects.
            </div>
          )}
          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {projects?.map((data, index) => {
              return <ProjectsBox key={data?.id} data={data} index={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
