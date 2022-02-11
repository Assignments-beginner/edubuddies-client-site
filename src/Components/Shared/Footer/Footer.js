import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center lg:text-left text-gray-300 bg-gray-900 pt-10">
            <div className="container mx-auto">
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <Link to="/home">
                                <img className="w-52 -mt-8 mb-4" src="https://i.ibb.co/HzzW0Xv/logo.png" alt="footer logo" />
                            </Link>
                            <p className="w-80 mx-auto cursor-pointer"> Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                            About Us
                            </h6>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Developers </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Student List </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Privacy Policy </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Sitemap </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Tutorial </Link>
                            </p>
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                            Support
                            </h6>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Contact Us </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Guidelineso </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Supports </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Terms & Conditions </Link>
                            </p>
                            <p className="mb-3 hover:text-orange-500">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Roadmap </Link>
                            </p>
                        </div>
                        <div className="contact-area">
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                            Our Programme
                            </h6>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Web Design </Link>
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Web Development </Link>
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Wordpress development </Link>
                            </p>
                            <p className="flex items-center justify-center md:justify-start hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> Digital Marketing </Link>
                            </p>
                            <p className="flex items-center justify-center md:justify-start hover:text-orange-500 cursor-pointer">
                                <i className="fas fa-angle-double-right mr-2 text-orange-500"></i>
                                <Link to="/home"> SEO </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center pb-8">
                    <span>Copyright; © 2022 - </span>
                    <a className="text-orange-500 font-semibold" href="test"> Edu Buddies Team</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
