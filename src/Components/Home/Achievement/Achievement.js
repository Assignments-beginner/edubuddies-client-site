import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson,faGraduationCap,faTrophy,faVideo } from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';

const bgStyle={
    backgroundImage:`url("https://i.ibb.co/YWR4K2B/pexels-andrea-piacquadio-3765132.jpg")`,
    backgroundColor:'rgba(0, 3, 32, 0.66)',
    backgroundBlendMode:'darken',
    backgroundPosition:'top',
    backgroundRepeat:'no-repeat',
    backgroundAttachment:'fixed',
    backgroundSize:'cover',
};

const Achievement = () => {
    return (
        <div>
            <h2 className="text-4xl uppercase font-black mt-24 text-red-500 mb-2">
                Our Achievement
            </h2>
            <div style={bgStyle}>
                <div className="mx-auto px-6 pt-8">
                    <div className="text-2xl font-black text-center text-white mb-4">
                        We are Happy For This
                    </div>
                    <p className="text-center text-gray-300 mb-2">We are a growing team of professional trainers who love our work but overall <br /> helping our students reach their maximum potential in their career</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 container mx-auto h-96 items-center pb-28" >
                    <div className="border border-gray-400 py-3 rounded-xl mx-5 mb-2">
                        <FontAwesomeIcon 
                            className="text-5xl text-red-500"
                            icon={faPerson}
                        />
                        <span className="text-3xl text-white font-black ml-3">
                            <CountUp
                                start={0}
                                end={3000}
                                duration={2.75}
                                suffix={"+"}
                            />
                        </span>
                        <span className=" text-gray-300 text-2xl"> Students</span>
                    </div>
                    <div className="border border-gray-400 py-3 rounded-xl mx-5 mb-2">
                        <FontAwesomeIcon 
                            className="text-5xl text-red-500"
                            icon={faGraduationCap}
                        />
                        <span className="text-3xl text-white font-black ml-3">
                            <CountUp
                                start={0}
                                end={1000}
                                duration={2.75}
                                suffix={"+"}
                            />
                        </span>
                        <span className="text-xl text-gray-300 ml-3"> Graduates</span>
                    </div>
                    <div className="border border-gray-400 py-3 rounded-xl mx-5 mb-2">
                        <FontAwesomeIcon 
                            className="text-5xl text-red-500"
                            icon={faTrophy}
                        />
                        <span className="text-3xl text-white font-black ml-3">
                            <CountUp
                                start={0}
                                end={663}
                                duration={2.75}
                                suffix={"+"}
                            />
                        </span>
                        <span className="text-xl text-gray-300 ml-3"> Awards</span>
                    </div>
                    <div className="border border-gray-400 py-3 rounded-xl mx-5 mb-2">
                        <FontAwesomeIcon 
                            className="text-5xl text-red-500"
                            icon={faVideo}
                        />
                        <span className="text-3xl text-white font-black ml-3">
                            <CountUp
                                start={0}
                                end={900}
                                duration={2.75}
                                suffix={"+"}
                            />
                        </span>
                        <span className="text-xl text-gray-300 ml-3"> Videos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;