import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const lists = <>
        <NavLink
            className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold mr-4" : "font-bold mr-4"}
            to="/">Home</NavLink>
        <NavLink
            className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold mr-4" : "font-bold mr-4"}
            to="/update">Update Profile</NavLink>
        <NavLink
            className={({ isActive }) =>
                isActive ? "text-blue-700 font-bold mr-4" : "font-bold mr-4"}
            to="/register">Register</NavLink>
    </>;
    return (
        <div className="navbar bg-base-200 shadow-2xl container my-4 mx-auto rounded-lg font-serif">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {lists}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl hover:bg-blue-400">Oasis</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                    {lists}
                </ul>
            </div>

            <div className="navbar-end">
                <Link to="/login" 
                className="btn btn-outline text-center rounded-lg hover:bg-blue-500 hover:text-white hover:border-0"
                >
                    Login</Link>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;