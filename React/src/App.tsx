import React, { useState } from 'react'
import ListGroup from './components/ListGroup';
import FoodList from './components/FoodList';

const App = () => {

  const name: string = "Yasitha_Miyuranga";
  const [language, setLanguage] = useState("sinhala");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className=" text-red-600 font-bold text-4xl ">Yasitha Miyuranga</h1>
      <h2 className="font-bold text-4xl">Software Developer</h2>
      {/* <ListGroup/> */}
      <FoodList username={name} userlanguage={language} />
    </div>
  );
}

export default App