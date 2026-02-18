import React from "react";
import HiMainComponent from "./view/HiMainComponent";
import HiSubComponent from "./view/HiSubComponent";

type Props = {
  variant?: "main" | "sub";
};

const HiComponent = (props: Props) => {
  const { variant = "main" } = props;

  return (
    <div>{variant === "main" ? <HiMainComponent /> : <HiSubComponent />}</div>
  );
};

export default HiComponent;
