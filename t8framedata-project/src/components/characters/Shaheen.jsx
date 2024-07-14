// src/components/cjaracters/Shaheen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Shaheen () {
    const navigate = useNavigate();
    const [shaheenFD, setshaheenFD] = React.useState()
    const sheetName = 'shaheen';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setshaheenFD(data);
        };

        fetchData();
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1 }}
            >
                <h2>Shaheen Frame Data</h2>
                {shaheenFD ? <FrameDataTable characterFD={shaheenFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Shaheen;
