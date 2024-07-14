// src/components/cjaracters/Azucena.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import { motion } from 'framer-motion';

function Azucena () {
    const navigate = useNavigate();
    const [azucenaFD, setazucenaFD] = React.useState()
    const sheetName = 'azucena';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setazucenaFD(data);
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
                <h2>Azucena Frame Data</h2>
                {azucenaFD ? <FrameDataTable characterFD={azucenaFD}/> : <div>Loading...</div>}
            </motion.div>   
        </>
    )
  
};

export default Azucena;
