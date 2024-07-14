// src/components/cjaracters/Kazuya.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Kazuya () {
    const navigate = useNavigate();
    const [kazuyaFD, setkazuyaFD] = React.useState()
    const sheetName = 'kazuya';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setkazuyaFD(data);
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
                <h2>Kazuya Frame Data</h2>
                {kazuyaFD ? <FrameDataTable characterFD={kazuyaFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Kazuya;
