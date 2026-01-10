import React from 'react'

const FoodList = () => {
    const Foods: string[] = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad']
  return (
    <>
      {/* And Operator Example */}
      {Foods && (
        <ul className="mt-10 flex gap-5">
          {Foods.map((food: string) => (
            <button 
            key={food} 
            className="font-bold text-3xl text-green-500 border-2 cursor-pointer"
            onClick={() => {
                console.log(food)
            }}
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