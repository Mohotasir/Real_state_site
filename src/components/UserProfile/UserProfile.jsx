import { useContext } from "react";
import Heading from "../CommonCmpnt/Heading";
import { AuthContext } from "../AuthProvider/AuthProvider";
import backgroundImage from "../../assets/Polygon Luminary.svg"; // Import your background image

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div className=" h-[90vh] bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Heading title="Your profile details ." />
            <div data-aos="fade-right"  data-aos-duration='1000' className="border shadow-lg pb-12 rounded-lg text-center flex flex-col gap-4 justify-center m-4 items-center md:w-[50%] mx-auto p-3 bg-white bg-opacity-75">
                <img className="rounded-full border p-1.5 g-bg m-3 w-[150px] h-[150px]" src={user?.photoURL && user.photoURL} alt="" />
                <h1><span className="text-xl font-semibold">User Name: </span> {user?.displayName && user.displayName}</h1>
                <h1><span className="text-xl font-semibold">Email: </span> {user?.email && user.email}</h1>
            </div>
        </div>
    );
};

export default UserProfile;
