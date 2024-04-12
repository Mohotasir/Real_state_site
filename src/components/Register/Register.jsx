import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../CommonCmpnt/Heading';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
  const {createUser} = useContext(AuthContext);
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, userName, photoURL } = formData;
    
    createUser(email,password)
    .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user,{
          displayName: name,
          photoURL: photoURL
        });
      })
     .then(result =>{
        alert("successfull");
        e.target.reset();
     })
     .catch(error=>{
        alert(error.message);
     })
     
  };

  return (
    <div className="min-h-screen g-bg flex flex-col items-center justify-center">
        <Heading title="Please Register and join with us!!"></Heading>
      <div className="bg-white p-8 mb-24 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center g-color mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
           <label className="block g-color text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
           <label className="block g-color text-sm font-bold mb-2" htmlFor="email">Email</label>
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
          <div className="mb-4">
           <label className="block g-color text-sm font-bold mb-2" htmlFor="photoURL">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
              placeholder="Enter your photo URL"
              value={formData.photoURL}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
           <label className="block g-color text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full g-bg hover:bg-cyan-700 text-cyan-500 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700 text-sm">Already have an account? <Link to="/login" className="text-cyan-500">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
