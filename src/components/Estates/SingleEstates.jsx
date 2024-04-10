import { Link } from "react-router-dom";


const SingleEstates = ({data}) => {
    const {id,image,estate_title,description,price,status,area,location} = data ||{};
    return (
        <div className="border rounded-lg p-4 hover:shadow-lg">
            <div  className="relative">
                <img className="rounded-lg h-[300px] w-full" src={image} alt="123" />
                <p className="absolute top-2 right-0 g-bg rounded-l-xl px-4 py-2">{status}</p>
            </div>
            <div>
                <h3 className="pt-2 text-gray-500">{location}</h3>
            </div>
            <h1 className="text-2xl font-semibold g-color py-3">{estate_title}</h1>
            <p className="text-md font-light text-gray-500">{description}</p>
            <div className="flex justify-between py-4 font-semibold">
                <h1>{price}</h1>
                <div>
                    <h2>{area}</h2>
                </div>
                
            </div>
             <Link className="btn g-bg text-center " to={`/${id}`}>View details</Link>
        </div>
    );
};

export default SingleEstates;