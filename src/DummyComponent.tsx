import React from "react";

interface DummyComponentProps {
  //renders dummy component name
  name: string;
  // renders dummy age
  age: number | string;
  //renders sad dummy component
  isSad?: boolean;
}

const DummyComponent: React.FC<DummyComponentProps> = ({
  name,
  age,
  isSad,
}) => {
  return (
    <div>
      <h1>I am {name}</h1>
      <h2>I am {age} years Old</h2>
      <p>{isSad ? "😔" : "😀 "}</p>
    </div>
  );
};

export default DummyComponent;
