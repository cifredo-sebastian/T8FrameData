// src/components/cjaracters/Steve.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';


function Steve () {
    const navigate = useNavigate();
    const [steveFD, setsteveFD] = React.useState()
    const sheetName = 'steve';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setsteveFD(data);
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
                <h2>Steve Frame Data</h2>
                {steveFD ? <FrameDataTable characterFD={steveFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Steve;
