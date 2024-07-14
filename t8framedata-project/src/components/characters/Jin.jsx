// src/components/cjaracters/Jin.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Jin () {
    const navigate = useNavigate();
    const [jinFD, setjinFD] = React.useState()
    const sheetName = 'jin';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setjinFD(data);
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
                <h2>Jin Frame Data</h2>
                {jinFD ? <FrameDataTable characterFD={jinFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Jin;
