// src/components/cjaracters/Jun.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Jun () {
    const navigate = useNavigate();
    const [junFD, setjunFD] = React.useState()
    const sheetName = 'jun';

    React.useEffect(() => {
        console.log('Jun table effect reached')
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setjunFD(data);
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
                <h2>Jun Frame Data</h2>
                {junFD ? <FrameDataTable characterFD={junFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Jun;
