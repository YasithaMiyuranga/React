
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {

  const {register, handleSubmit} = useForm();
  console.log(register("firstName"));

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <form onSubmit={handleSubmit((data) => console.log(data))} 
      className="flex flex-col gap-2 max-w-sm">
        {/* First Name */}
        <label>
          First Name:
          <input
            type="text"
            {...register("firstName")}
            className="w-full bg-gray-800 border p-1"
            required
          />
        </label>
        <br />

        {/* Last Name */}
        <label>
          Last Name:
          <input
            type="text"
            {...register("lastName")}
            className="w-full bg-gray-800 border p-1"
            required
          />
        </label>
        <br />

        {/* Email */}
        <label>
          Email:
          <input
            type="email"
            {...register("email")}
            className="w-full bg-gray-800 border p-1"
            required
          />
        </label>
        <br />

        {/* Age */}
        <label>
          Age:
          <input
            type="number"
            {...register("age")}
            min="16"
            max="100"
            className="w-full bg-gray-800 border p-1"
            required
          />
        </label>
        <br />

        {/* Gender Selection */}
        <label>
          Gender:
          <select
            {...register("gender")}
            className="w-full bg-gray-800 border p-1"
            required
          >
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />

        {/* Course */}
        <label>
          Course:
          <input
            type="text"
            {...register("course")}
            className="w-full bg-gray-800 border p-1"
            required
          />
        </label>
        <br />

        <button
          type="submit"
          className="bg-blue-600 p-2 font-bold hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
