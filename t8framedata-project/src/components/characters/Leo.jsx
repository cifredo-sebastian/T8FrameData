// src/components/characters/Leo.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Leo () {
    const navigate = useNavigate();
    const [leoFD, setleoFD] = React.useState()
    const sheetName = 'leo';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setleoFD(data);
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
                <h2>Leo Frame Data</h2>
                {leoFD ? <FrameDataTable characterFD={leoFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Leo;
