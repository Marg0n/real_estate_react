import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from './../../hooks/useAuth';


const Register = () => {

    const { createUser } = useAuth();

    // Navigation
    const navigate = useNavigate();
    const location = useLocation();
    const whereTo = location?.state || '/';


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                console.log(result)
                toast.success("Registration successful!🎉", { autoClose: 3000, theme: "colored" })
                if (result.user) {
                    navigate(whereTo)
                }
            })
            .catch(errors => {
                // Get the part after ':' and before '(' and remove leading/trailing whitespace
                const errorMessage = errors.message.split(':')[1].split('(')[0].trim(); 

                toast.error(errorMessage, { autoClose: 3000, theme: "colored" })
            })
    }



    return (
        <div className="flex justify-center items-center my-10">

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 shadow-2xl">
                <h1 className="text-2xl font-bold text-center font-serif">Register</h1>

                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-600">Name</label>

                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full"
                            {...register("name", { required: true })}
                        />
                        <div className="mt-1 animate-pulse">
                            {errors.name && <span className="text-red-500">Please fill up Name field</span>}
                        </div>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>

                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full"
                            {...register("email", { required: true })}
                        />
                        <div className="mt-1 animate-pulse">
                            {errors.email && <span className="text-red-500">Please fill up Email field</span>}
                        </div>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block dark:text-gray-600">Photo URL</label>

                        <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered w-full"
                            {...register("photoURL"
                                // , { required: true }
                            )}
                        />
                        {/* <div className="mt-1 animate-pulse">
                            {errors.photoURL && <span className="text-red-500">Please fill up Photo URL field</span>}
                        </div> */}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>

                        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full"
                            {...register("password", { required: true })}
                        />
                        <div className="mt-1 animate-pulse">
                            {errors.password && <span className="text-red-500">Please fill up Password field</span>}
                        </div>

                    </div>
                    <button className="btn bg-teal-400 w-full text-center rounded-lg hover:bg-blue-500 hover:text-white ">Register</button>
                </form>


                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' className="underline mx-2 text-blue-600 font-bold font-serif">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;