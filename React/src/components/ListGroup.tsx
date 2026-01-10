import React from 'react'
import MyUniversity from './MyUniversity'
const ListGroup = () => {

  const cities : string[] = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]

  return (
      <div>
        <div className="text-2xl font-bold text-blue-600 mt-4">City List</div>
        <MyUniversity />
        {/* Conditional Rendering Example */}
        {cities.length !== 0 ? (
        <ul>
          {cities.map((city: string, index: number) => (
            <li key={index} className="text-lg text-gray-700">
              {city}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-500">No cities available.</p>)}
      </div>
  );
}

export default ListGroup