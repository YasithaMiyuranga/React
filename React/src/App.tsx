import { useState } from "react";
import Alert from "./components/Alert";

const App = () => {
  const [tags, setTags] = useState([
    { id: 1, name: "tag1" },
    { id: 2, name: "tag2" },
    { id: 3, name: "tag3" }
  ]);

  const handleClick = () => {
    // Add a new tag to the tags array
    // setTags([...tags, "tag4"]);


    // Remove a tag from the tags array
    // setTags(
    //   tags.filter((tag) => {
    //     return tag !== "tag1";
    //   })
    // );


    // Update a tag in the tags array
    // setTags(tags.map((tag) => {return tag === "tag1" ? "updatedTag1" : tag;}));

    setTags(
      tags.map((tag) =>
      tag.name === "tag2" ? { ...tag, name: "updatedTag2" } : tag)
    )
    
  };

  return (
    <>
      {tags.map((tag, index) => {
        return <p key={index}>{tag.name}</p>;
      })}
      <button onClick={handleClick} className="border-3">
        Add Tag
      </button>
    </>
  );
};

export default App;