// src/components/cjaracters/Bryan.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import { motion } from 'framer-motion';

function Bryan () {
    const navigate = useNavigate();
    const [bryanFD, setbryanFD] = React.useState()
    const sheetName = 'bryan';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setbryanFD(data);
        };

        fetchData();
    }, []);

    return (
         <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 1 }}
            >
                <h2>Bryan Frame Data</h2>
                {bryanFD ? <FrameDataTable characterFD={bryanFD}/> : <div>Loading...</div>}
            </motion.div>
    )
  
};

export default Bryan;
