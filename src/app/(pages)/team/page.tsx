import { Metadata } from "next";
import React from "react";
import Team from "../../../components/Team";

export const metadata: Metadata = {
  title: "Team",
};

const TeamPage = () => {
  return <Team />;
};

export default TeamPage;
