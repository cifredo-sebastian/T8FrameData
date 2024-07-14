// src/components/cjaracters/Panda.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Panda () {
    const navigate = useNavigate();
    const [pandaFD, setpandaFD] = React.useState()
    const sheetName = 'panda';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setpandaFD(data);
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
                <h2>Panda Frame Data</h2>
                {pandaFD ? <FrameDataTable characterFD={pandaFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
  
};

export default Panda;
