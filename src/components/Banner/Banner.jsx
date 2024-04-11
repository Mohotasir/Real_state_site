import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const data = [
    {
        "image": "https://i.postimg.cc/MHV2pf7k/south-sun-house02.jpg",
        "title": "Stylish Apartment with Natural Views",
        "description": "Live in style with stunning Natural views in this contemporary apartment. Enjoy open-plan living, premium finishes, and access to onsite amenities including a fitness center and rooftop terrace."
        
    },
    {
        "image": "https://i.postimg.cc/2SzRC63J/property-gallery-img-1-new.jpg",
        "title": "Cozy Townhouse in Family-Friendly Community",
        "description": "Discover comfort and convenience in this charming townhouse located in a vibrant family-friendly community. Close to schools, parks, and shopping centers, it's the perfect place to call home."
    },
    {
        "image": "https://i.postimg.cc/28S7mNrG/marble-house-01-450x300.jpg",
        "title": "Luxury Villa in Suburban Oasis",
        "description": "Experience the epitome of luxury living in this spacious villa nestled in a serene suburban neighborhood. Featuring modern amenities, expansive gardens, and breathtaking views."
        
    }
]

const Banner = () => {
  
    return (
        <div className='h-screen container mx-auto relative my-3 md:mt-6 rounded-xl'>
        <Swiper
           className='h-[85vh] rounded-2xl'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
        >
            {
                data.map((slide,index) =>
                    <SwiperSlide key={index} className="  bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                        <div  className=" absolute left-[10%] md:left-[20%] top-[30%] p-6 rounded-xl t-bg  text-center text-black border w-[80%] md:w-[60%] mx-auto "  >
                            <h1 className=" text-3xl md:text-5xl font-bold" data-aos="fade-right" data-aos-duration='1000'>{slide.title}</h1>
                            <p className="mt-4 mb-3"data-aos="zoom-in" data-aos-duration='1200'>{slide.description}</p>
                            <button className='btn g-bg z-10 'data-aos="fade-right" data-aos-duration='1000'>Explore Your Dream Home</button>
                        </div>
                    </SwiperSlide>

                )}



        </Swiper>
        </div>
    );
};

export default Banner;