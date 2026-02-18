import React from "react";
import NwMainComponent from "./view/NwMainComponent";
import NwSubComponent from "./view/NwSubComponent";

type Props = {
  variant?: "main" | "sub";
};

const NwComponent = (props: Props) => {
  const { variant = "main" } = props;

  return (
    <div>{variant === "main" ? <NwMainComponent /> : <NwSubComponent />}</div>
  );
};

export default NwComponent;
