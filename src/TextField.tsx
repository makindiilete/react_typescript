import React, { ChangeEvent, useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

/*This is a model named 'Props' containing all properties ds component will receive from outside and their data type*/
interface Props {
  text: string;
  ok?: boolean; // ds is optional
  index?: number; // ds is optional
  fn: (bob: string) => void; // return ntin but takes a string parameter Bob
  // fn: (bob: string) => string; //returns a string
  /*    obj: {
        firstName: string,
        lastName: string
    }*/
  person: Person;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
/*we declare ds component as function component (React.FC)*/
/* React.FC<{text: string}> ==> here we specify all the props that this component is expecting from outside..*/

/*We create an interface named Props which is a model containing all the props this component will receive from the outside and we pass it to the angle brackets of React.FC<Props>*/
const TextField: React.FC<Props> = ({
  text,
  fn,
  ok,
  index,
  person,
  handleChange,
}) => {
  //We can define our setState hook like ds without specifying the type as long as we set a default state, it will infer the type as number for ds scenario cos the default state is a number 5
  const [count, setCount] = useState(5);
  /*Unlike React Js, in React TS, we cannot set a default state of number to null, or null to number etc... If we are to allow multiple data types for a state, we need to explicitly set it using the angle brackets and the OR pipe i.e |. So for the name state, the state can be a string, null or undefined.. N.B Undefined is a type on its own which is different from null */
  const [name, setName] = useState<string | null | undefined>(null);
  /*U can also set the data type of a state to a model*/
  const [personObj, setPersonObj] = useState<Person>({
    firstName: "Mike",
    lastName: "Omoakin",
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  /*handling onChange event of an input field using ref*/
  const handleChangeOne = () => {
    console.log(inputRef.current?.value);
  };

  const handleChangeTwo: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget.value);
  };

  /*The first type after the first colon is the data type of this function while the second is the return data type.. which means ds function must return a number.. If it wont return anything then it sud be void or we do not need to put it there*/
  const handleChangeThree: React.ChangeEventHandler<HTMLInputElement> = (): number => {
    return 23;
  };

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChangeOne} name="nameInput" />
      <input onChange={handleChangeTwo} name="nameInput" />
    </div>
  );
};

export default TextField;
