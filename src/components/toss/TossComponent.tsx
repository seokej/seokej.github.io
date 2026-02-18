import React from "react";
import TossMainComponent from "./view/TossMainComponent";
import TossSubComponent from "./view/TossSubComponent";

type Props = {
  variant?: "main" | "sub";
};

const TossComponent = (props: Props) => {
  const { variant = "main" } = props;

  return (
    <div>
      {variant === "main" ? <TossMainComponent /> : <TossSubComponent />}
    </div>
  );
};

export default TossComponent;
