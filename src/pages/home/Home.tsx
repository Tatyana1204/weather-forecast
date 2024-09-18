import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            home
            <Link to='/details'>детали</Link>
        </div>
    );
};

export default Home;