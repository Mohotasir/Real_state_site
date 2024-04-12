
import { useContext } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleSignOut =()=>{
        logOut()
         .then(alert("signout"))
         .catch(error=>alert(error.message))
    }
    const navList = <>
         <li><NavLink to="/">Home</NavLink> </li>
         <li><NavLink to="/contact">Contact</NavLink> </li>
         <li><NavLink to="/blog">Blog</NavLink> </li>
         {
            user &&<>
              <li><NavLink to="/updateProfile">Update profile</NavLink> </li>
            </>
         }
         
    </>
    return (

        <div className="navbar bg-base-100 md:mx-auto md:px-8 py-4 shadow-md fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navList}
                    </ul>
                </div>
                <div className="flex font-bold text-3xl items-center justify-center">
                    < FaRegBuilding />
                    <a className="btn btn-ghost font-bold text-xl -ml-4 g-color text-transparent bg-clip-text leading-4">Dream < br /> House</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navList}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                      <p>{user.email}</p>
                      <button onClick={handleSignOut} className="btn  g-bg" to="/login">Sign Out</button>

                    </>
                    : 
                    <Link className="btn  g-bg" to="/login">Log in</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;