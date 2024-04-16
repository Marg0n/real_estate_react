import { useForm } from "react-hook-form";
import {
    Link, Navigate,
    // useLocation, 
    useNavigate
} from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import useAuth from './../../hooks/useAuth';
import { Helmet } from "react-helmet-async";
import { useState } from "react";


const Register = () => {

    const { createUser, user, updateUserProfile, loggedOut } = useAuth();

    // custom loader for registration
    const [customLoader, setCustomLoader] = useState(false);

    // password validation
    const [passErr, setPaaErr] = useState('');

    // Navigation
    const navigate = useNavigate();
    // const location = useLocation();
    // const whereTo = location?.state || '/login';
    const whereTo = '/login';


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

   
    const onSubmit = (data) => {
        const { email, password, name, photoURL } = data;

        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            console.log(watch('password'))
            setPaaErr(watch('password'));
            return toast.error("Password must contain an Uppercase, a Lowercase and Length must be at least 6", { autoClose: 3000, theme: "colored" })
        }

        // create user profile and update user
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL)
                    .then(() => {

                        setCustomLoader(true)
                        // Profile updated!
                        toast.success("Registration successful!🎉", { autoClose: 3000, theme: "colored" })
                        toast.info("Try to Login! 😁", { autoClose: 5000, theme: "colored" })
                        
                        // loader
                        setCustomLoader(false)
                        loggedOut();
                        navigate(whereTo)
                        
                    }).catch((errors) => {

                        setCustomLoader(false)
                        // An error occurred
                        const errorMessage = errors.message.split(':')[1].split('(')[0].trim();

                        toast.error(errorMessage, { autoClose: 3000, theme: "colored" });
                        navigate('/register');
                    });

                // console.log(result)

            })
            .catch(errors => {

                setCustomLoader(false)
                // An error occurred                
                const errorCode = errors.code;
                // Remove 'auth/' prefix and '-' characters
                const cleanedErrorCode = errorCode.replace(/^auth\/|-/g, ' ');
                const words = cleanedErrorCode.split('-');
                const capitalizedWords = words.map(word => word.charAt(1).toUpperCase() + word.slice(2));
                const message = capitalizedWords.join(' ');

                toast.error(`${message}`, { autoClose: 5000, theme: "colored" })
                navigate('/register');
            })
    }


    if (customLoader) {
        return <Loader />;
    }

    if (user) {
        // toast.info(`Dear, ${user?.displayName || user?.email}! You are already registered!`, { autoClose: 3000, theme: "colored" });
        return <Navigate to='/' state={location?.pathname || '/'} />
    }

    return (
        <div className="flex justify-center items-center my-10">
            <Helmet>
                <title>Oasis | Home</title>
            </Helmet>

            <img
                src="https://cdn.pixabay.com/photo/2017/06/03/10/06/house-2368389_1280.jpg"
                alt=""
                className="bg-fixed absolute z-[-1] h-[170dvh] w-full object-cover"
            />

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 shadow-2xl font-semibold">
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
                            {/* <small>{passErr}</small> */}
                        </div>

                    </div>
                    <button className="btn bg-teal-400 w-full text-center rounded-lg hover:bg-blue-500 hover:text-white  border-none animate-pulse hover:animate-none">Register</button>
                </form>


                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' className="underline mx-2 text-blue-600 font-bold font-serif">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;