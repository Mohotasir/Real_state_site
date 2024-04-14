import React, { useContext, useState, useEffect } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Heading from '../CommonCmpnt/Heading';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [viewModal, setShowModal] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || ''
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, photoURL } = formData;

    // Update user profile using Firebase's updateProfile method
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL
    })
    .then(() => {
      setShowModal(true);
      setTimeout(() => {
        navigate('/');
        setShowModal(false);
      }, 1000);
    })
    .catch(error => {
      console.log(error.message);
    });
  };

  return (
    <div className="min-h-screen g-bg flex flex-col items-center justify-center">
      <Heading title="Update Your Profile" />
      <div className="bg-white p-8 mb-24 rounded-lg shadow-lg w-full max-w-md" data-aos="zoom-in" data-aos-duration='1000'>
        <h2 className="text-3xl font-semibold text-center g-color mb-6">Update Profile</h2>
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
              className="appearance-none cursor-not-allowed border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled
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
          <button
            type="submit"
            className="w-full g-bg hover:bg-cyan-700 text-cyan-500 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </form>
      </div>
      { 
        viewModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white flex flex-col items-center justify-center p-5 md:p-12 rounded-lg shadow-lg text-black">
              <div className='py-2 text-5xl font-semibold'><IoMdCheckmarkCircleOutline /></div>
              <p className="text-2xl g-color font-semibold mb-2">Profile updated successfully!!</p>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default UpdateProfile;
``
