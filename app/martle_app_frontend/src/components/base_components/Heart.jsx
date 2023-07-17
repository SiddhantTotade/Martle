import React, { useState } from "react";
import "../../pages/style/heart.css";

const Heart = (props) => {
  const [heart, setHeart] = useState(false);

  return (
    <div>
      <span
        onClick={() =>
          heart || props.isFavourite ? setHeart(false) : setHeart(true)
        }
        className={`heart ${props.isFavourite || heart ? "heart-active" : ""}`}
      ></span>
    </div>
  );
};

export default Heart;
