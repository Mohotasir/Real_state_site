import { Link, useLoaderData, useParams } from 'react-router-dom';
import Heading from '../CommonCmpnt/Heading';
const EstateDetails = () => {
    const allestates = useLoaderData();
    const { id } = useParams();
    const estate = allestates.estates.find((b) => b.id == id)
    const { image, estate_title, description, facilities, price, status, area, location } = estate || {};
    return (
        <>
            <Heading title="See Details About Your Choice"></Heading>

            <div className="border rounded-lg p-4 hover:shadow-lg flex gap-4 flex-col md:flex-row md:my-16">

                <div className="relative md:w-[50%]">
                    <img className="rounded-lg w-full h-full" src={image} alt="123" />
                    <p className="absolute top-2 right-0 g-bg rounded-l-xl px-4 py-2">{status}</p>
                </div>
                <div className='md:w-[50%] md:px-6'>
                    <div>
                        <h3 className="pt-2 text-gray-500">{location}</h3>
                    </div>
                    <h1 className="text-4xl font-semibold g-color py-3">{estate_title}</h1>
                    <p className="text-md font-light text-gray-500">{description}</p>
                    <div className="flex text-lg justify-between py-4 font-semibold">
                        <h1 className='border h-bg px-3  rounded-full py-2' >Price: {price}</h1>
                        <div>
                            <h2 className='border g-bg px-4  rounded-full py-2'>{area}</h2>
                        </div>

                    </div>
                    <h1 className='g-color text-xl py-3 '>Facilities:</h1>
                    <div className='flex flex-col md:flex-row justify-around border-b-2 py-4 border-gray-200'>
                        {
                            facilities.map(f => <p className='py-2 px-4 bg-gray-300 border rounded-full'>{f}</p>)
                        }
                    </div>
                    <div className='py-4 md:py-8 text-center text-gray-500'>
                       <h1>choose this ? Feel free to <Link className='text-purple-600' to="/contact">CONTACT</Link> </h1>
                       <h1>Or</h1>
                       <h1>Choice Another <Link className='text-purple-600' to="/">OPTION</Link></h1>
                    </div>
                </div>


            </div>
        </>
    );
};

export default EstateDetails;