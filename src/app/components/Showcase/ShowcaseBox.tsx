import React from "react";
import cn from "classnames";

const ShowcaseBox: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={cn(" rounded-[5px]", className)}>ShowcaseBox</div>;
};

export default ShowcaseBox;
