import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1 className="text-4xl">Welcome back !!!</h1>
            <h1 className="text-4xl mb-10">Please login</h1>
            <Link to ="/register">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">Or....Register</button>
            </Link>
        </div>
    );
};

export default Login;