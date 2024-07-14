// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Roster from './Roster';

function Home () {
    const navigate = useNavigate();

    return (
        <>
            {/* <h2>Home Page</h2> */}
            <Roster/>
        </>
    )
  
};

export default Home;
