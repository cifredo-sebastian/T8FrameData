// src/components/cjaracters/Hwoarang.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Hwoarang () {
    const navigate = useNavigate();
    const [hwoarangFD, sethwoarangFD] = React.useState()
    const sheetName = 'hwoarang';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            sethwoarangFD(data);
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
                <h2>Hwoarang Frame Data</h2>
                {hwoarangFD ? <FrameDataTable characterFD={hwoarangFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Hwoarang;
