
import { FaRegBuilding } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer p-10  text-base-content">
                <aside className="md:w-3/12 ">
                    <div className="flex font-bold text-5xl items-center justify-center">
                        < FaRegBuilding />
                        <a className="btn btn-ghost font-bold text-xl -ml-4 g-color text-transparent bg-clip-text leading-4">Dream < br /> House</a>
                    </div>
                </aside>
                <nav >
                    <h6 className="footer-title text-lg g-color">Category</h6>
                    <a className="link link-hover">To Buy</a>
                    <a className="link link-hover">To Rent</a>
                    <a className="link link-hover">To Sell</a>

                </nav>
                <nav >
                    <h6 className="footer-title text-lg g-color">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Our Business</a>
                    <a className="link link-hover">Our Clients</a>
                </nav>
                <nav >
                    <h6 className="footer-title text-lg g-color">Contact Us</h6>
                    <a className="link link-hover">+088 12343457</a>
                    <a className="link link-hover">009213434</a>
                    <a className="link link-hover">Dhaka,Bangladesh</a>
                </nav>

            </footer>
            <p className="text-center text-md text-gray-700 py-6">Copyright © 2024 - All right reserved by Dream House Ltd</p>
        </div>
    );
};

export default Footer;