import React from 'react'
import ListGroup from './components/ListGroup';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className=" text-red-600 font-bold text-4xl ">Yasitha Miyuranga</h1>
      <h2 className="font-bold text-4xl">Software Developer</h2>
    <ListGroup/>
    </div>
  );
}

export default App