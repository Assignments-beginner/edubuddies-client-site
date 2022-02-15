import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center text-gray-300 bg-gray-900 pt-10">
            <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 cursor-pointer pt-5">
                <div className="w-3/6 mx-auto py-5">
                    <Link to="/home">
                        <img className="w-40 -mt-8 mb-4" src="https://i.ibb.co/HzzW0Xv/logo.png" alt="footer logo" />
                    </Link>
                    <p className="text-left"> Great lesson ideas and lesson plans for ESL teachers! Educators can customize.</p>
                </div>
                <div>
                    <h5 className="text-lg uppercase font-black mb-4 text-red-500 tracking-widest">
                        Programms
                    </h5>
                    <ul>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Web Development </Link>
                        </li>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Digital Marketing </Link>
                        </li>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Res.Web Design </Link>
                        </li>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> SEO (Advance) </Link>
                        </li>                      
                    </ul>
                </div>
                <div>
                    <h5 className="uppercase font-black text-lg mb-4 text-red-500 tracking-widest">
                        About Us
                    </h5>
                    <ul>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Student List </Link>
                        </li>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Developers </Link>
                        </li>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Our Terms </Link>
                        </li>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Site Map </Link>
                        </li>                      
                    </ul>
                </div>
                <div>
                    <h5 className="text-lg uppercase font-black mb-4 text-red-500 tracking-widest">
                        Support
                    </h5>
                    <ul>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Career Guides</Link>
                        </li>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Contsct Us </Link>
                        </li>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Conditions </Link>
                        </li>
                        <li className="mb-4 hover:text-red-500">
                            <FontAwesomeIcon 
                                className="mt-1"
                                icon={faAnglesRight}
                            />
                            <Link to="/home"> Guidlines </Link>
                        </li>                      
                    </ul>
                </div>
            </div>
            <div className="text-center pt-4 pb-8">
                <span>Copyright- © 2022 - </span>
                <a className="text-red-500 font-black" href="test"> Team Edu Buddies</a>
            </div>
        </footer>
    );
};

export default Footer;
