import React, { useState } from "react";

const Form = () => {
  // 1. සියලුම field එකම state object එකකට ගැනීම
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    course: "",
  });

  // 2. සියලුම input වල වෙනස්කම් හඳුනාගන්නා පොදු function එක
  const handleChange = (e: any) => {
    // Input field එකෙන් name සහ value ලබාගැනීම
    //Destructuring the event target object
    const { name, value } = e.target;

    // කලින් තිබූ දත්ත (form) ආරක්ෂා කරගනිමින් අදාළ 'name' එක පමණක් update කිරීම
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  // 3. Form එක Submit කරන විට ක්‍රියාත්මක වන function එක
  const handleSubmit = (e: any) => {
    e.preventDefault(); // පිටුව refresh වීම වළක්වයි

    // JSON ආකාරයට දත්ත alert එකකින් පෙන්වීම
    // alert(`Student Data:\n${JSON.stringify(form, null, 2)}`);
    console.log("Submitted Form Data:", form);
  };

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
        {/* First Name */}
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
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
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
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
            name="email"
            value={form.email}
            onChange={handleChange}
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
            name="age"
            value={form.age}
            onChange={handleChange}
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
            name="gender"
            value={form.gender}
            onChange={handleChange}
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
            name="course"
            value={form.course}
            onChange={handleChange}
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
