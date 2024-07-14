// src/components/cjaracters/Eddy.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import { motion } from 'framer-motion';


function Eddy () {
    const navigate = useNavigate();
    const [eddyFD, seteddyFD] = React.useState()
    const sheetName = 'eddy';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            seteddyFD(data);
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
                <h2>Eddy Frame Data</h2>
                {eddyFD ? <FrameDataTable characterFD={eddyFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
};

export default Eddy;
