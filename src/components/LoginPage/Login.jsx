import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Heading from '../CommonCmpnt/Heading';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email,password} = formData;
        signInUser(email,password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            if(user){
             alert("login successfull!")
            }
            e.target.reset();
            navigate('/');
          })
         .catch(error=> alert(error.message))

    };

    return (
        <div className="g-bg min-h-[90vh] flex flex-col items-center justify-center">
             <Heading title="Log in With Email and Password!"></Heading>
            <div className=" bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center g-color mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block g-color text-sm font-semibold mb-2" htmlFor="name">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block g-color text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700 pr-10"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <button
                            type="button"
                            className="absolute top-9 right-0 flex items-center justify-center px-3 bg-transparent focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash className="h-5 w-5 text-black" /> : <FaEye className="h-5 w-5 text-black" />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full g-bg font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                    <p className='text-gray-700 text-sm py-2 '>Don't have any account? please <Link className='underline text-blue-600' to="/register">register</Link> </p>
                    <div className="text-black flex text-3xl items-center justify-center gap-2 pt-2 border-t-2 my-6">
                        <FcGoogle /> 
                         <p className='text-lg font-bold'>or</p>
                        <FaGithub />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
