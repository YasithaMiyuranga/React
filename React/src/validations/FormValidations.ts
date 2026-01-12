import z from "zod";

export const schema = z.object({
  firstName: z.string().min(5, "First Name must be at least 5 characters"),
  lastName: z.string().min(2, "Last Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(16, "Age must be at least 16").optional(),
  course: z.string().min(2, "Course name is required"),
});


