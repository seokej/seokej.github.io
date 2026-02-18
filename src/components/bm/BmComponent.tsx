import React from "react";
import BmMainComponent from "./view/BmMainComponent";

type BmComponentProps = {
  variant?: "main" | "sub";
};

const BmComponent = ({ variant }: BmComponentProps) => {
  return <BmMainComponent />;
};

export default BmComponent;
