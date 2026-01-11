import React, { useState } from "react";

const FoodList = () => {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [school, setSchool] = useState("");

  return (
    <>
      <form>
        <div className="flex flex-col gap-2 border-2 p-5 w-full mt-10">
          {/* Name Input */}
          <input
            className="w-full border-2 "
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          {/* Address Input */}
          <input
            className="w-full border-2 "
            id="address"
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />

          {/* City Input */}
          <input
            className="w-full border-2 "
            id="city"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />

          {/* School Input */}
          <input
            className="w-full border-2 "
            id="school"
            type="text"
            value={school}
            onChange={(event) => setSchool(event.target.value)}
          />

          {/* Submit Button with Console Log */}
          <button
            type="button"
            className="w-full border-2"
            onClick={() => {
              console.log(name);
              console.log(address);
              console.log(city);
              console.log(school);
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
