// src/components/cjaracters/Nina.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Nina () {
    const navigate = useNavigate();
    const [ninaFD, setNinaFD] = React.useState()
    const sheetName = 'nina';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setNinaFD(data);
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
                <h2>Nina Frame Data</h2>
                {ninaFD ? <FrameDataTable characterFD={ninaFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Nina;
