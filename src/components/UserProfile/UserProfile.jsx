import { useContext } from "react";
import Heading from "../CommonCmpnt/Heading";
import { AuthContext } from "../AuthProvider/AuthProvider";



const UserProfile = () => {
    const {user}  = useContext(AuthContext);
    
    return (
        <div className="md:mb-24">
            <Heading title="Your profile details ."></Heading>
            <div data-aos="fade-right" data-aos-duration='1000' className="border shadow-lg rounded-lg text-center flex flex-col gap-4 justify-center m-4 items-center md:w-[50%] mx-auto p-3">
                <img className="rounded-full border p-1.5 g-bg m-3 w-[150px] h-[150px]" src={user?.photoURL && user.photoURL} alt="" />
                <h1><span className="text-xl font-semibold">User Name: </span> {user?.displayName && user.displayName}</h1>
                <h1><span className="text-xl font-semibold">Email: </span> {user?.email && user.email}</h1>
            </div>
        </div>
    );
};

export default UserProfile;