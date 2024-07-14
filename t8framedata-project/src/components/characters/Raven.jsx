// src/components/cjaracters/Raven.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Raven () {
    const navigate = useNavigate();
    const [ravenFD, setravenFD] = React.useState()
    const sheetName = 'raven';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setravenFD(data);
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
                <h2>Raven Frame Data</h2>
                {ravenFD ? <FrameDataTable characterFD={ravenFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Raven;
