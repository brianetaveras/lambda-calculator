import React, {useState} from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import OperatorButton from './components/ButtonComponents/OperatorButtons/Operators'

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  const [displayNumber, setDisplayNumber] = useState(0)
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  const pressNumber = (number)=>{
    if(displayNumber == 0)
    setDisplayNumber(number)
    else{
      setDisplayNumber( displayNumber + '' + number)

    }
  }
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <div className="display-container">
          <Display number={displayNumber} />
        </div>
        <div className="buttons-container">
          <div className="numbers-container">
          <Specials />
          <Numbers pressNumber = {pressNumber}/>
          </div>
          <div className="operators-box">
          <OperatorButton />

          </div>

        </div>

        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
