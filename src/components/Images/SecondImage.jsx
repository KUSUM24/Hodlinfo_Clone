import React from "react";
import firstImg from "./../../images/TaskImg2.png";

export const SecondImage = (width) => {
  return (
    <div>
      <img src={firstImg} className="p-4 m-0" width={width.width} alt="error" />
    </div>
  );
};
