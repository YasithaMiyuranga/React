import { useForm, type FieldValues } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 max-w-sm"
      >
        {/* First Name */}
        <label>
          First Name:
          <input
            type="text"
            {...register("firstName", {
              required: "First Name is required",
              minLength: {
                value: 5,
                message: "First Name must be at least 5 characters",
              },
            })}
            className="w-full bg-gray-800 border p-1"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">
              {errors.firstName.message as string}
            </p>
          )}
        </label>

        {/* Last Name */}
        <label>
          Last Name:
          <input
            type="text"
            {...register("lastName", { required: "Last Name is required" })}
            className="w-full bg-gray-800 border p-1"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">
              {errors.lastName.message as string}
            </p>
          )}
        </label>

        {/* Email */}
        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full bg-gray-800 border p-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message as string}
            </p>
          )}
        </label>

        {/* Age */}
        <label>
          Age:
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: { value: 16, message: "Age must be at least 16" },
              max: { value: 100, message: "Age must be under 100" },
            })}
            className="w-full bg-gray-800 border p-1"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">
              {errors.age.message as string}
            </p>
          )}
        </label>

        {/* Gender Selection */}
        <label>
          Gender:
          <select
            {...register("gender", { required: "Please select your gender" })}
            className="w-full bg-gray-800 border p-1"
          >
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">
              {errors.gender.message as string}
            </p>
          )}
        </label>

        {/* Course */}
        <label>
          Course:
          <input
            type="text"
            {...register("course", { required: "Course name is required" })}
            className="w-full bg-gray-800 border p-1"
          />
          {errors.course && (
            <p className="text-red-500 text-sm">
              {errors.course.message as string}
            </p>
          )}
        </label>

        <button
          type="submit"
          className="bg-blue-600 mt-4 p-2 font-bold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
