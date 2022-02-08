import React from 'react';
import Banner from '../Banner/Banner';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <h1 className="text-4xl">All Home Component Call From Here</h1>
            <Banner/>

            <Teachers/>
        </div>
    );
};

export default Home;