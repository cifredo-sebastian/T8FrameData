// src/components/cjaracters/Xiaoyu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchFrameData from '../../utils/fetchFrameData';
import FrameDataTable from '../FrameDataTable';
import {motion} from 'framer-motion';

function Xiaoyu () {
    const navigate = useNavigate();
    const [xiaoyuFD, setXiaoyuFD] = React.useState()
    const sheetName = 'xiaoyu';

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchFrameData(sheetName);
            setXiaoyuFD(data);
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
                <h2>Xiaoyu Frame Data</h2>
                {xiaoyuFD ? <FrameDataTable characterFD={xiaoyuFD}/> : <div>Loading...</div>}
            </motion.div>
        </>
    )
};

export default Xiaoyu;
