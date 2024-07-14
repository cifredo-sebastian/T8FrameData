// src/components/cjaracters/Kuma.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Kuma () {
    const navigate = useNavigate();
    const [kumaFD, setkumaFD] = React.useState()
    const sheetName = 'kuma';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setkumaFD(data);
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
                <h2>Kuma Frame Data</h2>
                {kumaFD ? <FrameDataTable characterFD={kumaFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Kuma;
