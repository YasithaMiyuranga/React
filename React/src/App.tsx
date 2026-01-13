import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Yasitha";
    console.log("App");

    setCount(count + 1);
    console.log(count);
  });

  return (
    <>
      <h1 className="text-7xl font-bold">This is my App</h1>
    </>
  );
};

export default App;
