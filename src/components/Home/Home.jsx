import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Estates from '../Estates/Estates';

const Home = () => {
    const data = useLoaderData();
    const estatesData = data.estates;
    
    return (
        <div>
            <Banner></Banner>
            <Estates estatesData={estatesData}></Estates>
        </div>
    );
};

export default Home;