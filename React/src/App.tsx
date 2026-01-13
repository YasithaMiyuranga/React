import { useEffect } from "react";


const App = () => {
  useEffect(() => {
    document.title = "My React App";
    console.log("App component mounted");
  });
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-5"> This is my App </h1>
    </>
  );
}

export default App