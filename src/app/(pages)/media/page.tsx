import React from "react";
import Media from "../../../components/Media";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media",
};

const MediaPage = () => {
  return <Media />;
};

export default MediaPage;
