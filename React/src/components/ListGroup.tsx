import React from 'react'
import MyUniversity from './MyUniversity'
const ListGroup = () => {

  const cities = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  return (
    <>
    <div className="text-3xl text-blue-600">This is ListGroup component</div>
      <MyUniversity />
      <ul>
        {cities.map((city: string) => (
          <li key={city} className="font-bold text-2xl text-yellow-500">{city}</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup