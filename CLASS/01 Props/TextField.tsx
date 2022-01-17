import React from "react";

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
}
/*we declare ds component as function component (React.FC)*/
/* React.FC<{text: string}> ==> here we specify all the props that this component is expecting from outside..*/

/*We create an interface named Props which is a model containing all the props this component will receive from the outside and we pass it to the angle brackets of React.FC<Props>*/
const TextField: React.FC<Props> = ({ text, fn, ok, index, person }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default TextField;
