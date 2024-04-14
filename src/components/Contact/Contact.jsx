import { useState } from 'react';
import Heading from '../CommonCmpnt/Heading';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Heading title="Contact Us"></Heading>
            <div className="flex flex-col gap-8">
                <div className='flex flex-col md:flex-row justify-between gap-3 md:gap-12'>
                <div className=" flex flex-col gap-2 md:gap-6  md:w-[40%]">
                        <h1 className='text-2xl font-semibold text-gray-500'>Office Address</h1>
                        <p data-aos="fade-right" data-aos-duration='1000' className="text-gray-600 px-3 py-6 rounded-lg bg-gray-200 text-2xl ">Dhaka, Bangladesh</p>
                        <p data-aos="fade-right" data-aos-duration='1400' className="text-gray-600 px-3 py-6 rounded-lg bg-gray-200 text-2xl ">123 Office Rd, Dhaka</p>
                        <p data-aos="fade-right" data-aos-duration='1800' className="text-gray-600 px-3 py-6 rounded-lg bg-gray-200 text-2xl ">Phone: +880 123 456 789</p>
                        <p data-aos="fade-right" data-aos-duration='2200' className="text-gray-600 px-3 py-6 rounded-lg bg-gray-200 text-2xl ">Email: info@example.com</p>
                    </div>
                    <div>
                         <h1 className='md:border h-full border-gray-200'></h1>
                    </div>
                    <div className="  bg-white rounded-lg shadow-md p-8 border md:w-[40%]">
                        <form onSubmit={handleSubmit} className='' data-aos="fade-left" data-aos-duration='2000'>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>
                    
                </div>

                <div>
                    <iframe
                        className="w-full h-[400px] rounded-lg"
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.867489829896!2d90.41733901446415!3d23.810332084564863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c732081c95d7%3A0xd6471206db20fa1!2sDhaka%20Stock%20Exchange%20Ltd.!5e0!3m2!1sen!2sbd!4v1636606364099!5m2!1sen!2sbd"
                    ></iframe>

                </div>
            </div>
        </div>
    );
};

export default Contact;
