import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      <button className="button specialButton" onClick={()=>{props.pressSpecial(props.type)}}>{props.type}</button>

    </div>
  );
};

export default SpecialButton