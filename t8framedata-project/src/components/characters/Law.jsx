// src/components/cjaracters/Law.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Law () {
    const navigate = useNavigate();
    const [lawFD, setlawFD] = React.useState()
    const sheetName = 'law';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setlawFD(data);
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
                <h2>Law Frame Data</h2>
                {lawFD ? <FrameDataTable characterFD={lawFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Law;
