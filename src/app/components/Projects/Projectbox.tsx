import React from "react";
import cn from "classnames";

const ProjextsBox: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={cn(" rounded-[5px]", className)}>ProjextsBox</div>;
};

export default ProjextsBox;
