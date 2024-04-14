import React, { useContext, useEffect, useState } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useRef } from "react";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleSignOut = () => {
        logOut()
            .then(alert("Sure? Are you sure you want to sign out?"))
            .catch(error => alert(error.message));
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const navList = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>

        </>
    );

    return (
        <div className="navbar bg-base-100 md:mx-auto md:px-8 py-4 shadow-md fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <div className="flex font-bold text-3xl items-center justify-center">
                    <FaRegBuilding />
                    <a className="btn btn-ghost font-bold text-xl -ml-4 g-color text-transparent bg-clip-text leading-4">Dream <br /> House</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <div className="relative" ref={dropdownRef}>
                            <div tabIndex={0} role="button" className="text-2xl m-1 rounded-full p-2 hover:bg-gray-200" onClick={toggleDropdown}><IoIosArrowDropdown /></div>
                            {showDropdown && (
                                <ul tabIndex={0} className="absolute  right-0 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><NavLink to="/userProfile">User Profile</NavLink></li>
                                    <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
                                    <button onClick={handleSignOut} className="btn btn-sm py-2 border border-cyan-950" to="/login">Sign Out</button>

                                </ul>
                            )}
                        </div>
                        <img className="w-[40px] h-[40px] rounded-full mr-2 hover:cursor-pointer" src={user.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} />
                        <Tooltip id="my-tooltip" />
                    </>
                ) : (
                    <>
                        <Link className=" px-3 py-2 text-sm h-bg rounded-md mr-2" to="/register">Sign Up</Link>
                        <Link className=" px-3 py-2 text-sm g-bg rounded-md" to="/login">Log in</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
