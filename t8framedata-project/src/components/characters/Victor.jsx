// src/components/cjaracters/Victor.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Victor () {
    const navigate = useNavigate();
    const [victorFD, setvictorFD] = React.useState()
    const sheetName = 'victor';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setvictorFD(data);
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
                <h2>Victor Frame Data</h2>
                {victorFD ? <FrameDataTable characterFD={victorFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Victor;
