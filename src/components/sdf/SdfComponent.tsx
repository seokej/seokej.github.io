import React from "react";
import styles from "./SdfComponent.module.scss";
import SdfHeaderComponent from "./view/SdfHeaderComponent";
import SdfServiceComponent from "./view/SdfServiceComponent";
import SdfNewsComponent from "./view/SdfNewsComponent";
import SdfWorkComponent from "./view/SdfWorkComponent";
import SdfFooterComponent from "./view/SdfFooterComponent";
import SdfMainSlideComponent from "./view/SdfMainSlideComponent";

const SdfComponent = () => {
  return (
    <div className={styles.wrapper}>
      <SdfHeaderComponent />
      <SdfMainSlideComponent />
      <SdfServiceComponent />
      <SdfNewsComponent />
      <SdfWorkComponent />
      <SdfFooterComponent />
    </div>
  );
};

export default SdfComponent;
