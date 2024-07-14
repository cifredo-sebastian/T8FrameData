// src/components/cjaracters/Dragunov.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import { motion } from 'framer-motion';

function Dragunov () {
    const navigate = useNavigate();
    const [dragunovFD, setdragunovFD] = React.useState()
    const sheetName = 'dragunov';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setdragunovFD(data);
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
                <h2>Dragunov Frame Data</h2>
                {dragunovFD ? <FrameDataTable characterFD={dragunovFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Dragunov;
