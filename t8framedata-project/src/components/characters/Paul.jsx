// src/components/cjaracters/Paul.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Paul () {
    const navigate = useNavigate();
    const [paulFD, setpaulFD] = React.useState()
    const sheetName = 'paul';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setpaulFD(data);
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
                <h2>Paul Frame Data</h2>
                {paulFD ? <FrameDataTable characterFD={paulFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Paul;
