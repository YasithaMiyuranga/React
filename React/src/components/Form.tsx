import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues } from "react-hook-form";
import z from "zod";
import { schema } from "../validations/FormValidations";



type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({resolver: zodResolver(schema)});

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
            {...register("firstName",)}
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
            {...register("lastName",)}
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
            {...register("email",)}
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
            {...register("age",)}
            className="w-full bg-gray-800 border p-1"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">
              {errors.age.message as string}
            </p>
          )}
        </label>

        {/* Course */}
        <label>
          Course:
          <input
            type="text"
            {...register("course",)}
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
