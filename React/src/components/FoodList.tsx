import React, { useState } from "react";


interface FoodListProps {
  username: string;
}

const FoodList = ({username}: FoodListProps) => {
  // State variables for form inputs
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [school, setSchool] = useState("");

  //Advanced Logical thinking
  const[person,setPerson] = useState({
    name:"",
    address:"",
    city:"",
    school:""
  });

  return (
    <>
    <h2 className="text-4xl text-purple-600">{username}</h2>
      <form>
        <div className="flex flex-col gap-2 border-2 p-5 w-full mt-10">
          {/* Name Input */}
          <input
            className="w-full border-2 "
            id="name"
            type="text"
            value={person.name}
            onChange={(event) => {
              setPerson({
                ...person,
                name: event.target.value,
              });
            }}
          />

          {/* Address Input */}
          <input
            className="w-full border-2 "
            id="address"
            type="text"
            value={person.address}
            onChange={(event) => setPerson({...person, address: event.target.value})}
          />

          {/* City Input */}
          <input
            className="w-full border-2 "
            id="city"
            type="text"
            value={person.city}
            onChange={(event) => setPerson({...person, city: event.target.value})}
          />

          {/* School Input */}
          <input
            className="w-full border-2 "
            id="school"
            type="text"
            value={person.school}
            onChange={(event) => setPerson({...person, school: event.target.value})}
          />

          {/* Submit Button with Console Log */}
          <button
            type="button"
            className="w-full border-2"
            onClick={() => {
              console.log(person.name);
              console.log(person.address);
              console.log(person.city);
              console.log(person.school);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FoodList;
