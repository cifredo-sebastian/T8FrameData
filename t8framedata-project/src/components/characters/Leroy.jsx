// src/components/cjaracters/Leroy.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Leroy () {
    const navigate = useNavigate();
    const [leroyFD, setleroyFD] = React.useState()
    const sheetName = 'leroy';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setleroyFD(data);
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
                <h2>Leroy Frame Data</h2>
                {leroyFD ? <FrameDataTable characterFD={leroyFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Leroy;
