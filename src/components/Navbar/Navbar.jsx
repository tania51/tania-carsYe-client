import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { MdNightlight } from 'react-icons/md';
import { ImSun } from 'react-icons/im';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [mood, setMood] = useState(true);

    
    // console.log(user);

    const logOutHandeler = () => {
        logOut()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.error(err);
            })
    }

    
        
    
    const day = document.getElementById('root').classList.add('day');
    // const night = document.getElementById('root').classList.remove('day')

    // const nightAndDayHandeler = () => 

    const navLinks = <div className="space-x-2 md:space-x-5 text-base md:text-lg uppercase font-semibold nav-active">
        <NavLink className="block md:inline py-3 md:pt-0 pl-2 md:pl-0" to="/">Home</NavLink>
        <NavLink className="block md:inline" to="/addProduct">Add Car</NavLink>
        <NavLink className="block md:inline py-3" to="/myCart">My Cart</NavLink>
        <NavLink className="inline" onClick={() => setMood(!mood)}>
            {
                mood ? <ImSun className="inline-block text-2xl">
                    <script>{day}</script>
                </ImSun>
                :
                <MdNightlight className="inline-block text-2xl"><script>{
                        document.getElementById('root').classList.remove('day')
                    }</script></MdNightlight>
            }
        </NavLink>
    </div>
    
    return (
        <div>
            <div className="navbar bg-[#0f1729] py-6 fixed z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center text-xl font-bold text-orange-500 icon-car">
                        <img className="w-40" src="https://i.ibb.co/TW8FbYv/logo-Car3-removebg-preview.png" alt="" />CarsYe
                        
                        </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <div className="flex gap-3 items-center">
                                <h4 className="text-lg">{user?.displayName}</h4>
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <button onClick={logOutHandeler} className="text-lg font-medium bg-orange-600 rounded btn border-none text-white px-6 hover:bg-orange-600 hover:text-gray-300 ml-3">Log Out</button>
                        </>
                            :
                            <Link to="/login" className="text-lg font-medium bg-orange-600 rounded btn border-none text-white px-6 hover:bg-orange-600 hover:text-gray-300"><button>Login</button></Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;