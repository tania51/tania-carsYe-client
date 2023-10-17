import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {

    const navLinks = <div className="space-x-5 text-lg uppercase font-semibold nav-active">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addProduct">Add Product</NavLink>
        <NavLink to="/myCart">My Cart</NavLink>
    </div>

    return (
        <div>
            <div className="navbar bg-base-100 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">CarsYe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="text-lg font-medium bg-orange-600 rounded btn border-none text-white px-6 hover:bg-orange-600 hover:text-gray-300"><button>Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;