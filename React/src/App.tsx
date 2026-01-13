import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  useEffect(() => {
    console.log("Count : ", count);
    console.log("Number : ", number);
  }, [count, number]);

  return (
    <>
      <h1 className="text-7xl font-bold">This is my App</h1>
      <button
        className="text-4xl font-bold border-2 cursor-pointer p-4 rounded-2xl"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
      <button
        className="text-4xl font-bold border-2 cursor-pointer p-4 rounded-2xl"
        onClick={() => setNumber(number + 1)}
      >
        Remove
      </button>
    </>
  );
};

export default App;
