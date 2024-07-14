// src/components/cjaracters/Reina.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Reina () {
    const navigate = useNavigate();
    const [reinaFD, setReinaFD] = React.useState()
    const sheetName = 'reina';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setReinaFD(data);
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
                <h2>Reina Frame Data</h2>
                {reinaFD ? <FrameDataTable characterFD={reinaFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Reina;
