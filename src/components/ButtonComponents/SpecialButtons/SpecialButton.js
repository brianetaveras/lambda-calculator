import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      <button className="button specialButton">{props.type}</button>

    </div>
  );
};

export default SpecialButton