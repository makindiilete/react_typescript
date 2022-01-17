import React from "react";
import "./App.css";
// @ts-ignore
import TextField from "./TextField";

function App() {
  //we pass ds as the function our TextField component is expecting
  const handleBob = (value: string) => {
    console.log(value);
  };

  return (
    <div className="App">
      {/*Here we pass the required props (text, person of type Person and fn (function)) and leave out the optional props*/}
      <TextField
        text="Jesus Christ Of Nazareth"
        person={{ firstName: "Michael", lastName: "Omoakin" }}
        fn={() => handleBob("23")}
      />
    </div>
  );
}

export default App;
