import { Link } from "react-router-dom";


const SingleEstates = ({ data }) => {
    const { id, image, estate_title, description, price, status, area, location } = data || {};
    return (
        <div onMouseOver={(e) => e.currentTarget.querySelector('.wishlist').classList.remove('hidden')} onMouseOut={(e) => e.currentTarget.querySelector('.wishlist').classList.add('hidden')} className="border flex flex-col rounded-lg p-4 hover:shadow-lg" data-aos="fade-up" data-aos-duration='500'>
            <div className="flex-1">
                <div className="relative">
                    <img className="rounded-lg h-[300px] w-full" src={image} alt="123" />
                    <p className="absolute top-2 right-0 g-bg rounded-l-xl px-4 py-2">{status}</p>
                    <p className="wishlist btn btn-sm outline-none border-none absolute text-sm  hidden bg-cyan-100 cursor-pointer   top-[0%] left-[0%]">Add to wish list</p>
                    
                </div>
                <div>
                    <h3 className="pt-2 text-gray-500">{location}</h3>
                </div>
                <h1 className="text-2xl font-semibold g-color py-3">{estate_title}</h1>
                <p className="text-md font-light text-gray-500">{description}</p>
                <div className="rating py-2">
                    <input type="radio" name="rating-2" className="mask mask-star-2 g-bg" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 g-bg" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 g-bg" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 g-bg" checked/>
                    <input type="radio" name="rating-2" className="mask mask-star-2 g-bg" />
                </div>
                <div className="flex justify-between py-4 font-semibold">
                    <h1>{price}</h1>
                    <div>
                        <h2>{area}</h2>
                    </div>

                </div>
            </div>
            <Link className="btn g-bg text-center w-[50%] mx-auto " to={`/${id}`}>View details</Link>
        </div>
    );
};

export default SingleEstates;