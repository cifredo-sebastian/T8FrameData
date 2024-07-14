// src/components/cjaracters/Claudio.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import { motion } from 'framer-motion';

function Claudio () {
    const navigate = useNavigate();
    const [claudioFD, setclaudioFD] = React.useState()
    const sheetName = 'claudio';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setclaudioFD(data);
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
                <h2>Claudio Frame Data</h2>
                {claudioFD ? <FrameDataTable characterFD={claudioFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Claudio;
