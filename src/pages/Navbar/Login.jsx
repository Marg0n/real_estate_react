import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
    return (

        <div className="flex justify-center items-center my-10">

            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 shadow-2xl">
                <h1 className="text-2xl font-bold text-center font-serif">Login</h1>

                <form action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>

                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>

                        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
                        <div className="flex justify-end text-xs dark:text-gray-6000">
                            <Link to='' className="hover:text-rose-500">Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="btn bg-teal-400 w-full text-center rounded-lg hover:bg-blue-500 hover:text-white">Log In</button>
                </form>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="btn btn-circle btn-outline">
                        <FcGoogle size='30' />
                    </button>
                    <button aria-label="Log in with Twitter" className="btn btn-circle btn-outline">
                        <FaGithub size='30' />
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don&apos;t have an account?
                    <Link className="underline mx-2 text-blue-600 font-bold font-serif">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;