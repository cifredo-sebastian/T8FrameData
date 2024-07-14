// src/components/cjaracters/Alisa.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function Alisa () {
    const navigate = useNavigate();
    const [alisaFD, setAlisaFD] = React.useState()
    const sheetName = 'alisa';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setAlisaFD(data);
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
                <h2>Alisa Frame Data</h2>
                {alisaFD ? <FrameDataTable characterFD={alisaFD}/> : <div> <FontAwesomeIcon icon={faCircleNotch} spin/></div>}
            </motion.div>   
        </>
    )
  
};

export default Alisa;
