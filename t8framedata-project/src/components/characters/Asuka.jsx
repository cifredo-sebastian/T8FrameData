// src/components/cjaracters/Asuka.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import { motion } from 'framer-motion';

function Asuka () {
    const navigate = useNavigate();
    const [asukaFD, setAsukaFD] = React.useState()
    const sheetName = 'asuka';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setAsukaFD(data);
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
                <h2>Asuka Frame Data</h2>
                {asukaFD ? <FrameDataTable characterFD={asukaFD}/> : <div>Loading...</div>}
        </motion.div>
        </>
    )
  
};

export default Asuka;
