// src/components/cjaracters/Feng.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Feng () {
    const navigate = useNavigate();
    const [fengFD, setfengFD] = React.useState()
    const sheetName = 'feng';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setfengFD(data);
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
                <h2>Feng Frame Data</h2>
                {fengFD ? <FrameDataTable characterFD={fengFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Feng;
