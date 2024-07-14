// src/components/cjaracters/Lars.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Lars () {
    const navigate = useNavigate();
    const [larsFD, setlarsFD] = React.useState()
    const sheetName = 'lars';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setlarsFD(data);
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
                <h2>Lars Frame Data</h2>
                <a href='https://static.grainger.com/rp/s/is/image/Grainger/5ERE6_5'>Comprehensive 200 page guide to Lars</a>
                {larsFD ? <FrameDataTable characterFD={larsFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Lars;
