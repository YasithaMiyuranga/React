import React from 'react'

const FoodList = () => {
    const foods = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad']
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-red-600">Food List</h2>
        <ul>
          {foods.map((food: string) => (
            <li key={food} className="text-lg text-gray-700">{food}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FoodList