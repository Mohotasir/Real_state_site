
import Heading from "../CommonCmpnt/Heading";
import SingleEstates from './SingleEstates';

const Estates = ({estatesData}) => {
  
    return (
        <div className="container mx-auto mb-8 md:mb-12">
            <Heading title="Our choice of popular real estate"></Heading>
            <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    estatesData.map(
                        (data,idx)=> <SingleEstates key={idx} data={data} ></SingleEstates>
                    )
                }
            </div>
           
        </div>
        
    );
};

export default Estates;