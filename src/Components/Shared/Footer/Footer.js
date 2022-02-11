import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center text-gray-300 bg-gray-900 pt-10">
            <div className="container mx-auto">
                <div className="mx-6 py-10 text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
                        <div>
                            <Link to="/home">
                                <img className="w-52 -mt-8 mb-4" src="https://i.ibb.co/HzzW0Xv/logo.png" alt="footer logo" />
                            </Link>
                            <p className="mx-auto cursor-pointer ml-2 mr-4 w-4/4"> Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                        </div>
                        <div className="mb-4 flex justify-center">
                            <div>
                                <h6 className="uppercase font-semibold mb-4 flex justify-center -ml-10 text-red-500">
                                    About Us
                                </h6>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Developers </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Student List </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Privacy Policy </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Sitemap </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Tutorial </Link>
                                </p>
                            </div>
                        </div>
                        <div className="mb-4 flex justify-center">
                            <div>
                                <h6 className="uppercase font-semibold mb-4 flex justify-center -ml-24 text-red-500">
                                    Support
                                </h6>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Contact Us </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Guidelines </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Supports </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Terms & Conditions </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Roadmap </Link>
                                </p>
                            </div>
                        </div>
                        <div className="mb-4 flex justify-center">
                            <div>
                                <h6 className="uppercase font-semibold mb-4 flex justify-center -ml-20 text-red-500">
                                    Our Programme
                                </h6>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Web design </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Web development </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Wordpress Development </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> Digital Marketing </Link>
                                </p>
                                <p className="mb-3 hover:text-red-500">
                                    <FontAwesomeIcon 
                                        className=' mr-2 text-red-500'
                                        icon={faAnglesRight}
                                    />
                                    <Link to="/home"> SEO </Link>
                                </p>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="text-center pb-8">
                    <span>Copyright; © 2022 - </span>
                    <a className="text-red-500 font-semibold" href="test"> Edu Buddies Team</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
