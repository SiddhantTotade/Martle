import React, { useState } from "react";
import "../../pages/style/heart.css";

const Heart = (props) => {
  const [heart, setHeart] = useState(false);

  return (
    <>
      {props.isFavourite ? (
        <div>
          <span
            onClick={() => (heart ? setHeart(false) : setHeart(true))}
            className="heart heart-active"
          ></span>
        </div>
      ) : (
        <div>
          <span
            onClick={() => (heart ? setHeart(false) : setHeart(true))}
            className="heart"
          ></span>
        </div>
      )}
    </>
  );
};

export default Heart;
