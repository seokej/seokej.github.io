import React from "react";
import PearlabyssMainComponent from "./view/PearlabyssMainComponent";
import PearlabyssSubComponent from "./view/PearlabyssSubComponent";

type Props = {
  variant?: "main" | "sub";
};

const PearlabyssComponent = (props: Props) => {
  const { variant = "main" } = props;

  return (
    <div>
      {variant === "main" ? (
        <PearlabyssMainComponent />
      ) : (
        <PearlabyssSubComponent />
      )}
    </div>
  );
};

export default PearlabyssComponent;
