import React from "react";
import firstImg from "./../../images/TaskImg1.png";

export const FirstImage = (width) => {
  console.log(width);
  return (
    <div>
      <img src={firstImg} className="p-3" width={width.width} alt="error" />
    </div>
  );
};
