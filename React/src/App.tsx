import { useState } from "react";
import Alert from "./components/Alert";

const App = () => {
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const handleClick = () => {
    // Add a new tag to the tags array
    setTags([...tags, "tag4"]);
  };

  return (
    <>
      {tags.map((tag, index) => {
        return <p key={index}>{tag}</p>;
      })}
      <button onClick={handleClick} className="border-3">
        Add Tag
      </button>
    </>
  );
};

export default App;
