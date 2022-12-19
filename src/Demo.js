import React, { useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  console.log(count,"Count");
  return (
    <div>
      <button onClick={onClickHandler}>Click Me!</button>
    </div>
  );
}
