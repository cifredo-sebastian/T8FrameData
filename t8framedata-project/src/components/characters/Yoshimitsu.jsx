// src/components/cjaracters/Yoshimitsu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Yoshimitsu () {
    const navigate = useNavigate();
    const [yoshimitsuFD, setyoshimitsuFD] = React.useState()
    const sheetName = 'yoshimitsu';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setyoshimitsuFD(data);
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
                <h2>Yoshimitsu Frame Data</h2>
                {yoshimitsuFD ? <FrameDataTable characterFD={yoshimitsuFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
};

export default Yoshimitsu;
