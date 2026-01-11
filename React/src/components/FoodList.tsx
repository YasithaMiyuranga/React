import React, { useState } from 'react'

const FoodList = () => {
    const Foods: string[] = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad']
    const [cars, setCars] = useState("toyota");

    const handleChangeValue = (food: string) => {
      console.log(food);
      setCars(food);
    }
    return (
      <>
        <p className="text-2xl font-bold text-pink-600">{cars}</p>
        {/* And Operator Example */}
        {Foods && (
          <ul className="mt-10 flex gap-5">
            {Foods.map((food: string) => (
              <button
                key={food}
                className="font-bold text-3xl text-green-500 border-2 cursor-pointer"
                onClick={() => handleChangeValue(food)}
              >
                {food}
              </button>
            ))}
          </ul>
        )}
      </>
    );
} 

export default FoodList