// src/components/cjaracters/DevilJin.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import { motion } from 'framer-motion';

function DevilJin () {
    const navigate = useNavigate();
    const [deviljinFD, setdeviljinFD] = React.useState()
    const sheetName = 'devil-jin';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setdeviljinFD(data);
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
                <h2>Devil Jin Frame Data</h2>
                {deviljinFD ? <FrameDataTable characterFD={deviljinFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default DevilJin;
