// src/components/cjaracters/Jack8.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Jack8 () {
    const navigate = useNavigate();
    const [jack8FD, setjack8FD] = React.useState()
    const sheetName = 'jack-8';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setjack8FD(data);
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
                <h2>Jack-8 Frame Data</h2>
                {jack8FD ? <FrameDataTable characterFD={jack8FD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Jack8;
