// src/components/cjaracters/King.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function King () {
    const navigate = useNavigate();
    const [kingFD, setkingFD] = React.useState()
    const sheetName = 'king';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setkingFD(data);
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
                <h2>King Frame Data</h2>
                {kingFD ? <FrameDataTable characterFD={kingFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default King;
