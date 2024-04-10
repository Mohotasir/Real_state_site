import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../CommonCmpnt/Heading';
const EstateDetails = () => {
    const allestates = useLoaderData();
    const { id } = useParams();
    const estate = allestates.estates.find((b) => b.id == id)
    const { image, estate_title, description, price, status, area, location } = estate || {};
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
                    <div className="flex text-xl justify-between py-4 font-semibold">
                        <h1>{price}</h1>
                        <div>
                            <h2>{area}</h2>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default EstateDetails;