// src/components/cjaracters/Lili.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Lili () {
    const navigate = useNavigate();
    const [liliFD, setliliFD] = React.useState()
    const sheetName = 'lili';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setliliFD(data);
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
                <h2>Lili Frame Data</h2>
                {liliFD ? <FrameDataTable characterFD={liliFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Lili;
