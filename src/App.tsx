import React from "react";
import "./App.less";
import TextField from "./TextField";
import Note from "./redux-typescript/Note";
import { Button, Input, Space, Spin } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

function App() {
  //we pass ds as the function our TextField component is expecting
  const handleBob = (value: string) => {
    console.log(value);
  };

  const onSearch = (value: string) => console.log(value);

  return (
    <div className="App">
      <Spin  />
      <Button type="primary">Primary Button</Button>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Note />
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
