// src/components/cjaracters/Zafina.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Zafina () {
    const navigate = useNavigate();
    const [zafinaFD, setzafinaFD] = React.useState()
    const sheetName = 'zafina';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setzafinaFD(data);
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
                <h2>Zafina Frame Data</h2>
                {zafinaFD ? <FrameDataTable characterFD={zafinaFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
};

export default Zafina;
