// src/components/cjaracters/Lee.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Lee () {
    const navigate = useNavigate();
    const [leeFD, setleeFD] = React.useState()
    const sheetName = 'lee';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setleeFD(data);
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
                <h2>Lee Frame Data</h2>
                {leeFD ? <FrameDataTable characterFD={leeFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Lee;
