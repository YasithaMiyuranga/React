import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

const Scheam = z.object({
    fullName: z
        .string()
        .regex(/[0-9]/, { message: "Numbarayak Damiya Yuthumai" })
        .min(4, { message: "Madi Yako" }),

});

type formData = z.infer<typeof Scheam>;

const ClassForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<formData>({ resolver: zodResolver(Scheam), mode: "onChange" });

    return (
        <form
            className="col align-items-center container mt-4 row-gap-5"
            onSubmit={handleSubmit((data) => console.log(data))}
        >
            <div>
                <label htmlFor="FullName" className="form-label">
                    Full Name
                </label>
                <input
                    type="text"
                    className="form-control focus-ring focus-ring-success"
                    id="FullName"
                    {...register("fullName")}
                />
                {errors.fullName && (
                    <p className="text-danger">{errors.fullName.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="EmailInput" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    id="EmailInput"
                    className="form-control"
                //   {...register("email")}
                />
            </div>

            <div>
                <label htmlFor="Password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    id="Password"
                    className="form-control"
                //   {...register("password")}
                />
            </div>

            <div>
                <label htmlFor="Address" className="form-label">
                    Address
                </label>
                {/* <input type="text" id="Address" {...register("address")} /> */}
            </div>

            <div>
                <label htmlFor="Age" className="form-label">
                    Age
                </label>
                <input
                    type="text"
                    id="Age"
                    className="form-control"
                />

            </div>

            <div className="mt-4">
                <button className="btn btn-success" type="submit" disabled={!isValid}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ClassForm;
