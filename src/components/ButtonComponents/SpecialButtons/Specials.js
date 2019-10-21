import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file
import data from "../../../data";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [buttons, setButtons] = useState(data.specials);

  const clear = ()=>{
    
  }
  const percent = ()=>{

  }
  const negate = ()=>{

  }
  return (
    <div className="specialButtons">
      {buttons.map(button=>{
        return <SpecialButton key={button} type={button} />
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials
