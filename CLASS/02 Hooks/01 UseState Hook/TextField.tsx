import React, { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}
const TextField: React.FC = () => {
  //We can define our setState hook like ds without specifying the type as long as we set a default state, it will infer the type as number for ds scenario cos the default state is a number 5
  const [count, setCount] = useState(5);
  /*Unlike React Js, in React TS, we cannot set a default state of number to null, or null to number etc... If we are to allow multiple data types for a state, we need to explicitly set it using the angle brackets and the OR pipe i.e |. So for the name state, the state can be a string, null or undefined.. N.B Undefined is a type on its own which is different from null */
  const [name, setName] = useState<string | null | undefined>(null);
  /*U can also set the data type of a state to a model*/
  const [personObj, setPersonObj] = useState<Person>({
    firstName: "Mike",
    lastName: "Omoakin",
  });

  setCount(34);
  setName("Mike");
  setPersonObj({ lastName: "Dara", firstName: "Agrific" });
  return <div></div>;
};

export default TextField;
